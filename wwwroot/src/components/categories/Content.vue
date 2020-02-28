<template>
  <div class="expense-tab shadow border">
    <ul v-for="(par, index) in categories" :key="index">
      <li class="cat-par">
        <ButtonCollapse :isOpen="isOpen" :parNote="'#a'+index"></ButtonCollapse>
        <a
          class="font-size-name-cat"
          data-toggle="modal"
          v-bind:data-target="[par.allowToEdit ? '#editCat' : '#warning']"
          href="#"
          @click="currentNameCat = par.name; isParentFunc(par)"
        >
          <i class="icon-category" v-bind:class="[par.icon]"></i>
          {{ par.name }}
          <i v-if="!par.allowToEdit" class="fas fa-lock"></i>
        </a>
      </li>
      <ul
        v-bind:id="'a'+index"
        class="collapse show"
        v-for="(child, indexChild) in par.children"
        :key="indexChild"
      >
        <li
          class="cat-child"
          v-if="removeAccents(child.name.toLowerCase()).includes(removeAccents(search))"
        >
          <a
            class="font-size-name-cat"
            data-toggle="modal"
            v-bind:data-target="'#editCat'"
            href="#"
            @click="currentNameCat = child.name; isParentFunc(child); parent = par.name"
          >
            <i class="icon-category" v-bind:class="[child.icon]" style="color: #B8312F"></i>
            {{child.name}}
          </a>
        </li>
      </ul>
    </ul>
    <EditCategory
      v-bind:modal="'editCat'"
      :nameCat="currentNameCat"
      :isParent="isParent"
      :currentTab="currentTab"
      :parent="parent"
    />
    <WarningPopUp v-bind:modal="'warning'" />
  </div>
</template>

<script>
import { categories } from "../../assets/js/categoriesdb.js";
import EditCategory from "../categories/popup/EditCategory.vue";
import ButtonCollapse from "./ButtonCollapse.vue";
import WarningPopUp from "../categories/popup/WarningPopUp.vue";

export default {
  props: ["currentTab", "search"],
  data: function() {
    return {
      isOpen: true,
      currentNameCat: "",
      parent: "",
      isParent: true
    };
  },
  computed: {
    categories() {
      var category = "";
      if (this.currentTab === "expenseTab") {
        category = categories.categoriesEx;
      } else {
        category = categories.categoriesIn;
      }
      if (this.search === "") {
        return category;
      } else {
        var search = this.removeAccents(this.search);
        // console.log("search:" + search);
        return category.filter(par => {
          var parentName = this.removeAccents(par.name.toLowerCase());
          // console.log("cha:" + parentName);
          if (par.children !== undefined) {
            return par.children.some(child => {
              var childName = this.removeAccents(child.name.toLowerCase());
              // console.log("con:" + childName);
              return childName.includes(search) || parentName.includes(search);
            });
          } else {
            return parentName.includes(search);
          }
        });
      }
    }
  },
  methods: {
    isParentFunc(itemCat) {
      if (itemCat.children) {
        this.isParent = true;
      } else {
        this.isParent = false;
      }
    },
    removeAccents(str) {
      var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "dđ",
        "eèẻẽéẹêềểễếệ",
        "iìỉĩíị",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "uùủũúụưừửữứự",
        "yỳỷỹýỵ"
      ];
      for (var i = 0; i < AccentsMap.length; i++) {
        var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
      }
      return str;
    }
  },
  components: {
    EditCategory,
    ButtonCollapse,
    WarningPopUp
  }
};
</script>

<style scoped lang="scss">
.cat-par {
  position: relative;
  .icon-category {
    color: #E66904;
  }
  .fa-lock {
    position: absolute;
    right: 100px;
    top: 17px;
    color: gray;
  }

  .collapse-button {
    position: absolute;
    left: 5px;
    top: 15px;
    color: gray;
    border-radius: 2px;
  }
}
</style>