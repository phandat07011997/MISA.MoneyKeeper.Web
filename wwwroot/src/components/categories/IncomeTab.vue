<template>
  <div class="income-tab">
    <ul v-for="(par, index) in categories.categoriesIn" :key="index">
      <li class="cat-par">
        <ButtonCollapse :isOpen="isOpen" :parNote="par.note"></ButtonCollapse>
        <a
          class="font-size-name-cat"
          data-toggle="modal"
          v-bind:data-target="[par.allowToEdit ? '#editCat' : '#warning']"
          href="#"
          @click="currentNameCat = par.name; isParent = true"
        >
          <i v-bind:class="[par.icon]"></i>
          {{ par.name }}
          <i v-if="!par.allowToEdit" class="fas fa-lock"></i>
        </a>
      </li>
      <!-- <ul
        v-bind:id="par.note1"
        class="cat-child collapse"
        v-for="child in par.childs"
        :key="child.id"
      >
        <li>
          <a href="#" >
            <i v-bind:class="[child.icon]"></i>
            {{child.name}}
          </a>
        </li>
      </ul>-->
    </ul>
    <EditCategory v-bind:modal="'editCat'" :nameCat="currentNameCat" :isParent="isParent" :currentTab="'incomeTab'" />
    <WarningPopUp v-bind:modal="'warning'" />
  </div>
</template>

<script>
import { categories } from "../../assets/js/categoriesdb.js";
import EditCategory from "../categories/popup/EditCategory.vue";
import WarningPopUp from "../categories/popup/WarningPopUp.vue"
import ButtonCollapse from "./ButtonCollapse.vue";
export default {
  name: "incomeTab",
  data: function() {
    return {
      listParentCategories: [
        { name: "Ăn uống", id: 1, icon: "fas fa-money-bill-wave" },
        { name: "Sinh hoạt", id: 2 },
        { name: "Con cái", id: 3 },
        { name: "Đi lại", id: 4 }
      ],
      categories: categories,
      currentNameCat: "",
      isParent: true,
      isOpen: true,
    };
  },
  components: {
    EditCategory,
    ButtonCollapse,
    WarningPopUp
  }
};
</script>
<style lang="scss" scoped>
.cat-par {
  position: relative;
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