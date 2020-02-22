<template>
  <div class="menu-on-left shadow-sm " style="height:100%">
    <ul class="ml-0  p-0 list-menu hidden-xs-down" style="height:100%">

      <!-- <router-link to="/" class="text-decoration-none"> -->
        <li v-for="item in items"
            :key="item.id"
            class="">
            <router-link :to="item.activeComponent" class="router-link d-flex flex-column justify-content-center align-items-center" v-if="item.activeComponent==='/other'">
                <i :class="item.iconClass" style="font-size:28px"></i>
                <div style="font-size:9px">{{item.navName}}</div>
            </router-link>
            <router-link :to="item.activeComponent" class="router-link d-flex flex-column justify-content-center align-items-center" v-else-if="item.activeComponent==='/report'">
                <i :class="item.iconClass" style="font-size:28px"></i>
                <div style="font-size:9px">{{item.navName}}</div>
            </router-link>
            <router-link :to="item.activeComponent" class="router-link d-flex flex-column justify-content-center align-items-center" v-else-if="item.activeComponent==='/account'">
                <i :class="item.iconClass" style="font-size:28px"></i>
                <div style="font-size:9px">{{item.navName}}</div>
            </router-link>

            <router-link :to="item.activeComponent" exact class="router-link d-flex flex-column justify-content-center align-items-center" v-else>
                <i :class="item.iconClass" style="font-size:28px"></i>
                <div style="font-size:9px">{{item.navName}}</div>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      bind:true,
      bindSize:'S',
      items: [
        {
          id: 1,
          iconClass: "fas fa-home",
          isHover: false,
          navName: "Tổng quan",
          activeComponent: "/",
          
        },
        {
          id: 2,
          iconClass: "fas fa-book",
          isHover: false,
          navName: "Sổ Ghi Chép",
          activeComponent: "/transaction"
        },

        {
          id: 3,
          iconClass:"far fa-building",
          isHover: false,
          navName: "Hạn Mức Chi",
          activeComponent: "/spending-limit"
        },
        {
          id: 4,
          iconClass: "far fa-list-alt",
          isHover: false,
          navName: "Tài Khoản",
          activeComponent: "/account"
        },
        
        {
          id: 5,
          iconClass: "fab fa-wpforms",
          isHover: false,
          navName: "Báo Cáo",
          activeComponent: "/report"
        },
        {
          id: 6,
          iconClass: "fas fa-bars",
          isHover: false,
          navName: "Khác",
          activeComponent: "/other"
        }
      ]
    };
  },

  // methods(){
  //   checkEqual(a, b){
      
  //   }
  // },
  
  
};
</script>

<style scoped lang="scss">

    @import "../../assets/css/layout/side-bar.scss";
</style>
