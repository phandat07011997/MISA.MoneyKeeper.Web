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
        <router-view />
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
    position: fixed;
    width: 76px;
    height: 100%;
    z-index: 1;
    top: 72px; /* Stay at the top */
    left: 0;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 16px;
  }

  #content {
    /*height: calc(100vh - 72px);*/
    overflow:scroll;
    width: 100%;
    position: fixed;
    height: 100%;
    background-color: #e9ebee;
    padding: 10px 10px;
    margin-left: 76px;
  }
}
</style>
