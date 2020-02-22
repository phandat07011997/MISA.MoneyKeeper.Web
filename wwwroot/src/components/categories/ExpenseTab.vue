<template>
  <div class="expense-tab">
    <ul class="cat-par" v-for="par in categories.categoriesEx" :key="par.id">
      <li data-toggle="modal" v-bind:data-target="'#log'+par.id">
        <a href="#">{{ par.name }}</a>
      </li>

      <!-- <div
        class="modal fade"
        tabindex="-1"
        role="dialog"
        v-bind:id="'log'+par.id"
        v-if="par.allowToChange"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" style="color:black">&larr;</span>
              </button>
              <h4 class="modal-title">Sửa hạng mục chi</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-1">
                  <i class="fas fa-question-circle" style="font-size:40px"></i>
                </div>
                <div class="col-md-11">
                  <input type="text" class="form-control" v-model="par.name" />
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
              <button type="button" class="btn btn-primary">Lưu</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">Xóa</button>
            </div>
          </div>
          
        </div>
        
      </div>

      <div class="modal fade" tabindex="-1" role="dialog" v-bind:id="'log'+par.id" v-else>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">Sổ thu chi MISA</div>
            <div class="modal-body">
              <h3>Sổ thu chi MISA</h3>
              <p>Không được sửa,xóa hạng mục này</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Đồng ý</button>
            </div>
          </div>
        </div>
      </div> -->

      <ul class="cat-child" v-for="child in par.childs" :key="child.id">
        <li>
          <a data-toggle="modal" v-bind:data-target="'#log' +child.id+ modal" href="#">{{ child.name }}</a>

          <pop-up v-bind:modal="'log' +child.id+ modal">
            <template v-slot:headerExpense>
              <h4 class="modal-title">Sửa hạng mục chi</h4>
            </template>
            <template v-slot:contentModal>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-1">
                    <i class="fas fa-question-circle" style="font-size:40px"></i>
                  </div>
                  <div class="col-md-3">
                    <input type="text" class="form-control" placeholder="Tên hạng mục" v-model="child.name"/>
                  </div>
                  <div class="col-md-6">
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                      <option selected>{{child.name}}</option>
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
            </template>
          </pop-up>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
import { categories } from "../../assets/js/categoriesdb.js";
import popUp from "../layout/Popup.vue";
// import modal from ''
export default {
  data: function() {
    return {
      categories: categories,
      modal: "editCategoryChild"
    };
  },
  components: {
    popUp
  }
};
</script>

<style scoped lang="scss">
.expense-tab {
  .cat-child {
    margin-left: 30px;
  }
}
</style>