<template>
    <div class="d-flex">
        <SubSideBarContent v-bind:subSidebars="subSidebars" :hide="hide" @hidden-sidebar="hide = !hide">Thiết lập</SubSideBarContent>
        <div class="child-content"><router-view :hide="hide" @hidden-content="hide = !hide"></router-view></div>

    </div>
</template>
<script>

    import SubSideBarContent from '../../components/layout/SubSideBarContent.vue'
   
export default {
  data() {
    return {
      subSidebars: [
        {
          id: 1,
          nameSub: "Đồng bộ dữ liệu",
          iconSub: "fas fa-sync",
          activeComponent: "/other/recurring"
        },
        {
          id: 2,
          nameSub: "Lấy dữ liệu từ máy chủ",
          iconSub: "fas fa-database fa-1x",
          activeComponent: "/other/categories"
        },
        {
          id: 3,
          nameSub: "Truy xuất dữ liệu",
          iconSub: "fas fa-chart-pie",
          activeComponent: "/other/help"
        },

        {
          id: 4,
          nameSub: "Đồng tiền chính",
          iconSub: "fas fa-money-bill",
          activeComponent: "/other/recurring"
        },
        {
          id: 5,
          nameSub: "Tỷ giá",
          iconSub: "fas fa-cash-register",
          activeComponent: "/other/recurring"   
            },
        {
          id: 6,
          nameSub: "Ngôn ngữ",
          iconSub: "fas fa-globe-asia",
          activeComponent: "/other/settings/language"
            },
        {
          id: 7,
          nameSub: "Mã bảo vệ",
          iconSub: "fas fa-lock",
          activeComponent: "/other/recurring"
            },
        {
          id: 8,
          nameSub: "Nhắc nhập liệu",
          iconSub: "far fa-clock",
          activeComponent: "/other/recurring"
            },

        {
          id: 9,
          nameSub: "Xóa dữ liệu",
          iconSub: "fas fa-download",
          activeComponent: "/other/recurring"
            },
        {
          id: 10,
          nameSub: "Gửi lỗi",
          iconSub: "far fa-sun",
          activeComponent: "/other/recurring"
            },
        {
          id: 11,
          nameSub: "Đánh giá ứng dụng",
          iconSub: "fas fa-passport",
          activeComponent: "/other/recurring"
            },
        {
          id: 12,
          nameSub: "Thông tin sản phẩm",
          iconSub: "fas fa-exclamation-circle",
          activeComponent: "/other/recurring"
        },

        ],
        hide: true
    };
  },
  components:{
      SubSideBarContent
  }
};</script>
<style lang="scss">


    @import "../../assets/css/views/other.scss";
</style>