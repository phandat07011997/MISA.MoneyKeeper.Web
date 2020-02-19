<template>
  <div id="top-bar">
    <div id="left-top-bar">
      <img src="../../assets/img/logo-moneykeeper.png" alt />
      <span>
        <i class="fa fa-credit-card-alt" aria-hidden="true"></i> Tài chính hiện tại:
        <span>+100.000 VND</span>
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
      <a href="#">
        
          <div id="add-icon">
            <img src="../../assets/img/add-icon.png" />
          </div>
          <div id="add-label">Thêm ghi chép</div>
        
      </a>
    </div>
    <div class="clr"></div>
  </div>
</template>
<script>
export default {
  name: "topbar",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
@import "../../assets/css/top-bar.scss";
</style>
