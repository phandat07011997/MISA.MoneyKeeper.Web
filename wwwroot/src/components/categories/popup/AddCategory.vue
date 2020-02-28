<template>
  <div class="add-cat-popup">
    <Popup v-bind:modal="modal">
      <template v-slot:headerExpense>Thêm hạng mục</template>
      <template v-slot:contentModal>
        <form id="form-add-category" @submit="checkForm" action="#" method="post">
          <div class="modal-body">
            <div class="row">
              <div class="col-1">
                <i class="fas fa-question-circle"></i>
              </div>
              <div class="col-5 widget">
                <label for="select-tab">Hạng mục:</label>
                <select
                  name="select-tab"
                  class="custom-select mr-sm-2 choose-cat"
                  id="select-tab"
                  :value="value"
                  @change="$emit('input', $event.target.value)"
                >
                  <option value="expenseTab">Hạng mục chi</option>
                  <option value="incomeTab">Hạng mục thu</option>
                </select>
              </div>
              <div class="col-1"></div>

              <div class="col-5 widget">
                <label for="name-cat">Tên hạng mục:</label>
                <input
                  name="name-cat"
                  type="text"
                  class="form-control"
                  id="name-form-add"
                  placeholder="Tên hạng mục"
                  v-model="name"
                  maxlength="160"
                />
                <i class="error">{{ errors[0] }}</i>
              </div>
            </div>
            <br />
            <br />
            <div class="row">
              <div class="col-1"></div>
              <div class="col-5 widget">
                <label for="select-par-cat">Hạng mục cha:</label>
                <select
                  name="select-par-cat"
                  class="custom-select mr-sm-2 choose-cat"
                  id="select-par-cat"
                  v-model="parentName"
                >
                  <option value="none">(Không chọn)</option>
                  <option
                    v-for="(cat, index) in categories"
                    :key="index"
                    :value="cat.name"
                  >{{ cat.name }}</option>
                </select>
              </div>
              <div class="col-1"></div>
              <div class="col-5" style="padding:0px">
                <div class="form-group">
                  <textarea
                    name="note-cat"
                    class="form-control"
                    id="note-of-category-add"
                    rows="7"
                    placeholder="Ghi chú"
                    v-model="note"
                  ></textarea>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </form>
      </template>
      <template v-slot:buttonModal>
        <i class="fas fa-sync mr-4" style="cursor: pointer"></i>
        <button type="button" class="btn btn-danger" data-dismiss="modal">
          <i class="far fa-trash-alt"></i> Hủy
        </button>
        <button type="submit" class="btn btn-primary">
          <i class="fas fa-save"></i> Lưu
        </button>
      </template>
    </Popup>
  </div>
</template>

<script>
import { popupcategory } from "../../../assets/js/mixin/popupcategory.js";

export default {
  mixins: [popupcategory],
  props: ["value"],
  methods: {
    checkForm(e) {
      e.preventDefault();
      console.log(this.checkExist(this.categories, this.name));
      this.errors = [];
      if (!this.name) {
        this.errors[0] = "Tên hạng mục không được để trống.";
        document.getElementById("name-form-add").focus();
        e.preventDefault();
      } else {
        if (this.checkExist(this.categories, this.name)) {
          this.errors[0] =
            "Hạng mục đã tồn tại. Vui lòng thay đổi tên hạng mục.";
          e.preventDefault();
        } else {
          return true;
        }
      }
    }
  }
};
// import a from '../../../assets/css/views/other/popupcategory/popup.scss'
</script>
<style lang="scss" scoped>
@import "../../../assets/css/views/other/popupcategory/popup.scss";
</style>