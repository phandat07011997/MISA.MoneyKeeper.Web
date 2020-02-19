<template>
  <div id="app">
    <div id="header">
      <TopBar />
    </div>
    <div id="main">
      <div id="sidenav">
        <SideBar />
      </div>
      <div id="content">
          <transition name="view">
        <router-view />
          </transition>
      </div>
    </div>
    <div class="clr"></div>
  </div>
</template>
<script>
import TopBar from "./components/layout/TopBar.vue";
import SideBar from "./components/layout/SideBar.vue";
export default {
  components: { TopBar, SideBar }
};
</script>

<style lang="scss">
* {
  
  margin: 0px;
  padding: 0px;
}

a {
  text-decoration: none;
}

.clr {
  clear: both;
}

ul li {
  list-style: none;
}

.router-link-exact-active {
  color: #42b983;
}

#header {
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0; /* Stay at the top */
  left: 0;
  // overflow-x: hidden; /* Disable horizontal scroll */
}

#main {
  margin-top: 72px;
  #sidenav {
    background-color: #073763;
    // position: fixed;
    width: 76px;
    height: calc(100% - 72px);
    // z-index: 1;
    // top: 72px; /* Stay at the top */
    // left: 0;
    // overflow-x: hidden; /* Disable horizontal scroll */
    // padding-top: 16px;
  }

  #content {
    /*height: calc(100vh - 72px);*/
    overflow-y:scroll;
    // width: 100%;
    // position: fixed;
    height: calc(100vh - 72px);
    background-color: #e9ebee;
    margin-left: 76px;
  }
}
.view-enter-active,.view-leave-active{
  transition: opacity 0 ease-in-out,transform 0 ease;
}
.view-enter-active{
  transition-delay: 0.2s
}
.view-enter{
  opacity: 0;
  transform: translateX(-20px);
}
.view-enter-to,.view-leave{
  opacity: 0.5;
  transform: translateX(0px);
  z-index: -1;
}
.view-leave-to{
  opacity: 0;
  transform: translateX(100px);
  z-index: -1;
  
}
</style>
