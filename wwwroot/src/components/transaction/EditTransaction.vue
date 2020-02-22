
<template>
    <div class="d-flex">
        <Popup v-bind:modal="modal">
            <template v-slot:iconModal>
                <img width="30" src="../../assets/img/edit-icon.png" />
            </template>
            <template v-slot:headerExpense>
                Sửa ghi chép
            </template>
            <template v-slot:contentModal>
                <div class="row pb-3">
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Số tiền</label>
                            <input type="number" name="name" placeholder="Nhập số tiền" v-model="dataTransaction.Amount" />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Danh mục</label>
                            <div class="dropdown category-select mt-2">
                                <a class="dropdown-toggle" type="button" id="category-select" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span><i class="far fa-address-book mr-1"></i>{{ dataTransaction.IncomeExpenseCategoryName }}</span>
                                </a>
                                <div class="dropdown-menu p-3" aria-labelledby="category-select">
                                    <div class="p-1" v-for="(item,index) in incomeExpenseCategories" v-bind:key="item.IncomeExpenseCategoryID" v-on:click="selectIncomeExpenseCategory(item.IncomeExpenseCategoryID,index)"><i class="far fa-address-book"></i> {{ item.IncomeExpenseCategoryName }}</div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="col-4">
                        <div class="widget p-0">
                            <textarea class="form-control" placeholder="Ghi chú..." v-model="dataTransaction.Description">

                            </textarea>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Ngày tháng</label>
                            <input type="date" name="name" value="" class="form-control" />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Ví</label>
                            <div class="dropdown spend-per-month mt-2">
                                <a class="dropdown-toggle " type="button" id="spend-per-month" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span v-if="dataTransaction.AccountID !== '' "><i class="far fa-trash-alt mr-1"></i>{{ dataTransaction.AccountName }}</span>
                                    <span v-else><i class="far fa-trash-alt mr-1"></i> Chọn ví</span>
                                </a>
                                <div class="dropdown-menu p-3" aria-labelledby="spend-per-month">
                                    <div class="p-1" v-for="(item) in userAccounts" v-bind:id="item.AccountID" v-bind:key="item.AccountID" v-on:click="selectUserAccount(item.AccountID)"><i class="far fa-trash-alt"></i> {{ item.AccountName }}</div>
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
                            <input type="text" name="name" value="" placeholder="" v-model="dataTransaction.RelatedPerson" />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Địa điểm</label>
                            <input type="text" name="name" value="" placeholder="" v-model="dataTransaction.Address"/>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Sự kiện</label>
                            <input type="text" name="name" value="" placeholder="" v-model="dataTransaction.EventName" />
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
                        <label for="toggle" class="m-0" v-on:click="selected=!selected"></label>
                    </div>

                    <div class="row pb-3" v-show="selected">
                        <div class="col-6">
                            <div class="widget">
                                <label for="">Người cho vay</label>
                                <input type="text" name="name" value="" placeholder="" />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="widget">
                                <label for="">Hạn trả</label>
                                <input type="date" name="name" value="" placeholder="" class="form-control" />
                            </div>
                        </div>
                    </div>
                </div>

            </template>
            <template v-slot:buttonModal>
                <button type="button" class="btn btn-danger" data-dismiss="modal"> <i class="far fa-trash-alt"></i> Hủy</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="saveEdit()"><i class="fas fa-save"></i> Lưu</button>
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
            'modal', 'transactionDetail'
        ],

        data() {
            return {
                isCollapse: true,
                selected: true,
                incomeExpenseCategories: null,
                userAccounts: null,
                dataTransaction: {
                    TransactionID: this.$props.transactionDetail.TransactionID,
                    AccountID: this.transactionDetail.AccountID,
                    Address: this.transactionDetail.Address,
                    Amount: this.$props.transactionDetail.Amount,
                    Description: this.transactionDetail.Description,
                    EventName: this.transactionDetail.EventName,
                    Giver: this.transactionDetail.Giver,
                    ImageAttachName: this.transactionDetail.ImageAttachName,
                    IncomeExpenseCategoryID: this.transactionDetail.IncomeExpenseCategoryID,
                    IsoDebitDate: this.transactionDetail.IsoCreateDate,
                    IsoTransactionDate: this.transactionDetail.IsoTransactionDate,
                    ToAccountID: this.transactionDetail.ToAccountID,
                    TransactionType: this.transactionDetail.TransactionType,
                    AccountCategoryID: this.transactionDetail.AccountCategoryID,
                    AccountCurrentBalance: this.transactionDetail.AccountCurrentBalance,
                    AccountDescription: this.transactionDetail.AccountDescription,
                    AccountInitialBalance: this.transactionDetail.AccountInitialBalance,
                    AccountName: this.transactionDetail.AccountName,
                    AccountSortingOrder: this.transactionDetail.AccountSortingOrder,
                    BankName: this.transactionDetail.BankName,
                    CreditCardIsReminder: this.transactionDetail.CreditCardIsReminder,
                    CreditCardListRemindValue: this.transactionDetail.CreditCardListRemindValue,
                    CreditCardPaymentDay: this.transactionDetail.CreditCardPaymentDay,
                    CreditLine: this.transactionDetail.CreditLine,
                    CurrencyCode: this.transactionDetail.CurrencyCode,
                    CurrencyType: this.transactionDetail.CurrencyType,
                    DictionaryKey: this.transactionDetail.DictionaryKey,
                    DueType: this.transactionDetail.DueType,
                    ExcludeReport: this.transactionDetail.ExcludeReport,
                    IconName: this.transactionDetail.IconName,
                    Inactive: this.transactionDetail.Inactive,
                    InterestPaymentAccount: this.transactionDetail.InterestPaymentAccount,
                    IsoCreateDate: this.transactionDetail.IsoCreateDate,
                    IsoEndDate: this.transactionDetail.IsoEndDate,
                    IsoFinalizeDate: this.transactionDetail.IsoFinalizeDate,
                    IsoLastExcuteDate: this.transactionDetail.IsoLastExcuteDate,
                    IsoRecordTime: this.transactionDetail.IsoRecordTime,
                    IsoStartDate: this.transactionDetail.IsoStartDate,
                    IncomeExpenseCategoryName: this.transactionDetail.IncomeExpenseCategoryName,
                    IncomeExpenseCategoryIcon: this.transactionDetail.IncomeExpenseCategoryIcon,
                    RelatedPerson: this.transactionDetail.RelatedPerson,
                },
            };
        },
        components: {
            Popup,
        },
        methods: {
            selectIncomeExpenseCategory(id, index) {
                this.dataTransaction.IncomeExpenseCategoryID = id;
                this.dataTransaction.IncomeExpenseCategoryName = this.incomeExpenseCategories[index].IncomeExpenseCategoryName;
            },
            selectUserAccount(id) {
                console.log(id)
                for (var item in this.userAccounts) {
                    if (this.userAccounts[item].AccountID == id) {
                        this.dataTransaction.AccountID = id;
                        this.dataTransaction.AccountName = this.userAccounts[item].AccountName;
                    }
                }
            },
            saveEdit() {
                var transaction = new TransactionClass();
                console.log(this.dataTransaction)
                transaction.update(this.dataTransaction);
                eventBus.$emit('rerender', true);
            }
        },
        watch: {
            transactionDetail: function (val, oldval) {
                console.log('old', oldval);
                console.log('new', val);
                this.dataTransaction = val;
            }
        },
        created() {
            console.log(this.transactionDetail)
            console.log(this.$props)
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
                return _this.userAccounts = data;
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>
<style lang="scss">
    .widget {
        height: 80px;
        border: 1px solid #ddd;
        border-radius: 0.5em;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        textarea

    {
        border-radius: 20px;
        height: 100px;
        width: 100%;
        border: none;
    }

    label {
        margin-bottom: 0px;
        font-weight: bold;
    }

    .select-option {
        border-top: none;
        border-right: none;
        border-left: none;
        width: 80%;
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
</style>