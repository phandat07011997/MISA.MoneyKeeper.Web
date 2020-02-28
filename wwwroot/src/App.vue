
    <template>
        
        <div id="app">
            {{ testData }}
            <router-view></router-view>
        </div>
    </template>
    <script>
        import { mapActions, mapState } from "vuex";

        export default {
            data() {
                return {
                    testData: null
                }
            },
            methods: {
                ...mapActions("sync", ["getData", "create", "login"]),
            },
            async created() {
                await this.$store.dispatch('sync/login').then(res => {
                    console.log(res)
                    console.log('create')
                    this.$store.dispatch('sync/getData').then(res => {
                        console.log(res)
                        this.$store.dispatch('sync/create', res.data);
                    });

                }).catch(err => { console.log('Lỗi'); console.log(err) });
                
            },
            mounted() {
                
            },
            computed: {
           
                ...mapState({
                     data: state => state.sync.data,
                }),

            },
        }
    </script>
<!--<template>
    <div id="app">
        <div id="header">
            <TopBar />
        </div>
        <div id="main">
            <div id="sidenav">
                <SideBar />
            </div>
            <div id="content" v-on:scroll="visibleBtn()">
                <router-view />
            </div>
        </div>
        <div class="clr"></div>
        <a href="#" id="back-to-top-btn" v-on:click="backToTop()">
            <img src="./assets/img/back-to-top-icon.png" />
        </a>
    </div>
</template>
<script>
    import TopBar from "./components/layout/TopBar.vue";
    import SideBar from "./components/layout/SideBar.vue";
    export default {
        components: { TopBar, SideBar },
        methods: {
            visibleBtn() {
                var btn = document.getElementById("back-to-top-btn");
                if (document.getElementById("content").scrollTop > 100) {
                    btn.style.display = "block";
                } else {
                    btn.style.display = "none";
                }
            },
            backToTop() {
                document.getElementById("content").scrollTop = 0;
            }
        }
    };
</script>
<style lang="scss">
    @import "./assets/css/app.scss";
</style>-->


