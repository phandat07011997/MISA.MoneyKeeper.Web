
<template>
    <div class="d-flex">
        <Popup v-bind:modal="modal">
            <div class="d-flex justify-content-center align-items-center">
                <div class="dropdown">
                    <a class="dropdown-toggle" type="button" id="category-select" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span><i class="far fa-address-book mr-2"></i>{{ categoryModalchoose }}</span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="category-select">
                        <div class="p-2" v-for="(item,index) in categoryModal" v-bind:key="item.val" v-on:click="selectCategoryModal(index)"><i class="far fa-address-book mr-2"></i> {{ item.text }}</div>
                    </div>
                </div>
            </div>
            <template v-slot:headerExpense>
                Sửa ghi chép
            </template>
            <template v-slot:contentModal>
                <div class="row pb-3">
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Số tiền</label>
                            <input type="text" name="name" placeholder="Nhập số tiền" v-model="dataTransaction.moneyFormat" v-on:input="writeMoney($event.target.value)" />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Danh mục</label>
                            <div class="dropdown category-select mt-2">
                                <a class="dropdown-toggle" type="button" id="category-select" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span><i class="far fa-address-book mr-1"></i>{{ dataTransaction.IncomeExpenseCategoryName }}</span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="category-select">
                                    <div class="p-2" v-for="(item,index) in incomeExpenseCategories" v-bind:key="item.IncomeExpenseCategoryID" v-on:click="selectIncomeExpenseCategory(item.IncomeExpenseCategoryID,index)"><i class="far fa-address-book"></i> {{ item.IncomeExpenseCategoryName }}</div>
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
                            <input type="datetime-local" id="start" name="trip-start"
                                   value=""
                                   v-model="dataTransaction.IsoTransactionDate">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Danh mục</label>
                            <div class="dropdown category-select mt-2">
                                <a class="dropdown-toggle" type="button" id="category-select" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span><i class="far fa-address-book mr-1"></i>{{ dataTransaction.AccountName }}</span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="category-select">
                                    <div class="p-2" v-for="(item,index) in userAccounts" v-bind:key="item.AccountID" v-on:click="selectUserAccount(item.AccountID,index)"><i class="far fa-address-book"></i> {{ item.AccountName }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>

                <div class="info-add font-weight-bold pt-3 pb-3" v-on:click="isCollapse = !isCollapse">
                    Thông tin thêm <i class="fas fa-chevron-up" v-if="isCollapse == true" />
                    <i class="fas fa-chevron-down" v-else />
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
                            <input type="text" name="name" value="" placeholder="" v-model="dataTransaction.Address" />
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
                                <input type="datetime-local" id="start" name="trip-start"
                                       value=""
                                       v-model="dataTransaction.IsoDebitDate">
                            </div>
                        </div>
                    </div>
                </div>

            </template>
            <template v-slot:buttonModal>
                <div class="d-flex justify-content-between align-items-center w-100">
                    <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fas fa-ban"></i> Đóng</button>
                    <button type="button" class="btn btn-success text-light" data-dismiss="modal" v-on:click="saveEdit()"><i class="fas fa-save"></i> Lưu</button>
                </div>
                
            </template>
        </Popup>
    </div>
</template>
<script>
    import Popup from '../layout/Popup.vue';
    import eventBus from '../../assets/js/eventbus'
    import { mapState } from "vuex";
    export default {
        props: [
            'modal',
        ],

        data() {
            return {
                isCollapse: true,
                selected: true,
                categoryModal: [
                    { text: "Chi tiền", val: 1 },
                    { text: "Thu tiền", val: 2 },
                    { text: "Cho vay", val: 3 },
                    { text: "Đi vay", val: 4 },
                    { text: "Chuyên khoản", val: 5 },
                    { text: "Điều chỉnh số dư", val: 6 }
                ],
                categoryModalchoose: "Chi tiền",
                valcategoryModalchoose:1,
                dataTransaction: {},
                synData:
                {
                    "AccountID": "1b1b7ee4-9506-4a6b-899a-d17b4244ef7f",
                    "Address": "", "Amount": 1,
                    "ClosingAmount": 0,
                    "Description": "gjhsd",
                    "EventName": "",
                    "FCAmount": 0,
                    "Following": true,
                    "Giver": "",
                    "ImageAttachName": null,
                    "IncomeExpenseCategoryID": "b24aacd5-7e29-43a3-a873-2caa34dc45fe",
                    "IsFavorite": false,
                    "IsoDebitDate": "01/01/1753 12:00:00 AM",
                    "IsoTransactionDate": "11/08/2019 08:22:45 AM",
                    "Latitude": 0,
                    "Longitude": 0,
                    "Payee": "",
                    "RelatedPerson": null,
                    "RelationshipID": null,
                    "SortOrder": 0,
                    "ToAccountID": null,
                    "TransactionID": "1ba5a94a-0ba6-4e65-b003-77520138b693",
                    "TransactionType": 1
                }
            };
        },
        components: {
            Popup,
        },
        methods: {
            formatTime(time) {
                var convert = new Date(time);
                var year = convert.getFullYear() < 10 ? '0' + convert.getFullYear() : convert.getFullYear();
                var month = convert.getMonth() < 10 ? '0' + (convert.getMonth() + 1) : convert.getMonth() + 1;
                var date = convert.getDate() < 10 ? '0' + convert.getDate() : convert.getDate();
                var hour = convert.getHours() < 10 ? '0' + convert.getHours() : convert.getHours();
                var minute = convert.getMinutes() < 10 ? '0' + convert.getMinutes() : convert.getMinutes();
                var second = convert.getSeconds() < 10 ? '0' + convert.getSeconds() : convert.getSeconds();
                return year + '-' + month + '-' + date + 'T' + hour + ':' + minute + ':' + second;
            },
            formatTimeEdit(time) {
                var convert = new Date(time);
                console.log(convert)   
                var year = convert.getFullYear() < 10 ? '0' + convert.getFullYear() : convert.getFullYear();
                var month = convert.getMonth() < 10 ? '0' + (convert.getMonth() + 1) : convert.getMonth() + 1;
                var date = convert.getDate() < 10 ? '0' + convert.getDate() : convert.getDate();
                var hour = convert.getHours() < 10 ? '0' + convert.getHours() : convert.getHours();
                var minute = convert.getMinutes() < 10 ? '0' + convert.getMinutes() : convert.getMinutes();
                var second = convert.getSeconds() < 10 ? '0' + convert.getSeconds() : convert.getSeconds();
                return month + '/' + date + '/' + year + ' ' + hour + ':' + minute + ':' + second + ' ' + (hour > 12 ? 'PM' : 'AM');
            },
            moneyToString(money) {
                if (parseInt(money)) {
                    return parseFloat(money.toString().replace(/[,-]/g, ""))
                        .toFixed(0)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
                else {
                    return 0;
                }
            },
            selectCategoryModal(index) {
                this.categoryModalchoose = this.categoryModal[index].text;
                this.valcategoryModalchoose = this.categoryModal[index].val;
            },
            selectIncomeExpenseCategory(id, index) {
                this.dataTransaction.IncomeExpenseCategoryID = id;
                this.dataTransaction.IncomeExpenseCategoryName = this.incomeExpenseCategories[index].IncomeExpenseCategoryName;
            },
            selectUserAccount(id) {
                for (var item in this.userAccounts) {
                    if (this.userAccounts[item].AccountID == id) {
                        this.dataTransaction.AccountID = id;
                        this.dataTransaction.AccountName = this.userAccounts[item].AccountName;
                    }
                }
            },
            writeMoney(val) {
                this.dataTransaction.moneyFormat = this.moneyToString(val);
            },
            saveEdit() {
                //this.synData.AccountID=this.dataTransaction.AccountID;
                //    this.synData.Address=this.dataTransaction.Address;
                //    this.synData.Amount=this.dataTransaction.Amount;
                //    this.synData.ClosingAmount=this.dataTransaction.ClosingAmount;
                //    this.synData.Description=this.dataTransaction.Description;
                //    this.synData.EventName=this.dataTransaction.EventName;
                //    this.synData.FCAmount=this.dataTransaction.FCAmount;
                //    this.synData.Following=this.dataTransaction.Following;
                //    this.synData.Giver=this.dataTransaction.Giver;
                //    this.synData.ImageAttachName=this.dataTransaction.ImageAttachName;
                //    this.synData.IncomeExpenseCategoryID=this.dataTransaction.IncomeExpenseCategoryID;
                //    this.synData.IsFavorite=this.dataTransaction.IsFavorite;
                //    this.synData.IsoDebitDate=this.dataTransaction.IsoDebitDate;
                //    this.synData.IsoTransactionDate=this.dataTransaction.IsoTransactionDate;
                //    this.synData.Latitude=this.dataTransaction.Latitude;
                //    this.synData.Longitude=this.dataTransaction.Longitude;
                //    this.synData.Payee=this.dataTransaction.Payee;
                //    this.synData.RelatedPerson=this.dataTransaction.RelatedPerson;
                //    this.synData.RelationshipID=this.dataTransaction.RelationshipID;
                //    this.synData.SortOrder=this.dataTransaction.SortOrder;
                //    this.synData.ToAccountID=this.dataTransaction.ToAccountID;
                //    this.synData.TransactionID=this.dataTransaction.TransactionID;
                //this.synData.TransactionType = this.dataTransaction.TransactionType;
                var money = (this.dataTransaction.moneyFormat).replace(/,/g, '');
                if (this.valcategoryModalchoose == 1 || this.valcategoryModalchoose == 3 || this.valcategoryModalchoose == 5) {
                    this.dataTransaction.Amount = parseInt('-' + money);
                }
                else {
                    this.dataTransaction.Amount = parseInt(money)
                }
                this.dataTransaction.IsoTransactionDate = this.formatTimeEdit(this.dataTransaction.IsoTransactionDate);
                this.dataTransaction.IsoDebitDate = this.formatTimeEdit(this.dataTransaction.IsoDebitDate);
                this.$store.dispatch('financetransaction/update', this.dataTransaction);
                //this.$store.dispatch('synchronizedata/synchronizeTransactionData', this.synData).then(data => {
                //    console.log(data)
                //}, error => {
                //    console.error(error)
                //});
            }
        },
        created() {
            eventBus.$on("editTransaction", (data) => {
                var transactionDate = this.formatTime(data.IsoTransactionDate);
                var debitDate = this.formatTime(data.IsoDebitDate);

                data.IsoTransactionDate = transactionDate;
                data.IsoDebitDate = debitDate;
                data.moneyFormat = this.moneyToString(data.Amount);
                this.dataTransaction = Object.assign({}, data);
            });

            this.$store.dispatch('incomeexpensecategory/getAll');
            this.$store.dispatch('useraccount/getAll');
        },
        computed: {
            ...mapState({
                incomeExpenseCategories: (state) => state.incomeexpensecategory.data,
                userAccounts: (state) => state.useraccount.data,
            }),
        },
        watch: {

        }
    }
</script>
<style lang="scss" scoped>
    button {
        width:90px;
    }
    .dropdown-menu {
        top: 10px !important;
        box-shadow: rgba(0, 0, 0, 0.15) 1px 1px 3px 1px;
        background: white;
        user-select: none;
        div

    {
        &:hover

    {
        background: #eee
    }

    }
    }

    .modal-header .dropdown-menu {
            width: 280px;
            margin-left: -80px;
    }

    .widget {
        height: 80px;
        border: 1px solid #ddd !important;
        border-radius: 0.5em;
        padding: 10px 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        textarea

    {
        height: 100px;
        width: 100%;
        border: none;
        border-radius: 10px;
    }

    label {
        margin-bottom: 0px;
        font-weight: bold;
        color: gray;
        font-size: 13px;
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
        top: 0 !important;
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