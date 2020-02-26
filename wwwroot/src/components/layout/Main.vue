<template>
    <div>
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
            <i class="fas fa-caret-square-up" ></i>
        </a>

    </div>
</template>
<script>
import TopBar from "../../components/layout/TopBar.vue";
import SideBar from "../../components/layout/SideBar.vue";
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
    @import "../../assets/css/app.scss";
</style>
