
<template>
    <div class="d-flex">
        <Popup v-bind:modal="modal">
            <template v-slot:iconModal>
                <img width="30" src="../../assets/img/edit-icon.png" />
            </template>
            <div class="d-flex justify-content-center align-items-center">
                <div class="dropdown select-type">
                    <a class="dropdown-toggle " type="button" id="select-type" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span v-if="state.IncomeExpenseCategoryID !== '' "> {{ incomeExpenseCategoryChoosed.IncomeExpenseCategoryName }}</span>
                        <span v-else>Chi tiền</span>
                    </a>
                    <div class="dropdown-menu p-3" aria-labelledby="category-select">
                        <div class="p-1" v-for="(item) in incomeExpenseCategories" v-bind:key="item.IncomeExpenseCategoryID" v-on:click="selectIncomeExpenseCategory(item.IncomeExpenseCategoryID)"><i class="far fa-address-book mr-1"></i> {{ item.IncomeExpenseCategoryName }}</div>
                    </div>
                </div>
            </div>
            <template v-slot:headerExpense>
                Thêm ghi chép
            </template>
            <template v-slot:contentModal>
                <div class="row pb-4">
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Số tiền</label>
                            <input type="type" v-model="state.Amount" placeholder="Nhập số tiền"/>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Danh mục</label>
                            <div class="dropdown category-select">
                                <a class="dropdown-toggle " type="button" id="category-select" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span v-if="state.IncomeExpenseCategoryID !== '' "><i class="far fa-address-book"></i> {{ incomeExpenseCategoryChoosed.IncomeExpenseCategoryName }}</span>
                                    <span v-else><i class="far fa-address-book mr-1"></i> Chọn danh mục</span>
                                </a>
                                <div class="dropdown-menu p-3" aria-labelledby="category-select">
                                    <div class="p-1" v-for="(item) in incomeExpenseCategories" v-bind:key="item.IncomeExpenseCategoryID" v-on:click="selectIncomeExpenseCategory(item.IncomeExpenseCategoryID)"><i class="far fa-address-book mr-1"></i> {{ item.IncomeExpenseCategoryName }}</div>
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
                                    <span v-if="state.AccountID !== '' "><i class="far fa-trash-alt mr-1"></i>{{ userAccountChoosed.AccountName }}</span>
                                    <span v-else><i class="far fa-trash-alt mr-1"></i> Chọn ví</span>
                                </a>
                                <div class="dropdown-menu p-3" aria-labelledby="spend-per-month">
                                    <div class="p-1" v-for="item in userAccounts" v-bind:key="item.AccountID" v-on:click="selectUserAccount(item.AccountID)"><i class="far fa-trash-alt mr-1"></i> {{ item.AccountName }}</div>
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

                <div class="row pb-4" v-show="isCollapse">
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

                    <div class="row pb-4" v-show="selected">
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
    //import TransactionClass from '../../assets/js/transaction'
    //import eventBus from '../../assets/js/eventbus'
    import { mapActions, mapState } from "vuex";
    export default {
        props: [
            'modal'
        ],

        data() {
            return {
                isCollapse: false,
                selected: false,
               
                state: {
                    TransactionID: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
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
                    TransactionType: 1
                },
                magic_flag: false,
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
            clearData() {
                var data = {
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
                }
                return this.state = data;
            },
            createTransaction() {
                this.$store.dispatch('financetransaction/create', this.state);
                //eventBus.$emit('rerender', true);
                this.clearData();
            },
            ...mapActions("incomeexpensecategory", ["getAll"]),
            ...mapActions("useraccount", ["getAll"]),
            ...mapActions("financetransaction", ["create"]),
        },
        created() {
            this.$store.dispatch('incomeexpensecategory/getAll');
            this.$store.dispatch('useraccount/getAll');
        },
        computed: mapState({
            incomeExpenseCategories: state => state.incomeexpensecategory.data,
            userAccounts: state => state.useraccount.data,
        }),
    }
</script>
<style lang="scss">
    #addModal .widget:focus-within{
       box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }
    #addModal .modal-content{
        height: auto !important;
        min-height: unset;
    }
    #addModal .widget input.form-control:focus{
        box-shadow: none;
    }
    #addModal .widget {
        height: 90px;
        border: 1px solid gray;
        border-radius: 10px;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: space-between;
        
        textarea
    {
        border-radius: 10px;
        height: 100px;
        width: 100%;
        border: none;
        &:focus{
                   outline: 0 !important;
                  
        }
    }

    input {
        border: none;
        border-bottom: 1px solid lightgray;
        padding: 5px 0;
        &:focus

    {
        outline: 0 !important;
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

    #addModal .category-select {
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
        #addModal .modal-body{
            padding: 30px !important;
        }

         .select-type {
            min-width: 170px;
            border: 1.5px solid white;
            border-radius: 20px;
            padding: 5px 20px;
            .dropdown-toggle::after{
                margin-top: 5px;
            }
            #select-type {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .dropdown-menu {
                width: 100%;
                top: 10px !important;
                box-shadow: rgba(0, 0, 0, 0.15) 1px 1px 3px 1px;
                border: none;
                left: -17px !important;
                span {
                    padding: 5px 20px;
                    &:hover {
                        background: lightgray;
                    }
                 }
            }
         }
    .border-select-type{
        border-radius: 20px;
        border: 1px solid white;
    }
    #select-type span{
        font-size: 16px;
        font-weight: 600,
    }
</style>