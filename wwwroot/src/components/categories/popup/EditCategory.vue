<template>
  <div class="edit-cat-popup">
    <Popup v-bind:modal="modal">
      <template v-slot:headerExpense>
        <div class="modal-title">Sửa hạng mục {{ currentTab === 'expenseTab' ? 'chi' : 'thu' }}</div>
      </template>
      <template v-slot:contentModal>
        <form id="form-edit-category" @submit="checkForm" action="#" method="post">
          <div class="modal-body">
            <div class="row">
              <div class="col-1">
                <i
                  class="fas fa-question-circle"
                  style="font-size:40px; color:#F5C701; margin-top:20px"
                ></i>
              </div>

              <div class="col-4 widget name-wrapper">
                <label for="name-cat">Tên hạng mục:</label>
                <input
                  name="name-cat"
                  type="text"
                  class="form-control"
                  id="name-form-edit"
                  placeholder="Tên hạng mục"
                  v-model="name"
                  maxlength="160"
                />
                <i class="error">{{ errors[0] }}</i>
              </div>
              <div class="col-6 widget" v-if="!isParent">
                <label for="select-cat-par">Hạng mục cha:</label>
                <select
                  name="select-cat-par"
                  class="custom-select mr-sm-2 choose-cat"
                  id="select-cat-par"
                  :value="[currentTab === 'expenseTab' ? parent : 'none']"
                >
                  <option value="none">(Không chọn)</option>
                  <option v-for="(cat, index) in categories" :key="index" :value="cat.name">
                    <!-- <i class="icon-category" v-bind:class="[par.icon]"></i> -->
                    {{ cat.name }}
                  </option>
                </select>
              </div>
              <div class="col-1"></div>
            </div>
            <br />
            <br />

            <div class="row">
              <div class="col-1"></div>
              <div class="col-10 input-note">
                <div class="form-group">
                  <textarea
                    name="note-cat"
                    class="form-control"
                    id="note-of-category-edit"
                    rows="7"
                    placeholder="Ghi chú"
                    v-model="note"
                  ></textarea>
                </div>
              </div>
              <div class="col-1" style="padding:0px"></div>
            </div>
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
  props: ["nameCat", "isParent", "parent"],
  watch: {
    nameCat: function() {
      this.nameProxy = null;
      this.errors = [];
      // console.log("Prop changed: ", newVal, " | was: ", oldVal);
    }
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
      // console.log(this.checkExist(this.categories, this.name));
      this.errors = [];
      if (!this.name) {
        this.errors[0] = "Tên hạng mục không được để trống.";
        document.getElementById("name-form-edit").focus();
        e.preventDefault();
      } else {
        if (this.name !== this.nameCat) {
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
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/views/other/popupcategory/popup.scss";
</style>