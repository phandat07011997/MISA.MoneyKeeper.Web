<template>
  <div class="other-categories">
    <div class="header">
      <div class="title-addButton">
        <h1>Hạng mục thu chi</h1>
        <a data-toggle="modal" v-bind:data-target="'#addCat'" href="#">
          <button>Thêm hạng mục</button>
        </a>
      </div>
      <!-- Nút điều hướng -->
      <div class="align-elements col-sm-6">
        <div class="top-nav">
          <button
            class="col-sm-6"
            :class="currentTab === tab.key ? 'active' : ''"
            v-for="tab in tabs"
            v-bind:key="tab.key"
            @click="currentTab = tab.key"
          >{{ tab.label }}</button>
        </div>
        <!-- Phần tử tìm kiếm -->
        <div class="search">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Tìm kiếm hạng mục" style="width: 300px" v-model="search" />
            <button v-if="search != ''" @click="search = ''" class="btn bg-transparent" style="margin-left: -40px; z-index: 100;">
              <i style="color: gray" class="fa fa-times"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
    <!-- Phần tử nội dung -->
    <div class="container col-sm-6">
      <div class="content">
        <Content :currentTab="currentTab"></Content>
      </div>
    </div>
    <div style="height: 300px"></div>
      <AddCategory :modal="'addCat'"></AddCategory>
  </div>
</template>

<script>
import Content from "../../components/categories/Content.vue";
import AddCategory from "../../components/categories/popup/AddCategory.vue";

export default {
  data: function() {
    return {
      modal: "editCat",
      search: "",
      currentTab: "expenseTab",
      tabs: [
        { key: "expenseTab", label: "Mục chi" },
        { key: "incomeTab", label: "Mục thu" }
      ]
    };
  },
  components: {
    Content,
    AddCategory
  }
};
</script>
<style lang="scss">
  @import '../../assets/css/views/other/categories.scss';
</style>