<template>
    <div class="col-md-2 border-right sub-sidebar">
        <div class="row subsidbar-row">
            <div class="col-md-12 border-bottom">
                <div style="text-align: center; padding-top: 15px;">
                    <h3 style="color:rgb(8, 72, 102)"><slot></slot><slot name="header"></slot></h3>
                </div>
            </div>
            <ul class="col-md-12 p-0">
                <li v-bind:key="subSidebar.id"
                    v-for="subSidebar in subSidebars"
                    class="d-flex menu-on-left m-0 "
                    style="">
                    <router-link :to="subSidebar.activeComponent" exact class="border-bottom m-0 d-flex subsidebar-list align-items-center" >

                        <i :class="subSidebar.iconSub" style="width:20px;"></i>

                        <div style="text-align:left;margin-left:30px;">{{subSidebar.nameSub}}</div>
                    </router-link>

                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data: () => {
            return {
            };
        },
        props: ['subSidebars']
    };
</script>

<style scoped>
    .sub-sidebar {
        /*position: fixed;*/
        height: 100%;
    }

    .container {
        border: 1px solid lightgray;
        border-radius: 5px;
        margin-top: 20px;
        width: 60%;
    }

    .menu-on-left {
        height: 50px;
        width: 100%;
    }

    .router-link {
        height: 100%;
        width: 100%;
        padding: 10px;
        color: white;
    }

        .router-link:hover {
            color: rgb(8, 72, 102);
        }

    .router-link-active {
        background-color: #319e4e;
        color: rgb(8, 72, 102) !important;
    }

    .subsidebar-list {
        color: black;
        text-decoration: none;
        width: 100%;
        height: 100%;
        padding: 6px
    }

        .subsidebar-list:hover {
            background-color: #319e4e;
            color: rgb(8, 72, 102);
        }

    .icon-sub {
        min-width: 100%
    }

    .icon-style {
        font-size: 20px !important;
        width: 20px;
        height: 20px;
    }
</style>