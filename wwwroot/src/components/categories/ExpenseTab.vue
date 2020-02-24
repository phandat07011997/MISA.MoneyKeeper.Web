<template>
  <div class="expense-tab">
    <ul v-for="par in categories.categoriesEx" :key="par.id">
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
      <ul v-bind:id="par.note1" class="collapse show" v-for="child in par.childs" :key="child.id">
        <li class="cat-child">
          <a
            class="font-size-name-cat"
            data-toggle="modal"
            v-bind:data-target="'#editCat'"
            href="#"
            @click="currentNameCat = child.name; isParent = false"
          >
            <i v-bind:class="[child.icon]"></i>
            {{child.name}}
          </a>
        </li>
      </ul>
    </ul>
    <EditCategory v-bind:modal="'editCat'" :nameCat="currentNameCat" :isParent="isParent" :currentTab="'expenseTab'" />
    <WarningPopUp v-bind:modal="'warning'" />
  </div>
</template>

<script>
import { categories } from "../../assets/js/categoriesdb.js";
import EditCategory from "../categories/popup/EditCategory.vue";
import ButtonCollapse from "./ButtonCollapse.vue";
import WarningPopUp from "../categories/popup/WarningPopUp.vue"

export default {
  data: function() {
    return {
      categories: categories,
      isOpen: true,
      currentNameCat: "",
      isParent: false
    };
  },
  components: {
    EditCategory,
    ButtonCollapse,
    WarningPopUp
  }
};
</script>

<style scoped lang="scss">
.expense-tab {
  .cat-child {
    margin-left: 30px;
  }
}
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