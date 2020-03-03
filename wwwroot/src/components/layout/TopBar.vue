<template>
    <div id="top-bar">
        <div id="left-top-bar">
            <span class="money-now">

                <i class="far fa-credit-card hidden-xs" aria-hidden="true"></i>
                <span id="hiddenText"> Tài chính hiện tại:</span>
                <span id="money-total" class="font-weight-bold"> +100.000 VND</span>
            </span>
        </div>

        <div id="right-top-bar">
            <a class="mr-4" data-toggle="modal" v-bind:data-target="'#' + modal" href="#">
                <button class="btn btn-success" style="font-size:14px;"><i class="fas fa-plus" style="font-size: 12px"></i> Thêm ghi chép</button>
            </a>
            <AddTransaction v-bind:modal="modal" />

            <ul class="menu-list nav mr-2">
                <li>
                    <div>
                        <div style="cursor:pointer">
                            <i class="fas fa-cog"></i>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div @click="notification = !notification" style="cursor:pointer">
                            <i class="fas fa-bell"></i>
                        </div>
                    </div>
                </li>
            </ul>
            
            <div id="user" class="hidden-xs">
                <a href="#">
                    <div id="user-icon" class="d-flex flex-row justify-content-center align-items-center">
                        <!--<i class="fas fa-user" style="color:#07468a;font-size:20px;"></i>-->
                        <div class="user-title">
                            truonglv
                        </div>
                        <i class="fas fa-chevron-down"></i>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTem2SU6oN_YjOaW9od3BOFSYSl2493ebxnhx3DkVVz7fBO2Y-Y" alt="..." class="rounded-circle">
                    </div>
                    <div class="dropdown-content">
                        <div id="user-info">
                            <div id="user-avatar"><img src="../../assets/img/user-icon.png" /></div>
                            <div id="user-name">truonglv</div>
                            <div id="user-email">{{getUserFullName}}</div>
                        </div>
                        <hr />

                        <a class="" href="#" data-toggle="modal" v-bind:data-target="'#' + userInfoModal">Thông tin tài khoản</a>
                        <a href="#">Liên kết tài khoản</a>
                        <a href="#" @click="logout">Đăng xuất</a>

                    </div>

                </a>
                <UserInfo v-bind:modal="userInfoModal" />
            </div>
        </div>
       
        <div class="clr"></div>
        <Notification v-if="notification"></Notification>

    </div>
    
</template>
<script>
    import Notification from '@/components/layout/Notification.vue';
    import UserInfo from '@/components/user/UserInfo.vue';
    import AddTransaction from '@/components/transaction/AddTransaction.vue';
    export default {
        name: "topbar",
        data() {
            return {
                modal: "addModal",
                userInfoModal: "userModal",
                notification: false,
            };
        },
        components: {
            AddTransaction,
            UserInfo,
            Notification
        },
        computed:
        {
            getUser() {
                var user = JSON.parse(localStorage.getItem('user'));
                var position = user.username.indexOf("@");
                return user.username.slice(0, position);
            },
            getUserFullName() {
                var user = JSON.parse(localStorage.getItem('user'));
                return user.username;
            }
        },
        methods: {
            logout() {
                localStorage.removeItem('user');
                location.reload();
            }
        },
        created() {

        }
    }
</script>
<style lang="scss">
    @import '../../assets/css/layout/top-bar.scss';
    #user-icon{
        border-left: 1px solid lightgray;
    }
   .user-title {
       padding: 0 10px;
       color: #666;
   }
   #user-icon i{
       color: lightgray;
       font-size: 11px;
       padding: 0 10px;
   }
   #bell i{
       color: lightgray;
       font-size: 17px;
   }
   .menu-list{
       height: 50px;
   }
   .menu-list li{
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: row;
       padding: 0 10px;
       color: lightgray;
   }
   .menu-list li:hover{
       background-color: lightgray;
       color: white;
   }
</style>
