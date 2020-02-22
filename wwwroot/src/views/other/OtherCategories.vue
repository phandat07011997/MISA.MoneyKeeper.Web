<template>
  <div class="other-categories">
    <div class="header">
      <div class="title-addButton">
        <h1>Hạng mục thu chi</h1>
        <button data-toggle="modal" data-target="#myModal">
          <i class="far fa-plus-square"></i> Thêm hạng mục
        </button>
      </div>

      <!-- Modal -->
      <div class="modal fade" tabindex="-1" role="dialog" id="myModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" style="color:black">&larr;</span>
              </button>
              <h4 class="modal-title">Thêm hạng mục chi</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-1">
                  <i class="fas fa-question-circle" style="font-size:40px"></i>
                </div>
                <div class="col-md-3">
                  <input type="text" class="form-control" placeholder="Tên hạng mục" />
                </div>
                <div class="col-md-6">
                  <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Hạng mục cha</option>
                    <option
                      value="1"
                      v-for="listCatParent in listParentCategories"
                      v-bind:key="listCatParent.id"
                    >{{listCatParent.name}}</option>
                  </select>
                </div>
              </div>
              <br />
              <br />

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea3"
                      rows="7"
                      placeholder="Ghi chú"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Lưu</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
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
        <div class="search">
          <input type="text" placeholder="Tìm kiếm hạng mục" v-model="search" />
        </div>
      </div>

      <!-- <DxTreeView id="treeview" :items="categoriesEx" :width="500" :search-enabled="true" /> -->
    </div>
    <div class="container col-sm-6">
      <div class="content">
        <component v-bind:is="currentTab"></component>
      </div>
    </div>
  </div>
</template>

<script>
// import DxTreeView from "devextreme-vue/tree-view";
import expenseTab from "../../components/categories/ExpenseTab.vue";
import incomeTab from "../../components/categories/IncomeTab.vue";

export default {
  data: function() {
    return {
      search: "",
      currentTab: "expenseTab",
      tabs: [
        { key: "expenseTab", label: "Mục chi" },
        { key: "incomeTab", label: "Mục thu" }
      ]
    };
  },
  components: {
    expenseTab,
    incomeTab
  }
};
</script>

<style lang="scss">
.other-categories {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #ccc;
  min-height: 100vh;
  padding: 0px;
}
.other-categories {
  .active {
    background-color: #319e4e;
  }
  button:hover {
    background-color: #319e4e;
  }
  .title-addButton {
    background-color: #ccc;
    text-align: center;
  }
  .title-addButton h1 {
    display: inline-block;
    margin-left: 136.25px;
  }
  .title-addButton button {
    position: relative;
    top: 5px;
    right: 40px;
    padding: 10px 10px;
    float: right;
    border-radius: 5px;
    background-color: #085394;
    border: 1px solid #085394;
    color: #fff;
    -webkit-box-shadow: 5px 6px 8px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 6px 8px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 5px 6px 8px -1px rgba(0, 0, 0, 0.75);
  }

  .align-elements {
    margin: 0px auto;
  }

  .top-nav {
    position: relative;
    text-align: center;
    margin: 2vh auto 0px auto;
    .cat-child {
      margin-left: 30px;
    }
  }
  .top-nav button {
    padding: 1.5vh;
    font-size: 5;
    font-weight: bolder;
    border: none;
  }
  .header {
    padding-top: 20px;
  }
  .header .align-elements .search {
    margin-top: 5px;
    float: right;
  }
  .header .align-elements .search input {
    border: none;
  }
  .container .content {
    clear: right;
    position: relative;
    // text-align: ;
    margin: 5vh auto 0px auto;
    background: white;
  }
  .container .content ul {
    padding: 0px;
    margin: 0px;
    .cat-child {
      margin-left: 30px;
    }
  }
  .container .content ul li {
    list-style: none;
    :hover {
      background-color: #f1f1f1;
    }
  }
  .container .content ul li a {
    text-decoration: none;
    display: block;
    height: 60px;
    line-height: 60px;
    color: #000;
    padding: 0px 10px;
    border: 1px solid #319e4e;
    font-weight: bold;
    font-size: 4;
  }
}
</style>