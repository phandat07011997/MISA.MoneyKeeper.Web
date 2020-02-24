import IncomeExpenseCategoryClass from '../../assets/js/IncomeExpenseCategory'
export default {
	namespaced: true,
	state: {
		data: [],
	},
	mutations: {
		getAll(state) {

			var incomeExpenseCategory = new IncomeExpenseCategoryClass();

			incomeExpenseCategory.getAll().then(data => {
				return state.data = data;
			}).catch(err => {
				console.log(err)
			})
		}
	},
	actions: {
		getAll({ commit }) {
			commit("getAll");
		}
	}
};
