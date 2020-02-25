<template>
  <div class="add-cat-popup">
    <Popup v-bind:modal="modal">
      <template v-slot:headerExpense>
        <h4 class="modal-title">Thêm hạng mục</h4>
      </template>
      <template v-slot:contentModal>
        <div class="modal-body">
          <div class="row">
            <div class="col-5">
              <label for="select-tab">Chọn hạng mục:</label>
              <select name="select-tab" class="custom-select mr-sm-2 choose-cat" id="select-tab" @change="tabSelected = $event.target.value">
                <option value="expenseTab">Hạng mục chi</option>
                <option value="incomeTab">Hạng mục thu</option>
              </select>
            </div>
            <div class="col-1">
              <i class="fas fa-question-circle" style="font-size:40px"></i>
            </div>
            <div class="col-6">
              <label for="name-cat">Tên hạng mục:</label>
              <input name="name-cat" type="text" class="form-control" placeholder="Tên hạng mục" />
            </div>
          </div>
          <br><br>
          <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
              <label for="select-par-cat">Chọn hạng mục cha:</label>
              <select name="select-par-cat" class="custom-select mr-sm-2 choose-cat" id="select-par-cat">
                <option value="none">(Không chọn)</option>
                <option v-for="(cat, index) in categories" :key="index" :value="cat.name">{{ cat.name }}</option>
              </select>
            </div>
          </div>
          <br><br>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="note-cat">Ghi chú:</label>
                <textarea
                  name="note-cat"
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
      <template v-slot:buttonModal>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            <i class="far fa-trash-alt"></i> Hủy
          </button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">
            <i class="fas fa-save"></i> Lưu
          </button>
        </div>
      </template>
    </Popup>
  </div>
</template>

<script>
import Popup from "../../layout/Popup.vue";
import {categories} from "../../../assets/js/categoriesdb.js"
export default {
  props: ["modal"],
  components: {
    Popup
  },
  data(){
    return{
      tabSelected: 'expenseTab'
    }
  },
  computed: {
    categories() {
      if(this.tabSelected === 'expenseTab'){
        return categories.categoriesEx
      }
      else{
        return categories.categoriesIn
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.add-cat-popup {
  .fa-question-circle {
    font-size: 40px;
    margin-top: 25px;
  }
  .modal-body{
    label{
      font-weight: bold;
    }
  }
}
</style>