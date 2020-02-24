import TransactionClass from '../../assets/js/transaction'
export default {
    namespaced: true,
    state: {
        data: [],
    },
    mutations: {
        getAll(state) {

            var transactionClass = new TransactionClass();

            transactionClass.getAll().then(data => {
                return state.data = data;
            }).catch(err => {
                console.log(err)
            })
        },

        create(state, payload) {
            var transactionClass = new TransactionClass();
            transactionClass.create(payload);
        },

        update(state, payload) {
            var transactionClass = new TransactionClass();
            transactionClass.update(payload);
        },
        delete(state, payload) {
            var transactionClass = new TransactionClass();
            transactionClass.delete(payload);
        },
    },
    actions: {
        getAll({ commit }) {
            commit('getAll');
        },
        create({ commit }, item) {
            commit("create", item);
            commit('getAll');
        },
        update({ commit }, item) {
            commit("update", item);
            commit('getAll');
        },
        delete({ commit }, item) {
            commit("delete", item);
            commit('getAll');
        }
    }
};
