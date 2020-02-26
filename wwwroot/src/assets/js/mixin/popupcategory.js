
import Popup from "../../../components/layout/Popup.vue";
import { categories } from "../../js/categoriesdb.js";
export const popupcategory = {
    props: ["modal", "currentTab"],
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
    methods: {
        checkExist(collection, name) {
            return collection.some(function (elem) {
                if (elem.childs === undefined) {
                    return elem.name === name;
                } else {
                    return elem.childs.some(function (elemChild) {
                        return elem.name === name || elemChild.name === name;
                    });
                }
            });
        }
    },
    components: {
      Popup
    }
}