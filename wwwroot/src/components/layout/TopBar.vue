<template>
    <div id="top-bar">
        <div id="left-top-bar">
            <img src="../../assets/img/logo-moneykeeper.png" alt />
            <span>

                <i class="far fa-credit-card hidden-xs" aria-hidden="true"></i>
                <span id="hiddenText"> Tài chính hiện tại:</span>
                <span id="money-total" class=""> +100.000 VND</span>
            </span>
        </div>

        <div id="right-top-bar">
            <div id="bell">
                <a href="#">
                    <img src="../../assets/img/bell.png" />
                </a>
            </div>
            <div id="user">
                <a href="#">
                    <div id="user-icon">
                        <img src="../../assets/img/user-icon.png" />
                    </div>
                    <div id="user-name">Đạt</div>
                </a>
            </div>
        </div>
        <div id="mid-top-bar">
            <a class="" data-toggle="modal" v-bind:data-target="'#' + modal" href="#">


                <div id="add-icon">
                    <img src="../../assets/img/add-icon.png" />
                </div>
                <div id="add-label">Thêm ghi chép</div>

            </a>
            <AddTransaction v-bind:modal="modal"/>


        </div>
        <div class="clr"></div>
    </div>
</template>
<script>
    import AddTransaction from '@/components/transaction/AddTransaction.vue'
    export default {
        name: "topbar",
        data() {
            return {
                modal: "addModal"
            };
        },
        components: {
            AddTransaction,
        },
        methods: {}
    };
</script>
<style lang="scss">

    @import "../../assets/css/layout/top-bar.scss";
</style>
