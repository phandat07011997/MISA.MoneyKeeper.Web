<template>
    <div class="d-flex">
        <SubSidebar v-bind:subSidebars="subSidebars">Tài Khoản</SubSidebar>
        <div class="child-content"><router-view></router-view></div>
    </div>
</template>

<script>
    import SubSidebar from '../components/layout/SubSideBar.vue'
    export default {
        data: () => {
            return {
                subSidebars: [
                    {
                        id: 1,
                        nameSub: "Tài khoản",
                        iconSub: "fas fa-user fa-1x",
                        activeComponent: "/account/mainAccount",

                    },
                    {
                        id: 2,
                        nameSub: "Sổ tiết kiệm",
                        iconSub: "fas fa-book",
                        activeComponent: "/account/deposit"
                    },
                    {
                        id: 3,
                        nameSub: "Tích lũy",
                        iconSub: "fab fa-twitter",
                        activeComponent: "/account/saveMoney"
                    }
                ],

            };
        },
        components: {
            SubSidebar
        },
        methods: {}


    };
</script>

<style lang="scss" >

   @import "../assets/css/views/account.scss";

</style>