
<template>
    <div class="d-flex">
        <Popup v-bind:modal="modal">
           
            <div class="d-flex justify-content-center align-items-center">
                <div class="dropdown select-type">
                    <a class="dropdown-toggle " type="button" id="select-type" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span v-if="transactionTypeChoosed !== null "> {{ transactionTypeChoosed && transactionTypeChoosed.name }}</span>
                        <span v-else>Chi tiền</span>
                    </a>
                    <div class="dropdown-menu p-3" aria-labelledby="select-type">
                        <div class="p-1" v-for="(item) in transactionType" v-bind:key="item.key" v-on:click="selectTransactionType(item.key)"><i class="far fa-money-bill-alt mr-2" style="color: #2544ff"></i> {{ item.name }}</div>
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
                            <input type="text" v-model="state.Amount" placeholder="Nhập số tiền" v-on:input="writeMoney($event.target.value)"/>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Danh mục</label>
                            <div class="dropdown category-select-addtransaction">
                                <a class="dropdown-toggle " type="button" id="category-select-addtransaction" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="display: flex; justify-content:space-between; align-items: center;">
                                    <span v-if="state.IncomeExpenseCategoryID !== '' "><i class="far fa-address-book" style="color: #2544ff"></i> {{ incomeExpenseCategoryChoosed.IncomeExpenseCategoryName }}</span>
                                    <span v-else><i class="far fa-address-book mr-2"  style="color: #2544ff"></i> Chọn danh mục</span>
                                </a>
                                <div class="dropdown-menu p-3" aria-labelledby="category-select-addtransaction">
                                    <div class="p-1" v-for="(item) in incomeExpenseCategories" v-bind:key="item.IncomeExpenseCategoryID" v-on:click="selectIncomeExpenseCategory(item.IncomeExpenseCategoryID)"><i class="far fa-address-book mr-2"  style="color: #2544ff"></i> {{ item.IncomeExpenseCategoryName }}</div>
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
                            <input type="datetime-local" value="" v-model="state.IsoTransactionDate"  class="form-control" />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="widget">
                            <label for="">Ví</label>
                            <div class="dropdown spend-per-month">
                                <a class="dropdown-toggle " type="button" id="spend-per-month" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span v-if="state.AccountID !== '' "><i class="far fa-trash-alt mr-2" style="color: #2544ff"></i>{{ userAccountChoosed.AccountName }}</span>
                                    <span v-else><i class="far fa-trash-alt mr-2"  style="color: #2544ff"></i> Chọn ví</span>
                                </a>
                                <div class="dropdown-menu p-3" aria-labelledby="spend-per-month">
                                    <div class="p-1" v-for="item in userAccounts" v-bind:key="item.AccountID" v-on:click="selectUserAccount(item.AccountID)"><i class="far fa-trash-alt mr-2" style="color: #2544ff"></i> {{ item.AccountName }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>

                <div class="info-add font-weight-bold p-3" v-on:click="isCollapse = !isCollapse">
                    Thông tin thêm <i class="fas fa-chevron-up" v-if="isCollapse == true" />
                    <i class="fas fa-chevron-down" v-else />
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
                                <input type="date" v-model="state.IsoDebitDate" class="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>

            </template>
            <template v-slot:buttonModal>
                <i class="fas fa-sync mr-4" v-on:click="sync" style="cursor: pointer"></i>
                <button type="button" class="btn btn-danger" data-dismiss="modal"> <i class="far fa-trash-alt"></i> Hủy</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="createTransaction"><i class="fas fa-save"></i> Tạo</button>
            </template>
        </Popup>
    </div>
</template>
<script>
    import Popup from '../layout/Popup.vue'
    import { createUUID } from '../../assets/js/util'
    import { mapActions, mapState } from "vuex"
    export default {
        props: [
            'modal'
        ],

        data() {
            return {
                isCollapse: false,
                selected: false,
               
                state: {
                    TransactionID: createUUID(),
                    AccountID: '',
                    Address: '',
                    Amount: 0,
                    ClosingAmount:0,
                    Description: '',
                    EventName: '',
                    FCAmount: 0,
                    Following: true,
                    Giver: '',
                    ImageAttachName: null,
                    IncomeExpenseCategoryID: '',
                    IsFavorite: false,
                    IsoDebitDate: '',
                    IsoTransactionDate: new Date(),
                    Latitude: 0,
                    Longitude: 0,
                    Payee:'',
                    RelatedPerson: null,
                    RelationshipID: null,
                    SortOrder: 0,
                    ToAccountID: null,
                    TransactionType:  1
                },
                incomeExpenseCategoryChoosed: null,
                userAccountChoosed: null,
                transactionTypeChoosed: null,
               
            };
        },
        components: {
            Popup,
        },
        methods: {
            getTime() {
                return new Date();
            },
            selectIncomeExpenseCategory(id) {
                for (var item in this.incomeExpenseCategories) {
                    if (this.incomeExpenseCategories[item].IncomeExpenseCategoryID == id) {
                        console.log(this.incomeExpenseCategories[item])
                        return [this.incomeExpenseCategoryChoosed = this.incomeExpenseCategories[item], this.state.IncomeExpenseCategoryID = this.incomeExpenseCategories[item].IncomeExpenseCategoryID];
                    }
                }
                
                return null;
            },
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
            selectTransactionType(id) {
              
                var arr = this.transactionType.filter(ele => ele.key === id);
                if (arr.length !== 0) {
                    return [this.transactionTypeChoosed = arr[0], this.state.TransactionType = arr[0].key];
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

             moneyToString(money) {
                if (parseInt(money) > 0) {
                    return parseFloat(money.toString().replace(/[,-]/g, ""))
                        .toFixed(0)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
                else {
                    return 0;
                }
            },
            writeMoney(val) {
                 console.log(val)
                 console.log( this.moneyToString(val))
                 this.state.Amount = this.moneyToString(val);

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
                    IsoTransactionDate: new Date(),
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
                var money = (this.state.Amount).replace(/,/g, '');
                if (this.transactionTypeChoosed.key == 1 || this.transactionTypeChoosed.key == 3) {
                    this.state.Amount = parseInt('-' + money);
                }
                else {
                    this.state.Amount = parseInt(money)
                }
                this.$store.dispatch('financetransaction/create', this.state);
                this.clearData();
            },
            async sync() {
                if (confirm('Bạn có muốn đồng bộ dữ liệu lên server?')) { 
                    await this.$store.dispatch('financetransaction/synchronize').then(res => {
                        console.log(res)
                        alert('Đồng bộ thành công');
                       
                    }).catch(err => {
                        console.log(err)
                        alert('Đồng bộ thất bại')
                    });
                }
            },
            ...mapActions("incomeexpensecategory", ["getAll"]),
            ...mapActions("useraccount", ["getAll"]),
            ...mapActions("financetransaction", ["create", "synchronize", "getSyncData"]),
        },
        created() {
            this.state.IsoTransactionDate = this.formatTime(this.state.IsoTransactionDate);
            this.$store.dispatch('incomeexpensecategory/getAll');
            this.$store.dispatch('useraccount/getAll');
            if (this.transactionType) {
                  return this.transactionTypeChoosed = this.transactionType[0];
            }
        },
        computed: mapState({
            incomeExpenseCategories: state => state.incomeexpensecategory.data,
            userAccounts: state => state.useraccount.data,
            transactionType: state => state.financetransaction.transactionType,
            message: state => state.financetransaction.message,
            syncData: state => state.financetransaction.syncData,
        }),
    }
</script>
<style lang="scss">
    #addModal .widget:focus-within{
       box-shadow: 0 0 0 2px rgba(0,123,255,.25);
    }
    #addModal input{
        color: #495057;
    }
    #addModal .modal-header{
        border-bottom: none;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    #addModal .modal-content{
        border: none;
    }
    #addModal .modal-content{
        height: auto !important;
        min-height: unset;
        min-width: 950px;
    }
    #addModal .widget input.form-control:focus{
        box-shadow: none;
    }
    .category-select-addtransaction > .dropdown-menu{
        width: 100% !important;
        top: 10px !important;
    }
    .category-select-addtransaction .dropdown-menu > div:hover{
        background: #9c9c9c33;
        cursor: pointer;
    }
    .select-type .dropdown-menu > div:hover{
        background: #9c9c9c33;
        cursor: pointer;
    }
    .spend-per-month .dropdown-menu > div:hover{
        background: #9c9c9c33;
        cursor: pointer;
    }
    #addModal .widget {
        height: 90px;
        border: 1px solid #00000033;
        border-radius: 6px;
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

    #addModal a#category-select-addtransaction {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
    }

    #addModal .category-select-addtransaction {
        width: 100%;

    .dropdown-menu {
        width: 100% !important;
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
        width: 30%;
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
        .category-select-addtransaction >  .dropdown-menu {
            top: 20px !important;
        }
        .spend-per-month >  .dropdown-menu {
            top: 20px !important;
        }
        #addModal .modal-body{
            padding: 30px !important;
        }

         .select-type {
            min-width: 200px;
            border: 1.5px solid white;
            border-radius: 20px;
            padding: 5px 20px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
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
                left: -61px !important;
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