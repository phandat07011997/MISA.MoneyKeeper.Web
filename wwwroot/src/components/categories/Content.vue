<template>
  <div class="expense-tab">
    <ul v-for="(par, index) in categories" :key="index">
      <li class="cat-par">
        <ButtonCollapse :isOpen="isOpen" :parNote="par.note"></ButtonCollapse>
        <a
          class="font-size-name-cat"
          data-toggle="modal"
          v-bind:data-target="[par.allowToEdit ? '#editCat' : '#warning']"
          href="#"
          @click="currentNameCat = par.name; isParentFunc(par)"
        >
          <i v-bind:class="[par.icon]"></i>
          {{ par.name }}
          <i v-if="!par.allowToEdit" class="fas fa-lock"></i>
        </a>
      </li>
      <ul
        v-bind:id="par.note1"
        class="collapse show"
        v-for="(child, index) in par.childs"
        :key="index"
      >
        <li class="cat-child">
          <a
            class="font-size-name-cat"
            data-toggle="modal"
            v-bind:data-target="'#editCat'"
            href="#"
            @click="currentNameCat = child.name; isParentFunc(child); parent = par.name"
          >
            <i v-bind:class="[child.icon]"></i>
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
  props: ["currentTab"],
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
      if (this.currentTab === "expenseTab") {
        return categories.categoriesEx;
      } else {
        return categories.categoriesIn;
      }
    }
  },
  methods: {
    isParentFunc(itemCat) {
      if (itemCat.childs) {
        this.isParent = true;
      } else {
        this.isParent = false;
      }
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