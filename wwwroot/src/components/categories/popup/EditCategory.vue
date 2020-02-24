<template>
  <div class="edit-cat-popup">
    <Popup v-bind:modal="modal">
      <template v-slot:headerExpense>
        <h4 class="modal-title">Sửa hạng mục {{ currentTab === 'expenseTab' ? 'chi' : 'thu' }}</h4>
      </template>
      <template v-slot:contentModal>
        <div class="modal-body">
          <div class="row">
            <div class="col-1">
              <i class="fas fa-question-circle"></i>
            </div>
            <div class="col-3">
              <label for="name-cat">Tên hạng mục:</label>
              <input
                name="name-cat"
                type="text"
                class="form-control"
                placeholder="Tên hạng mục"
                :value="nameCat"
              />
            </div>
            <div class="col-6" v-if="!isParent">
              <label for="choose-cat">Chọn hạng mục cha:</label>
              <select name="choose-cat" class="custom-select mr-sm-2 choose-cat" id="inlineFormCustomSelect">
                <option value="none">(Không chọn)</option>
                <option v-for="(cat, index) in categories" :key="index" :value="cat.name">{{ cat.name }}</option>
              </select>
            </div>
          </div>
          <br />
          <br />

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
  props: ["modal", "nameCat", "isParent", "currentTab"],
  components: {
    Popup
  },
  computed:{
    categories(){
        if (this.currentTab === 'expenseTab'){
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
.edit-cat-popup {
  .fa-question-circle {
    font-size: 40px;
    margin-top: 25px;
  }
  .choose-cat{
    width: 540px;
  }
}
</style>