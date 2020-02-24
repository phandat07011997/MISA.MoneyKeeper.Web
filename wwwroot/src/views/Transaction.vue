<template>
    <div class="transaction">
        <div class="mx-auto" style="width:80%">
            <!-- <sidebar-comp></sidebar-comp> -->
            <!--<div class="bg-danger" style="width:74px; height:5px;"></div>-->
            <div class="row m-0" style="width:100%">
                <div class="p-0 shadow border border-top-0"
                     v-bind:class="hiddenDetail ? 'container my-3' : 'col col-sm-4 m-3'">
                    <!-- Thanh tìm kiếm và lọc dữ liệu -->
                    <div id="transaction-filter-bar">
                        <div class="bg-primary p-2 d-flex align-items-center justify-content-end"
                             style="width:100%;">
                            <div class="d-flex align-items-center justify-content-end">
                                <div class="d-flex align-items-center" style="position:relative">
                                    <span class="icon-search text-secondary btn-circle">
                                        <i class="fa fa-search"></i>
                                    </span>
                                    <input type="text"
                                           class="form-control mr-2 border-0"
                                           placeholder="Tìm kiếm..."
                                           style="width:200px; height:35px; border-radius:15px" />
                                </div>
                                <div class="text-light bg-inherit border-0 py-auto">
                                    <i v-bind:class="hiddenFilter ? 'fas fa-chevron-down fa-2x': 'fas fa-chevron-up fa-2x'" @click="hiddenFilter = ! hiddenFilter"></i>
                                </div>
                            </div>
                        </div>
                        <!-- Lọc ghi chép -->
                        <div class="m-2 p-0 bg-light border-bottom mx-auto overrall-in-out shadow-sm"
                             style="width: 100%; " v-bind:style="hiddenFilter ? 'display: none;' :'display:block;'">
                            <ul class="row m-0 p-0">
                                <li style="width:15%; height:40px" class="border d-flex align-items-center p-2" >
                                    <a class="justify-content-between" style="width:100%" > <b class="mx-auto"> Ngày</b></a>
                                    <ul>
                                        <li>Hôm nay</li>
                                        <li>Hôm qua</li>
                                        <li>Ngày khác</li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </div>
                    </div>

                    <!-- Thanh tổng quan thu chi -->
                    <div id="transaction-overall-infor"
                         class="p-3 bg-light border-bottom mx-auto overrall-in-out shadow-sm"
                         style="width: 100%">
                        <div class="container">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="text-success m-0">Thu: {{income | incomeToString("vi-VN", "VND")}}</h5>
                                <h5 class="text-danger m-0">
                                    Chi: {{expense | incomeToString(currencyCode,currencyName)}}
                                </h5>
                            </div>

                            <div class="d-flex justify-content-between align-items-center">
                                <span class="text-success mr-2 ml-2">
                                    <i class="fas fa-sign-in-alt fa-2x"></i>
                                </span>
                                <div class="progress mr-2 ml-2 bg-danger" style="width: 80%">
                                    <div class="progress-bar bg-success"
                                         role="progressbar"
                                         v-bind:style="incomePercent"
                                         aria-valuenow="15"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                                <span class="text-danger mr-2 ml-2">
                                    <i class="fas fa-sign-out-alt fa-2x"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- Bảng ghi chép thu chi-->
                    <!--Thông tin chung-->
                    <div class="overflow-hidden container p-0" style="width:100%">
                        <div class="title container bg-light border-top border-bottom mt-1"
                             v-bind:style="hiddenDetail? 'height:65px':'height:50px'">
                            <div class="d-flex align-items-center justify-content-between m-auto py-0 text-secondary-primary">
                                <div class="d-flex align-items-center" v-bind:class="hiddenDetail? 'p-2':''">
                                    <div style="font-size: 48px; line-height:48px">20</div>
                                    <div class="text-left px-2 py-auto">
                                        <div class="m-0 p-0 font-weight-bold">Thứ Bảy</div>
                                        <div class="m-0 p-0 font-weight-bold">02 / 2020</div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <!-- <div class="icon-in-out d-flex mr-2">
                                                                <div class="bg-success mx-1" style="width:18px; height:40px"></div>
                                                                <div class="bg-danger" style="width:18px; height:40px"></div>
                                    </div>-->
                                    <div class="text-right">
                                        <b class="text-success">Thu: {{income| incomeToString(currencyCode,currencyName)}}</b>
                                        <br />
                                        <b class="text-danger">Chi: {{expense| incomeToString(currencyCode,currencyName)}}</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Thu/Chi-->
                        <div class="bg-warning container p-0">
                            <div class="d-flex justify-content-end"
                                 v-on:click="hiddenDetail=false"
                                 v-for="(item,index) in data"
                                 :key="index">
                                <div class="border-bottom bg-light text-dark d-flex align-items-center justify-content-between p-2"
                                     style="width:95%;"
                                     v-bind:id="item.TransactionID"
                                     v-bind:style="hiddenDetail? 'height:50px':''"
                                     v-on:click="bindIDForDetailForm(index)">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <i v-bind:class="item.icon"></i>
                                        {{item.IncomeExpenseCategoryName}}
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div v-bind:class="(item.Amount >= 0)? 'text-success mx-2':'text-danger mx-2'">
                                            <b>{{item.Amount | incomeToString(currencyCode,currencyName) }}</b>
                                        </div>
                                        <i class="fas fa-ellipsis-v mx-2 text-secondary-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--Thông tin chi tiết thu chi -->
                <div id="transaction-detail"
                     class="col col-lg-7 mx-auto my-3 py-3 border border-top-0 shadow"
                     v-bind:style="hiddenDetail ? 'display: none':'display: block' ">
                    <div class="p-2 d-flex align-items-center justify-content-between">
                        <b style="font-size:24px;color:#084866;">Chi tiết ghi chép</b>
                        <i class="fas fa-times fa-2x" v-on:click="hiddenDetail=true"></i>
                    </div>
                    <hr class="m-0 mb-2 p-0" />

                    <div class="row">
                        <div class="col col-md-6">
                            <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                                 style="height:40px; font-size:20px">
                                <label class="my-auto">
                                    <b>Ghi chép</b>
                                </label>
                                <label class="my-auto">{{transactionDetail.TransactionType| typeOfTransaction()}}</label>
                            </div>
                        </div>
                        <div class="col col-md-6">
                            <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                                 style="height:40px; font-size:20px">
                                <label class="my-auto" for>
                                    <b>Hạng mục</b>
                                </label>
                                <label class="my-auto" for>{{transactionDetail.IncomeExpenseCategoryName}}</label>
                            </div>
                        </div>
                    </div>

                    <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                         style="height:60px; font-size:20px">
                        <label class="my-auto" for>
                            <b>Số tiền</b>
                        </label>
                        <label class="my-auto"
                               style="font-size:36px"
                               v-bind:class="(transactionDetail.Amount >= 0)? 'text-success mx-2':'text-danger mx-2'">{{transactionDetail.Amount| incomeToString(currencyCode,currencyName) }}</label>
                    </div>
                    <div class="row">
                        <div class="col col-md-6">
                            <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                                 style="height:40px; font-size:20px">
                                <label class="my-auto">
                                    <b>Ví</b>
                                </label>
                                <label class="my-auto">{{transactionDetail.AccountName}}</label>
                            </div>
                        </div>
                        <div class="col col-md-6">
                            <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                                 style="height:40px; font-size:20px">
                                <label class="my-auto" for>
                                    <b>Thời gian</b>
                                </label>
                                <label class="my-auto" for>{{ new  Date(transactionDetail.IsoTransactionDate).toDateString()}}</label>
                            </div>
                        </div>
                    </div>

                    <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                         style="height:40px; font-size:20px">
                        <label class="my-auto" for>
                            <b>Diễn tả</b>
                        </label>
                        <label class="my-auto" for>{{transactionDetail.Description}}</label>
                    </div>
                    <div class="row">
                        <div class="col col-md-6">
                            <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                                 style="height:40px; font-size:20px">
                                <label class="my-auto">
                                    <b>Chi cho ai</b>
                                </label>
                                <label class="my-auto">{{transactionDetail.RelatedPerson}}</label>
                            </div>
                        </div>
                        <div class="col col-md-6">
                            <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                                 style="height:40px; font-size:20px">
                                <label class="my-auto" for>
                                    <b>Sự kiện</b>
                                </label>
                                <label class="my-auto" for>{{transactionDetail.EventName}}</label>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end">
                        <button type="button"
                                class="btn bg-primary m-1 text-light"
                                data-toggle="modal"
                                v-on:click="editTransaction"
                                v-bind:data-target="'#' + modal">
                            <i class="fas fa-edit mr-1"></i>Sửa
                        </button>
                        <edit-transaction v-bind:modal="modal" />
                        <button type="button" class="btn btn-danger m-1" @click="removeTransaction()">
                            <i class="fas fa-trash-alt mr-1"></i>Xóa
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div>
          <span @mouseover="hover = true" @mouseleave="hover = false">Hover me to show the message!</span>
          <span v-if="hover">This is a secret message.</span>
        </div>-->
        <!-- <span>Hover me to change the background!</span> -->
    </div>
