<template>
  <div class="income-tab">
    <ul class="cat-par" v-for="par in categories.categoriesIn" :key="par.id">
      <li data-toggle="modal" v-bind:data-target="'#log'+par.id">
        <a href="#">{{ par.name }}</a>
      </li>
      <ul id="child" class="collapse cat-child" v-for="child in par.childs" :key="child.id">
        <li>
          <a href>{{ child.name }}</a>
        </li>
      </ul>
    </ul>

    <!-- Modal -->
    <div class="modal fade" tabindex="-1" role="dialog" id="myModalIncome">
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
              <div class="col-md-3">
                <input type="text" class="form-control" />
              </div>
              <div class="col-md-6">
                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                  <option selected>qqqq</option>
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
              <button type="button" class="btn btn-primary">Lưu</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">Xóa</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->


       <!-- Modal -->
      <div class="modal fade" tabindex="-1" role="dialog" v-bind:id="'log'+par.id">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              Sổ thu chi MISA
            </div>
            <div class="modal-body">
              <h3>Sổ thu chi MISA</h3>
              <p>Không được sửa,xóa hạng mục này</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Đồng ý</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
 
  </div>
</template>

<script>
import { categories } from "../../assets/js/categoriesdb.js";
export default {
  data: function() {
    return {
      listParentCategories: [
        { name: "Ăn uống", id: 1, icon: "fas fa-money-bill-wave" },
        { name: "Sinh hoạt", id: 2 },
        { name: "Con cái", id: 3 },
        { name: "Đi lại", id: 4 }
      ],
      categories: categories
    };
  }
};
</script>