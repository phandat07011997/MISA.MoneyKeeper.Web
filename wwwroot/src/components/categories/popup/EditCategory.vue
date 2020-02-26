<template>
  <div class="edit-cat-popup">
    <Popup v-bind:modal="modal">
      <template v-slot:headerExpense>
        <h4 class="modal-title">Sửa hạng mục {{ currentTab === 'expenseTab' ? 'chi' : 'thu' }}</h4>
      </template>
      <template v-slot:contentModal>
        <form id="app" @submit="checkForm" action="#" method="post">
          <div class="modal-body">
            <div class="row">
              <div class="col-1">
                <i class="fas fa-question-circle"></i>
              </div>
              <div class="col-5">
                <label for="name-cat">Tên hạng mục:</label>
                <input
                  name="name-cat"
                  type="text"
                  class="form-control"
                  placeholder="Tên hạng mục"
                  v-model="name"
                  maxlength="160"
                />
                <i class="error">{{ errors[0] }}</i>
              </div>
              <div class="col-6" v-if="!isParent">
                <label for="select-cat-par">Chọn hạng mục cha:</label>
                <select
                  name="select-cat-par"
                  class="custom-select mr-sm-2 choose-cat"
                  id="select-cat-par"
                  :value="[currentTab === 'expenseTab' ? parent : 'none']"
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
  props: ["modal", "nameCat", "isParent", "currentTab", "parent"],
  data() {
    return {
      errors: [],
      nameProxy: null,
      parentName: "none",
      note: null
    };
  },
  computed: {
    categories() {
      if (this.currentTab === "expenseTab") {
        return categories.categoriesEx;
      } else {
        return categories.categoriesIn;
      }
    },
    name: {
      get() {
        return this.nameProxy === null
          ? this.nameCat
          : this.nameProxy;
      },
      set(val) {
        this.nameProxy = val;
      }
    }
  },
  watch: {
    nameCat: function(newVal, oldVal) {
      this.nameProxy = null
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
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
      // console.log(this.checkExist(this.categories, this.name));
      this.errors = [];
      if (!this.name) {
        this.errors[0] = "Tên hạng mục không được để trống.";
        e.preventDefault();
      } else { 
        if(this.name !== this.nameCat){
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
  },
  components: {
    Popup
  }
};
</script>

<style lang="scss" scoped>
.edit-cat-popup {
  .fa-question-circle {
    font-size: 40px;
    margin-top: 25px;
  }
  .modal-body {
    label {
      font-weight: bold;
    }
    .error {
      color: red;
    }
  }
}
</style>