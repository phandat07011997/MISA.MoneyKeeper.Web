<template>
  <div class="add-cat-popup">
    <Popup v-bind:modal="modal">
      <template v-slot:headerExpense>
        <h4 class="modal-title">Thêm hạng mục</h4>
      </template>
      <template v-slot:contentModal>
        <form id="app" @submit="checkForm" action="#" method="post">
          <div class="modal-body">
            <div class="row">
              <div class="col-5">
                <label for="select-tab">Chọn hạng mục:</label>
                <select
                  name="select-tab"
                  class="custom-select mr-sm-2 choose-cat"
                  id="select-tab"
                  v-model="tab"
                >
                  <option value="expenseTab">Hạng mục chi</option>
                  <option value="incomeTab">Hạng mục thu</option>
                </select>
              </div>
              <div class="col-1">
                <i class="fas fa-question-circle" style="font-size:40px"></i>
              </div>
              <div class="col-6">
                <label for="name-cat">Tên hạng mục:</label>
                <input
                  name="name-cat"
                  type="text"
                  class="form-control"
                  id="name"
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
              <div class="col-3"></div>
              <div class="col-6">
                <label for="select-par-cat">Chọn hạng mục cha:</label>
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
                    v-model="note"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <slot name="buttonModal"></slot>
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              <i class="far fa-trash-alt"></i> Hủy
            </button>
            <button type="submit" class="btn btn-primary">
              <i class="fas fa-save"></i> Lưu
            </button>
          </div>
        </form>
      </template>
    </Popup>
  </div>
</template>

<script>
import Popup from "../../layout/Popup.vue";
import { categories } from "../../../assets/js/categoriesdb.js";
export default {
  props: ["modal"],
  components: {
    Popup
  },
  data() {
    return {
      errors: [],
      tab: "expenseTab",
      name: null,
      parentName: "none",
      note: null
    };
  },
  computed: {
    categories() {
      if (this.tab === "expenseTab") {
        return categories.categoriesEx;
      } else {
        return categories.categoriesIn;
      }
    }
  },
  methods: {
    checkExist(collection, name) {
      return collection.some(function(elem) {
        if (elem.childs === undefined) {
          return elem.name === name;
        } else {
          return elem.childs.some(function(elemChild) {
            return elem.name === name || elemChild.name === name;
          });
        }
      });
    },

    checkForm(e) {
      e.preventDefault();
      console.log(this.checkExist(this.categories, this.name));
      this.errors = [];
      if (!this.name) {
        this.errors[0] = "Tên hạng mục không được để trống.";
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
</script>
<style lang="scss" scoped>
.add-cat-popup {
  .fa-question-circle {
    font-size: 40px;
    margin-top: 25px;
  }
  .modal-body {
    label {
      font-weight: bold;
    }
  }
  .error {
    color: red;
  }
}
</style>