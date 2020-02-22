
<template>
    <div class="d-flex">
        <Popup v-bind:modal="modal">
            <template v-slot:iconModal>
                <img width="30" src="../../assets/img/edit-icon.png" />
            </template>
            <template v-slot:headerExpense>
                Thêm ghi chép
            </template>
            <template v-slot:contentModal>
                <div class="row pb-3">
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Số tiền</label>
                            <input type="type" v-model="state.Amount" placeholder="Nhập số tiền" />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Danh mục</label>
                            <div class="dropdown category-select">
                                <a class="dropdown-toggle " type="button" id="category-select" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span v-if="state.IncomeExpenseCategoryID !== '' "><i class="far fa-address-book"></i> {{ incomeExpenseCategoryChoosed.IncomeExpenseCategoryName }}</span>
                                    <span v-else><i class="far fa-address-book"></i> Chọn danh mục</span>
                                </a>
                                <div class="dropdown-menu p-3" aria-labelledby="category-select">
                                    <div class="p-1" v-for="(item) in incomeExpenseCategories" v-bind:key="item.IncomeExpenseCategoryID" v-on:click="selectIncomeExpenseCategory(item.IncomeExpenseCategoryID)"><i class="far fa-address-book"></i> {{ item.IncomeExpenseCategoryName }}</div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="col-4">
                        <div class="widget p-0">
                            <textarea class="form-control" placeholder="Ghi chú" v-model="state.Description">
                                    
                            </textarea>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Ngày tháng</label>
                            <input type="date" v-model="state.IsoTransactionDate" class="form-control" />


                        </div>
                    </div>
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Ví</label>
                            <div class="dropdown spend-per-month">
                                <a class="dropdown-toggle " type="button" id="spend-per-month" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span v-if="state.AccountID !== '' "><i class="far fa-trash-alt"></i>{{ userAccountChoosed.AccountName }}</span>
                                    <span v-else><i class="far fa-trash-alt"></i> Chọn ví</span>
                                </a>
                                <div class="dropdown-menu p-3" aria-labelledby="spend-per-month">
                                    <div class="p-1" v-for="item in userAccounts" v-bind:key="item.AccountID" v-on:click="selectUserAccount(item.AccountID)"><i class="far fa-trash-alt"></i> {{ item.AccountName }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>

                <div class="info-add font-weight-bold p-3" v-on:click="isCollapse = !isCollapse">
                    Thông tin thêm <i class="fas fa-chevron-down" v-if="isCollapse == true" />
                    <i class="fas fa-chevron-up" v-else />
                </div>

                <div class="row pb-3" v-show="isCollapse">
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Chi cho ai</label>
                            <input type="text" v-model="state.ToAccountID" placeholder="" />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Địa điểm</label>
                            <input type="text" v-model="state.Address" placeholder="" />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Sự kiện</label>
                            <input type="text" v-model="state.EventName" placeholder="" />
                        </div>

                    </div>
                </div>

                <div v-show="isCollapse">
                    <div class="row">
                        <div class="col-12">
                            <span class=" fileinput-button">
                                <i class="far fa-image"></i>
                                <input type="file" name="files[]" multiple="">
                            </span>
                        </div>
                    </div>


                    <div class="row p-3 d-flex justify-start align-items-center">
                        <div class="info-add font-weight-bold pr-2">
                            Đi vay
                        </div>
                        <input type="checkbox" name="toggle" id="toggle" class="toggle" v-model="selected">
                        <label for="toggle" class="m-0"></label>
                    </div>

                    <div class="row pb-3" v-show="selected">
                        <div class="col-6">
                            <div class="widget">
                                <label for="">Người cho vay</label>
                                <input type="text" v-model="state.Giver" placeholder="" />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="widget">
                                <label for="">Hạn trả</label>
                                <input type="date" v-model="state.IsoDebitDate" class="form-control" />
                            </div>
                        </div>
                    </div>
                </div>

            </template>
            <template v-slot:buttonModal>
                <button type="button" class="btn btn-danger" data-dismiss="modal"> <i class="far fa-trash-alt"></i> Hủy</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="createTransaction"><i class="fas fa-save"></i> Tạo</button>
            </template>
        </Popup>
    </div>
</template>
<script>
    import Popup from '../layout/Popup.vue';
    import TransactionClass from '../../assets/js/transaction'
    import IncomeExpenseCategoryClass from '../../assets/js/IncomeExpenseCategory'
    import UserAccountClass from '../../assets/js/UserAccount'
    import eventBus from '../../assets/js/eventbus'
    export default {
        props: [
            'modal'
        ],

        data() {
            return {
                isCollapse: false,
                selected: false,
                incomeExpenseCategories: null,
                userAccounts: null,
                state: {
                    AccountID: '',
                    Address: '',
                    Amount: '',
                    ClosingAmount:'',
                    Description: '',
                    EventName: '',
                    FCAmount: '',
                    Following: true,
                    Giver: '',
                    ImageAttachName: null,
                    IncomeExpenseCategoryID: '',
                    IsFavorite: false,
                    IsoDebitDate: '',
                    IsoTransactionDate: '',
                    Latitude: 0,
                    Longitude: 0,
                    Payee:'',
                    RelatedPerson: null,
                    RelationshipID: null,
                    SortOrder: 0,
                    ToAccountID: null,
                    TransactionID: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    TransactionType: 1
                },

                incomeExpenseCategoryChoosed: null,
                userAccountChoosed: null,
            };
        },
        components: {
            Popup,
        },

        methods: {
            selectIncomeExpenseCategory(id) {
                for (var item in this.incomeExpenseCategories) {
                    if (this.incomeExpenseCategories[item].IncomeExpenseCategoryID == id) {
                        console.log(this.incomeExpenseCategories[item])
                        return [this.incomeExpenseCategoryChoosed = this.incomeExpenseCategories[item], this.state.IncomeExpenseCategoryID = this.incomeExpenseCategories[item].IncomeExpenseCategoryID];
                    }
                }
                
                return null;
            },
             selectUserAccount(id) {
                for (var item in this.userAccounts) {
                    if (this.userAccounts[item].AccountID == id) {
                        console.log(this.userAccounts[item])
                        return [this.userAccountChoosed = this.userAccounts[item], this.state.AccountID = this.userAccounts[item].AccountID];
                    }
                }
                
                return null;
            },
            createTransaction() {
                var transaction = new TransactionClass();
                //console.log(transaction)
                console.log(this.state)
                transaction.create(this.state);
                eventBus.$emit('rerender', true);
             }
        },

        created() {
            var _this = this;
            var incomeExpenseCategory = new IncomeExpenseCategoryClass();
            var userAccount = new UserAccountClass();

            incomeExpenseCategory.getAll().then(data => {
                console.log(data)
                return _this.incomeExpenseCategories = data;
            }).catch(err => {
                console.log(err)
            })

            userAccount.getAll().then(data => {
                console.log(data)
                return _this.userAccounts = data;
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>
<style lang="scss">
    .widget {
        height: 90px;
        border: 1px solid gray;
        border-radius: 20px;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: space-between;
        textarea

    {
        border-radius: 20px;
        height: 100px;
        width: 100%;
        border: none;
    }

    input {
        border: none;
        border-bottom: 1px solid lightgray;
        padding: 5px 0;
        &:focus

    {
        outline: none;
    }

    }

    .spend-per-month {
        width: 100%;
        #spend-per-month

    {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .dropdown-menu {
        width: 100%;
        span

    {
        padding: 5px 20px;
        &:hover

    {
        background: lightgray;
    }

    }
    }
    }

    .category-select {
        width: 100%;
        #category-select

    {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .dropdown-menu {
        width: 100%;
        span

    {
        padding: 5px 20px;
        &:hover

    {
        background: lightgray;
    }

    }
    }
    }
    }

    .info-add {
        cursor: pointer;
    }

    *:before,
    *:after {
        box-sizing: border-box;
    }

    :root {
        --toggleHeight: 20px;
        --toggleWidth: 40px;
        --toggleGap: 2px;
    }

    .toggle {
        width: 0;
        height: 0;
    }

        .toggle + label {
            position: relative;
            background: #c0c0c0;
            width: var(--toggleWidth);
            height: var(--toggleHeight);
            display: inline-flex;
            align-items: center;
            border-radius: 25px;
            cursor: pointer;
            transition: background 0.2s ease-in-out;
            text-indent: calc( var(--toggleWidth) + 10px);
            white-space: nowrap;
            &:after

    {
        content: "";
        background: #fff;
        width: calc(var(--toggleHeight) - (var(--toggleGap) * 2));
        height: calc(var(--toggleHeight) - (var(--toggleGap) * 2));
        position: absolute;
        top: var(--toggleGap);
        left: var(--toggleGap);
        border-radius: 50%;
        transition: left 0.3s ease-in-out, background 0.2s ease-in-out;
    }

    }

    .toggle:checked + label {
        background: seaGreen;
        &:after

    {
        left: calc(100% - calc(var(--toggleHeight) - var(--toggleGap)));
    }

    }

    /*file upload*/
    .fileinput-button {
        position: relative;
        overflow: hidden;
        display: inline-block;
        width: 100%;
        border: 2px dotted #319e4e;
        border-radius: 5px;
        padding: 10px;
        color: #319e4e;
        font-size: 25px;
        text-align: center;
    }

        .fileinput-button input {
            position: absolute;
            top: 0;
            right: 0;
            margin: 0;
            opacity: 0;
            -ms-filter: 'alpha(opacity=0)';
            font-size: 200px !important;
            direction: ltr;
            cursor: pointer;
        }
        .category-select >  .dropdown-menu {
            top: 20px !important;
        }
        .spend-per-month >  .dropdown-menu {
            top: 20px !important;
        }
</style>