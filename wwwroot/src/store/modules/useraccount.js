import UserAccountClass from '../../assets/js/UserAccount'
export default {
	namespaced: true,
	state: {
		data: [],
	},
	mutations: {
		getAll(state) {
			var userAccount = new UserAccountClass();

			userAccount.getAll().then(data => {
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
