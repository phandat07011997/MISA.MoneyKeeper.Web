<template>
    <div id="top-bar">
        <div id="left-top-bar">
            <span class="money-now">

                <i class="far fa-credit-card hidden-xs" aria-hidden="true"></i>
                <span id="hiddenText"> Tài chính hiện tại:</span>
                <span id="money-total" class=""> +100.000 VND</span>
            </span>
        </div>

        <div id="right-top-bar">
            <div id="bell">
                <div @click="notification = !notification" style="cursor:pointer">
                    <i class="fas fa-bell" style="color:#031847;font-size:30px;"></i>
                </div>
            </div>
            <div id="user">
                <a href="#">
                    <div id="user-icon">
                        <i class="fas fa-user" style="color:#031847;font-size:30px;"></i>

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
        <div id="mid-top-bar">
            <a class="" data-toggle="modal" v-bind:data-target="'#' + modal" href="#">


                <button class="btn btn-success" style="font-weight:bold;font-size:15px;"><i class="fas fa-plus"></i> Thêm ghi chép</button>

            </a>
            <AddTransaction v-bind:modal="modal" />


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
</style>
