import axios from 'axios'
import SyncClass from '../../assets/js/sync'

export default {
	namespaced: true,
	state: {
		data: null,
	},
	mutations: {
		createDatabase(state, data) {
			console.log(state)
			var syncClass = new SyncClass();
			syncClass.createDatabase(data);
		},
	},
	actions: {
		login( ) {
			return axios.post('http://localhost:8080/AuthenticationService.svc/json/login', { "username": "truonglv@gmail.com", "password": "12345678" });
		},

		getData() {
			const data = { "synchronizeObjectParam": { "userId": "ac1118ab-d601-43a4-8336-2369c8c2de04", "IsoLastSynchronizeDateTime": "", "uuidDevice": "", "syncLoadType": 2 } };
			return axios.post('http://localhost:8080/Services/FinanceService.svc/json/GetLastestSynchronizeData', data);
		},

		create({ commit }, data) {
			commit('createDatabase', data);
		}
	}
};
