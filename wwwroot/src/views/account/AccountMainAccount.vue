<template>
    <div class="border d-flex-column align-items-center justify-content-center" style="width:100%;height:100%" >
        <div class="total-money border-danger">
            <div class="d-flex justify-content-center align-items-center border-danger">
                <h3 style="padding-left:10px">Tổng tiền: </h3>
                <h3>  {{totalMoney}}</h3>

            </div>
        
        </div>
        <div class="main-account justify-content-center d-flex-column">
            <div v-for="listAccount in listAccounts" v-bind:key="listAccount.id">
                <ul>
                    <li class="list-account row d-flex-column align-items-center">
                        <div class="left-list col-md-10 row d-flex align-items-center" style="cursor:pointer" data-toggle="collapse" v-bind:data-target="listAccount.collapseLink" aria-expanded="true" v-bind:aria-controls="listAccount.collapseLink">
                            <div class="col-md-3 d-flex justify-content-start align-items-center items-in-list">
                                <i v-bind:class="listAccount.iconAccount"></i>
                                <div>{{listAccount.nameAccount}}</div>
                            </div>
                            <div class="col-md-9 d-flex justify-content-center align-items-center">
                                <div>Còn:</div>
                                <div>   {{listAccount.moneyAccount}}</div>
                            </div>
                        </div>

                        <div class="col-md-2 d-flex justify-content-end align-item-center border-left">
                            <div style="cursor:pointer">
                                <i class="fas fa-pen"></i>
                                Sửa
                            </div>

                        </div>
                        <!--<ul v-for="listItem in lisItems" v:bind:key="">
                            <li>

                            </li>
                        </ul>-->

                        <div class="col-md-2 d-flex justify-content-end align-item-center"></div>
                    </li>
                    <li style="height:1px;"></li>
                </ul>


            </div>
            <button type="button" class="btn btn-success justify-content-center d-flex-column btn-style">
                <i class="fas fa-plus"></i>
                Thêm tài khoản
            </button>
            
        </div>
        <div>
            
        </div>
    </div>
</template>
<script>
    export default {
        name: 'totalMoney',
        data: () => {
            return {
                click: false,
                totalMoney: '12.000.000 DONG',
                listAccounts: [
                    {

                        id: 1,
                        collapseLink:'linhdautien',
                    iconAccount: 'fas fa-briefcase',
                    nameAccount:'Ví tiền mặt',
                        moneyAccount: '500.000 DONG',
                        //listItems: [
                        //    {
                        //        id: 1,
                        //        name:

                        //    }
                        //,]

                    },
                    {
                        id: 2,
                        collapseLink:'lindautinenen',
                        iconAccount: 'fas fa-briefcase',
                        nameAccount:'Ví momo',
                        moneyAccount:'500.000 DONG'
                    },
                    {
                        id: 3,
                        collapseLink:'lindautinenen',
                        iconAccount: 'fas fa-briefcase',
                        nameAccount:'Ví ViettelPay',
                        moneyAccount:'700.000 DONG'
                    }
                ]
            };

        }
    }
</script>
<style lang="scss" scoped>
@import '../../assets/css/views/account/main-account.scss';
</style>