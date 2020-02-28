<template>
  <div class="menu-on-left shadow-sm " style="height:100%">
      <div class="d-flex just-content-center align-items-center mt-2"><img src="../../assets/img/logo-moneykeeper.png" alt="" style="margin:auto" /></div>
    <ul class="ml-0  p-0 list-menu hidden-xs-down" style="height:100%;margin-top:17px;">

            <!-- <router-link to="/" class="text-decoration-none"> -->
            <li class="">
                <router-link to="/home" class="router-link row d-flex just-content-start align-items-center">
                    <i class="fas fa-home" style="font-size:16px;"></i>
                    <span style="font-size:14px;margin-left:10px;">Tổng quan</span>
                </router-link>

            </li>
            <li class="">
                <router-link to="/transaction" class="router-link row d-flex just-content-start align-items-center">
                    <i class="fas fa-book" style="font-size:16px"></i>
                    <span style="font-size:14px;margin-left:10px;">Sổ Ghi Chép</span>
                </router-link>

            </li>
            <li class="">
                <router-link to="/spending-limit" class="router-link row d-flex just-content-start align-items-center">
                    <i class="far fa-building" style="font-size:16px"></i>
                    <span style="font-size:14px;margin-left:10px;">Hạn Mức Chi</span>
                </router-link>

            </li>
            <li class="">
                <a href="#accountSubMenu" class="router-link d-flex just-content-start align-items-center dropdown-toggle" data-toggle="collapse" aria-expanded="true" role="button">
                    <i class="far fa-list-alt" style="font-size:16px"></i>
                    <span style="font-size:14px;margin-left:10px;width:150px;">Tài Khoản</span>
                </a>

            </li>
            <div class=" collaspe show" id="accountSubMenu">
                <ul>
                    <li>
                        <router-link to="/account/mainAccount" class="d-flex justify-content-start align-items-center ">

                            <i class="fas fa-user fa-1x" style="width:20px;margin-left: 30px;"></i>

                            <span style="text-align:left;margin-left:15px;">Tài khoản</span>
                        </router-link>

                    </li>
                    <li style="">
                        <router-link to="/account/deposit" class="d-flex justify-content-start align-items-center">

                            <i class="fas fa-book" style="width:20px;margin-left: 30px;"></i>

                            <span style="text-align:left;margin-left:15px;">Sổ tiết kiệm</span>
                        </router-link>

                    </li>
                    <li style="">
                        <router-link to="/account/saveMoney" class="d-flex justify-content-start align-items-center">

                            <i class="fab fa-twitter" style="width:20px;margin-left: 30px;"></i>
                            <span style="text-align:left;margin-left:15px;">Tích lũy</span>
                        </router-link>

                    </li>

                </ul>
            </div>
            <li class="">
                <a href="#reportSubMenu" class="router-link d-flex just-content-start align-items-center dropdown-toggle" data-toggle="collapse" aria-expanded="true" role="button">
                    <i class="fab fa-wpforms" style="font-size:16px"></i>
                    <span style="font-size:14px;margin-left:10px;width:150px">Báo Cáo</span>
                    </a>

            </li>
            <div class="collaspe show" id="reportSubMenu">
                <ul>
                    <li>
                        <router-link to="/report/financial" class="d-flex justify-content-start align-items-center">

                            <i class="fas fa-user fa-1x" style="width:20px;margin-left: 30px;"></i>

                            <span style="text-align:left;margin-left:15px;">Tài chính hiện tại</span>
                        </router-link>

                    </li>
                    <li style="">
                        <router-link to="/report/lentborrowed" class="d-flex justify-content-start align-items-center">

                            <i class="fas fa-book" style="width:20px;margin-left: 30px;"></i>

                            <span style="text-align:left;margin-left:15px;">Theo dõi vay nợ</span>
                        </router-link>

                    </li>
                    <li style="">
                        <router-link to="/report/analysis" class="d-flex justify-content-start align-items-center">

                            <i class="fab fa-twitter" style="width:20px;margin-left: 30px;"></i>
                            <span style="text-align:left;margin-left:15px;">Phân tích chi tiêu</span>
                        </router-link>

                    </li>
                    <li style="">
                        <router-link to="/report/payee" class="d-flex justify-content-start align-items-center">

                            <i class="fab fa-twitter" style="width:20px;margin-left: 30px"></i>
                            <span style="text-align:left;margin-left:15px;">Đối tượng thu/chi</span>
                        </router-link>

                    </li>
                    <li style="">
                        <router-link to="/report/events" class="d-flex justify-content-start align-items-center">

                            <i class="fab fa-twitter" style="width:20px;margin-left: 30px"></i>
                            <span style="text-align:left;margin-left:15px;">Chuyến đi, sự kiện</span>
                        </router-link>

                    </li>
                    <li style="">
                        <router-link to="/report/charbar" class="d-flex justify-content-start align-items-center">

                            <i class="fab fa-twitter" style="width:20px;margin-left: 30px"></i>
                            <span style="text-align:left;margin-left:15px;">Phân tích tài chính</span>
                        </router-link>

                    </li>

                </ul>
            </div>
                <li class="">
                    <a href="#otherSubMenu" class="router-link d-flex just-content-start align-items-center dropdown-toggle" data-toggle="collapse" aria-expanded="true" role="button">
                        <i class="fas fa-bars" style="font-size:16px"></i>
                        <span style="font-size:14px;margin-left:10px;width:150px">Khác</span>
                        </a>