</template>
<script>
    import EditTransaction from "@/components/transaction/EditTransaction.vue";
    //import FinanceTransactionClass from "../assets/js/transaction";
    import eventBus from "../assets/js/eventbus";
    import { mapActions, mapState } from "vuex";
    export default {
        name: "transaction",
        data() {
            return {
                modal: "editTransactionModal",
                hiddenDetail: true,
                hiddenFilter: true,
                areYouSure: false,
                //data: null,
                income: 300000,
                expense: 200000,
                currencyName: "VND",
                currencyCode: "vi-VN",
                transactionDetail: {},
                sendTransactionDetail: {}
            };
        },
        filters: {
            incomeToString: function (value, currencyCode, currencyName) {
                return new Intl.NumberFormat(currencyCode, {
                    style: "currency",
                    currency: currencyName
                }).format(value);
            },
            typeOfTransaction(value) {
                switch (value) {
                    case 0:
                        return "Chi tiền";

                    case 1:
                        return "Thu tiền";

                    case 2:
                        return "Cho vay";

                    case 3:
                        return "Đi vay";

                    case 4:
                        return "Chuyển khoản";

                    case 5:
                        return "Điều chỉnh số dư";
                }
            },
            showDate(value) {
                return value
            },

        },
        components: {
            EditTransaction
        },
        computed: {
            incomePercent: function () {
                var tmp =
                    "width:" + (this.income / (this.income + this.expense)) * 100 + "%";
                var tmp2 =
                    "width:" + (this.income / (this.income - this.expense)) * 100 + "%";
                return this.expense > 0 ? tmp : tmp2;
            },
            ...mapState({
                data: state => state.financetransaction.data,

            }),

        },
        methods: {
            bindIDForDetailForm(value) {
                this.transactionDetail = this.data[value];
                //   console.log(this.transactionDetail);
            },
            removeTransaction() {
                if (confirm("Bạn có chắc chắn muốn xóa ghi chép này không?")) {
                    this.$store.dispatch('financetransaction/delete', this.transactionDetail.TransactionID);
                    this.hiddenDetail = true;
                } //console.log(this.confirm);
            },           
            editTransaction() {
                this.sendTransactionDetail = this.transactionDetail;
                eventBus.$emit('editTransaction', this.sendTransactionDetail);
            },
            ...mapActions("financetransaction", ["getAll"]),
        },
        created() {
            //eventBus.$on("rerender", this.handler);
            //this.bindData();
            this.$store.dispatch('financetransaction/getAll');
        },
        watch: {
            data() {
                var id = this.transactionDetail.TransactionID;
                for (var item in this.data) {
                    if (this.data[item].TransactionID == id) {
                        this.transactionDetail = this.data[item]
                    }
                }
            }
        }
        //destroyed() {
        //    eventBus.$off("rerender", this.handler);
        //}
    };
</script>
<style>
    .icon-search {
        position: absolute;
        left: 175px;
    }

    .bg-primary {
        background-color: #205a75 !important;
    }
    ul > li > ul{
        display: none;
    }
</style>
