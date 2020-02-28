<template>
    <div class="transaction">
        <!--<div class="hide-transaction-detail-enter-active"> ANH </div>-->
        <div class="mx-auto" style="width:80%">
            <!-- <sidebar-comp></sidebar-comp> -->
            <!--<div class="bg-danger" style="width:74px; height:5px;"></div>-->
            <div class="row m-0" style="width:100%">
                <div class="p-0 shadow border border-top-0"
                     v-bind:class="hiddenDetail ? 'mx-auto col col-sm-5 m-3' : 'col col-sm-4 m-3'">
                    <!-- Thanh tìm kiếm và lọc dữ liệu -->
                    <div id="transaction-filter-bar">
                        <div class="bg-primary p-2 px-3 d-flex align-items-center justify-content-between h50p"
                             style="width:100%;">
                            <span class="text-white fs11">Lịch sử ghi chép</span>
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
                                    <i v-bind:class="hiddenFilter ? 'fas fa-chevron-down': 'fas fa-chevron-up'" @click="hiddenFilter = ! hiddenFilter"></i>
                                </div>
                            </div>
                        </div>
                        <!-- Lọc ghi chép -->
                        <div class="m-0 p-0 bg-light border-bottom mx-auto overrall-in-out shadow-sm"
                             style="width: 100%; " v-bind:style="hiddenFilter ? 'display: none;' :'display:block;'">
                            <div class="row m-0">
                                <div class="btn-group" style="width:25%; height:40px">
                                    <button type="button" class="btn btn-primary rounded-0 border-0 border" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Ngày
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Hôm nay</a>
                                        <a class="dropdown-item" href="#">Hôm qua</a>
                                        <a class="dropdown-item" href="#">Ngày khác</a>
                                    </div>
                                </div>
                                <div class="btn-group" style="width:25%; height:40px">
                                    <button type="button" class="btn btn-primary rounded-0 border-0 border-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Tuần
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Tuần này</a>
                                        <a class="dropdown-item" href="#">Tuần trước</a>
                                        <a class="dropdown-item" href="#">Tuần khác</a>
                                    </div>
                                </div>
                                <div class="btn-group" style="width:25%; height:40px">
                                    <button type="button" class="btn btn-primary rounded-0 border-0 border-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Tháng
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Tháng này</a>
                                        <a class="dropdown-item" href="#">Tháng trước</a>
                                        <a class="dropdown-item" href="#">Tháng khác</a>
                                    </div>
                                </div>
                                <div class="btn-group" style="width:25%; height:40px">
                                    <button type="button" class="btn btn-primary rounded-0 border-0 border-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Quý
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Quý I</a>
                                        <a class="dropdown-item" href="#">Quý II</a>
                                        <a class="dropdown-item" href="#">Quý III</a>
                                        <a class="dropdown-item" href="#">Quý IV</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div id="transaction-overall-infor"
                             class="p-3 bg-light border-bottom mx-auto overrall-in-out shadow-sm"
                             style="width: 100%">
                            <div class="mx-auto">
                                <div class="d-flex justify-content-between align-items-center p-2">
                                    <span class="text-success m-0 fs1 font-weight-bold">Thu vào:</span>
                                    <span class="text-success fs1 font-weight-bold">{{totalIncome | incomeToString("vi-VN", "VND")}}</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center p-2">
                                    <span class="text-danger m-0 fs1 font-weight-bold">Chi ra:</span>
                                    <span class="text-danger m-0 fs1 font-weight-bold">{{totalExpense | incomeToString(currencyCode,currencyName)}}</span>
                                </div>

                                <!--<div class="d-flex justify-content-between align-items-center">
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
                                </div>-->
                            </div>
                        </div>
                    </div>

                    <!-- Thanh tổng quan thu chi -->
                    <!-- Bảng ghi chép thu chi-->
                    <!--Thông tin chung-->
                    <div class="mt-2" style="">
                        <div style="max-height:70vh; overflow-y:auto">
                            <div class="container p-0" style="width:100%" v-for="(itm,index) in dataDate" :key="index">
                                <div class="title container bg-light border-top border-bottom"
                                     v-bind:style="hiddenDetail? 'height:65px':'height:65px'">
                                    <div class="d-flex align-items-center justify-content-between m-auto py-0 text-secondary-primary">
                                        <div class="d-flex align-items-center" v-bind:class="hiddenDetail? 'p-2':'p-2   '">
                                            <div style="font-size: 48px; line-height:48px">{{itm.date.getDate() | dateInMonth()}}</div>
                                            <div class="text-left px-2 py-auto">
                                                <div class="m-0 p-0 font-weight-bold">{{dayInWeek[itm.date.getDay()-1]}}</div>
                                                <div class="m-0 p-0 font-weight-bold"> T{{itm.date.getMonth()+1 | dateInMonth()}}  / {{itm.date.getFullYear()}}   </div>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <!-- <div class="icon-in-out d-flex mr-2">
                                                                        <div class="bg-success mx-1" style="width:18px; height:40px"></div>
                                                                        <div class="bg-danger" style="width:18px; height:40px"></div>
                                            </div>-->
                                            <div class="text-right">
                                                <span class="text-success font">{{itm.income| incomeToString(currencyCode,currencyName)}}</span>
                                                <br />
                                                <span class="text-danger">{{itm.expense| incomeToString(currencyCode,currencyName)}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--Thu/Chi-->

                                <div class="bg-warning container p-0" style="overflow:auto">
                                    <div class="d-flex justify-content-end"
                                         v-on:click="hiddenDetail=false; showDetail =  true"
                                         v-for="(item,index) in data"
                                         :key="index">

                                        <div class="border-bottom bg-light text-dark d-flex align-items-center justify-content-between p-2 mini-transaction-detail-item "
                                             style="width:95%;"
                                             v-bind:id="item.TransactionID"
                                             v-bind:tabindex="index"
                                             v-bind:style="hiddenDetail? 'height:50px; cursor: pointer':'height:50px;cursor: pointer'"
                                             v-if="isOneDate(new Date(item.IsoTransactionDate) , itm.date)"
                                             v-on:click="bindIDForDetailForm(index)">
                                            <!--<div>   <img src="item.IncomeExpenseCategoryIcon" alt="" style="height: 30px" /></div>-->
                                            <div class="d-flex align-items-center justify-content-between">
                                                <i v-bind:class="item.icon"></i>
                                                {{item.IncomeExpenseCategoryName}}
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <div v-bind:class="(item.Amount >= 0)? 'text-success mx-2':'text-danger mx-2'">
                                                    <span class="fs1">{{item.Amount | incomeToString(currencyCode,currencyName) }}</span>
                                                </div>
                                                <i class="fas fa-ellipsis-v mx-2 text-secondary-primary"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <!--Thông tin chi tiết thu chi -->
                <transition name="fade">
                    <div class=" col col-md-7 "
                         style="position:sticky !important; top:16px!important"
                         v-if="!hiddenDetail">
                        <div id="transaction-detail"
                             class="mx-auto my-3 px-2 pb-2 border border-top-0 shadow bg-light"
                             style="overflow: hidden;" v-if="!hiddenDetail">
                            <div class="p-2 d-flex align-items-center justify-content-between border-bottom h50p">
                                <span class="font-weight-bold" style="font-size:1.1em; color:#084866;">Chi tiết ghi chép</span>
                                <i class="fas fa-times text-danger" style="cursor:pointer" @click="hiddenDetail=true;"></i>
                            </div>

                            <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                                 style="height:60px; font-size:18px">
                                <label class="my-auto">
                                    <span>Số tiền</span>
                                </label>
                                <label class="my-auto"
                                       style="font-size:30px"
                                       v-bind:class="(transactionDetail.Amount >= 0)? 'text-success mx-2':'text-danger mx-2'">{{transactionDetail.Amount| incomeToString(currencyCode,currencyName) }}</label>
                            </div>

                            <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                                 style="height:60px; font-size:18px">
                                <label class="my-auto">
                                    <span>Hạng mục</span>
                                </label>
                                <label class="my-auto">{{transactionDetail.IncomeExpenseCategoryName}}</label>
                            </div>


                            <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                                 style="height:60px; font-size:18px">
                                <label class="my-auto">
                                    <span>Ghi chép</span>
                                </label>
                                <label class="my-auto">{{typeOfTransaction[transactionDetail.TransactionType]}}</label>
                            </div>

                            <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                                 style="height:60px; font-size:18px">
                                <label class="my-auto">
                                    <span>Tài khoản</span>
                                </label>
                                <label class="my-auto">{{transactionDetail.AccountName}}</label>
                            </div>

                            <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                                 style="height:60px; font-size:18px">
                                <label class="my-auto">
                                    <span>Thời gian</span>
                                </label>
                                <label class="my-auto">{{ transactionDetail.IsoTransactionDate| vnDate()}}</label>
                            </div>

                            <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                                 style="height:60px; font-size:18px">
                                <label class="my-auto">
                                    <span>Ghi chú</span>
                                </label>
                                <label class="my-auto">{{transactionDetail.Description}}</label>
                            </div>

                            <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                                 style="height:60px; font-size:18px">
                                <label class="my-auto">
                                    <span>Chi cho ai</span>
                                </label>
                                <label class="my-auto">{{transactionDetail.RelatedPerson}}</label>
                            </div>

                            <div class="border-bottom m-1 d-flex px-2 justify-content-between"
                                 style="height:60px; font-size:18px">
                                <label class="my-auto">
                                    <span>Sự kiện</span>
                                </label>
                                <label class="my-auto">{{transactionDetail.EventName}}</label>
                            </div>

                            <div class="d-flex justify-content-end" style="height:auto;">
                                <button type="button" class="btn btn-danger m-1" data-toggle="modal" data-target="#confirmModal">
                                    <i class="fas fa-trash-alt mr-1"></i>Xóa
                                </button>
                                <button type="button"
                                        class="btn bg-primary m-1 text-light"
                                        data-toggle="modal"
                                        v-on:click="editTransaction"
                                        v-bind:data-target="'#' + modal">
                                    <i class="fas fa-edit mr-1"></i>Sửa
                                </button>


                            </div>
                        </div>


                        <!--<div>
                            <div v-for=" (item, index) in dataDate" :key="index">
                                {{item}}
                            </div>
                        </div>-->





                    </div>
                </transition>


            </div>
        </div>
        <edit-transaction v-bind:modal="modal" />
        <!-- Modal -->
        <div class="modal fade" v-if="!isNullSelected()" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="ConfirmModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header m-0 p-2">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Xác nhận</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body px-2">
                        Bạn có thật sự muốn xóa ghi chép này không?
                    </div>
                    <div class="border-top p-2 d-flex justify-content-end">
                        <button type="button" class="btn btn-danger m-1" data-dismiss="modal" @click="removeTransaction()">Có</button>
                        <button type="button" class="btn bg-primary m-1 text-white" data-dismiss="modal" aria-label="Close" aria-hidden="true">Không</button>
                    </div>
                </div>

            </div>
        </div>
        <div id="snackbar" class='border bg-secondary'> <i class="far fa-check-circle text-success m-2"></i>Đã xóa thành công!</div>
    </div>
</template>
<script>
    import EditTransaction from "@/components/transaction/EditTransaction.vue";
    import eventBus from "../assets/js/eventbus";
    import { mapActions, mapState } from "vuex";
    import { getVietnameseDateForm } from '../assets/js/util';
    export default {
        name: "transaction",
        data() {
            return {
                modal: "editTransactionModal",
                hiddenDetail: true,
                showDetail: false,
                hiddenFilter: true,
                areYouSure: false,
                income: 300000,
                expense: 200000,
                currencyName: "VND",
                currencyCode: "vi-VN",
                transactionDetail: {},
                typeOfTransaction: ["Chi tiền", "Thu tiền", "Cho vay", "Đi vay", "Chuyển khoản", "Điều chỉnh số dư"],
                dayInWeek: ['Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy', 'Chủ nhật'],
            }
        },
        filters: {
            incomeToString: function (value, currencyCode, currencyName) {
                return new Intl.NumberFormat(currencyCode, {
                    style: "currency",
                    currency: currencyName
                }).format(value);
            },
            showDate(value) {
                return value
            },
            dateInMonth(value) {
                let tmp = (value < 10) ? ('0' + value) : '' + value;
                return tmp;
            },
            vnDate(value) {
                return getVietnameseDateForm(value);
            }
        },
        components: {
            EditTransaction
        },
        computed: {
            incomePercent: function () {
                let a = Number(this.totalIncome);
                let b = Number(this.totalExpense);
                var tmp = "width:" + (a / (a + b)) * 100 + "%";
                var tmp2 = "width:" + (a / (a - b)) * 100 + "%";

                return this.totalExpense > 0 ? tmp : tmp2;
            },
            ...mapState('financetransaction', [
                'dataDate', 'data', 'totalIncome', 'totalExpense'
            ]),

        },
        methods: {
            bindIDForDetailForm(value) {
                this.transactionDetail = this.data[value];

            },
            isNullSelected() {
                return (typeof (this.transactionDetail.TransactionID) === 'undefined');
            },
            removeTransaction() {
                this.$store.dispatch('financetransaction/delete', this.transactionDetail.TransactionID);
                this.transactionDetail = [];
                this.myFunction();
            },
            myFunction() {
                var x = document.getElementById("snackbar");
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            },
            isOneDate(a, b) {
                if (a.getDate() != b.getDate()) return false;
                if (a.getMonth() != b.getMonth()) return false;
                if (a.getFullYear() != b.getFullYear()) return false;
                return true;
            }
            ,
            editTransaction() {
                eventBus.$emit('editTransaction', this.transactionDetail);
            },
            ...mapActions("financetransaction", ["getAll"]),

        },
        created() {
            //eventBus.$on("rerender", this.handler);
            //this.bindData();
            this.$store.dispatch('financetransaction/getAll');
            //console.log(this.data);
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
    .fs1, .iInput:not([class*=" fs"]) {
        font-size: 1em;
    }

    .fs10p {
        font-size: 10px;
    }

    .fs11, .fsbfl:first-letter {
        font-size: 1.1em;
    }

    .fs11p {
        font-size: 11px;
    }

    .fs12, .num, .fs12fl:first-letter, .fs12a:after, .fs12b:before {
        font-size: 1.2em;
    }

    .fs12p {
        font-size: 12px;
    }

    .fs12pi {
        font-size: 12px !important;
    }

    .fs13, .fs13fl:first-letter {
        font-size: 1.3em;
    }

    .fs13p {
        font-size: 13px;
    }

    .fs14, .sá»‘, .fs14fl:first-letter, .fs14a:after, .fs14b:before {
        font-size: 1.4em;
    }

    .fs14p, .fs14pc * {
        font-size: 14px;
    }

    .fs14pi, .fs14pci * {
        font-size: 14px !important;
    }

    .fs15p {
        font-size: 15px;
    }

    .fs15, .fs15fl:first-letter {
        font-size: 1.5em;
    }

    .fs16, .fs15fl:first-letter {
        font-size: 1.6em;
    }

    .fs18, .fs18fl:first-letter {
        font-size: 1.8em;
    }

    .fs2, .fs2fl:first-letter {
        font-size: 2em;
    }

    .h50p {
        height:50px;
    }

    .icon-search {
        position: absolute;
        left: 175px;
    }

    .bg-primary {
        background-color: #205a75 !important;
    }

    ul > li > ul {
        display: none;
    }

    .btn-primary {
        background-color: white;
        color: #366A82;
        border-right: white 1px solid !important;
        border-bottom: white 1px solid !important;
        border-top: white 1px solid !important;
    }

    .dropdown-item:hover {
        background-color: #5E879B;
        color: white;
    }

    #transaction-detail {
        position: sticky !important;
        top: 16px !important;
    }

    #transaction-filter-bar {
        position: sticky !important;
        top: 16px !important;
    }

    .mini-transaction-detail-item:hover, .mini-transaction-detail-item:focus {
        background-color: #e8f0fe !important;
        /*border-bottom: 3px solid gray !important;*/
        user-select: none;
        outline: none;
    }

    #transaction-detail {
        animation: showDetailFrame 0.5s;
        animation-iteration-count: 1;
        transform-origin: 50% 50%;
    }

    @keyframes showDetailFrame {
        0% {
            opacity: 1;
            transform: translate(0px,0px);
            height: 0px;
        }

        100% {
            opacity: 1;
            transform: translate(0px,0px);
            height: 380px;
        }
    }


    ::-webkit-scrollbar {
        width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #366A82;
    }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #205a75;
        }
    /* Snackbar */
    #snackbar {
        visibility: hidden;
        min-width: 250px;
        margin-left: -125px;
        background-color: #333;
        color: #fff;
        text-align: center;
        border-radius: 2px;
        padding: 16px;
        position: fixed;
        z-index: 1;
        right: 20px;
        bottom: 20px;
        font-size: 17px;
    }

        #snackbar.show {
            visibility: visible;
            animation: fadein 0.5s, fadeout 0.5s 2.5s;
        }


    @keyframes fadein {
        from {
            bottom: 0;
            opacity: 0;
        }

        to {
            bottom: 20px;
            opacity: 1;
        }
    }


    @keyframes fadeout {
        from {
            bottom: 20px;
            opacity: 1;
        }

        to {
            bottom: 0;
            opacity: 0;
        }
    }
</style>