</li>
                <div class=" collaspe show" id="otherSubMenu">
                    <ul>
                        <li>
                            <router-link to="/other/settings" class="d-flex justify-content-start align-items-center">

                                <i class="fas fa-user fa-1x" style="width:20px;margin-left:30px"></i>

                                <span style="text-align:left;margin-left:15px;">Tài khoản</span>
                            </router-link>

                        </li>
                        <li style="">
                            <router-link to="/account/deposit" class="d-flex justify-content-start align-items-center">

                                <i class="fas fa-book" style="width:20px;margin-left: 30px"></i>

                                <span style="text-align:left;margin-left:15px;">Sổ tiết kiệm</span>
                            </router-link>

                        </li>
                        <li style="">
                            <router-link to="/account/saveMoney" class="d-flex justify-content-start align-items-center">

                                <i class="fab fa-twitter" style="width:20px;margin-left: 30px"></i>
                                <span style="text-align:left;margin-left:15px;">Tích lũy</span>
                            </router-link>

                        </li>

                    </ul>
                    </div>

</ul>
    </div>

</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      bind:true,
      bindSize:'S',
      items: [
        {
          id: 1,
          iconClass: "fas fa-home",
          isHover: false,
          navName: "Tổng quan",
          activeComponent: "/",
          
        },
        {
          id: 2,
          iconClass: "fas fa-book",
          isHover: false,
          navName: "Sổ Ghi Chép",
          activeComponent: "/transaction"
        },

                    {
                        id: 3,
                        iconClass: "far fa-building",
                        isHover: false,
                        navName: "Hạn Mức Chi",
                        activeComponent: "/spending-limit"
                    },
                    {
                        id: 4,
                        iconClass: "far fa-list-alt",
                        isHover: false,
                        navName: "Tài Khoản",
                        activeComponent: "/account"

                    },

                    {
                        id: 5,
                        iconClass: "fab fa-wpforms",
                        isHover: false,
                        navName: "Báo Cáo",
                        activeComponent: "/report"
                    },
                    {
                        id: 6,
                        iconClass: "fas fa-bars",
                        isHover: false,
                        navName: "Khác",
                        activeComponent: "/other"
                    }
                ]
            };
        },

        // methods(){
        //   checkEqual(a, b){

        //   }
        // },


    };
</script>

<style lang="scss" scoped>

    @import "../../assets/css/layout/side-bar.scss";
</style>
