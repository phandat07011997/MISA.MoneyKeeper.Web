﻿<template>

    <div class="col-md-12 sub-sidebar" v-if="hide">
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
                    style="" @click="$emit('hidden-sidebar')">
                    <router-link :to="subSidebar.activeComponent" class="m-0 d-flex subsidebar-list align-items-center">

                        <i :class="subSidebar.iconSub" style="width:20px;margin-left: 20px;"></i>

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
        props: ['subSidebars', 'hide']
    };
</script>

<style scoped lang="scss">

    @import "../../assets/css/layout/sub-sidebar.scss";
</style>