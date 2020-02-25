import TransactionClass from '../../assets/js/transaction'
import axios from 'axios'
export default {
    namespaced: true,
    state: {
        data: [],
        transactionType: [
            {
                key: 1, name: 'Chi tiền',
            },
            {
                key: 2, name: 'Thu tiền',
            },
            {
                key: 3, name: 'Cho vay',
            },
            {
                key: 4, name: 'Đi vay',
            },
        ],
        syncData: [],
        message: null
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

        notify(state, payload) {
            return state.message = payload;
        }
    },
    actions: {
        getAll({ commit }) {
            commit('getAll');
        },

        async create({ commit }, item) {
            await commit("create", item);
            await commit('getAll');
        },

        update({ commit }, item) {
            commit("update", item);
            commit('getAll');
        },

        delete({ commit }, item) {
            commit("delete", item);
            commit('getAll');
        },

        async getSyncData({ state }) {
            var transactionClass = new TransactionClass();

            transactionClass.getSync().then(data => {
                return state.syncData = data;
            }).catch(err => {
                console.log(err)
            })
        },

        synchronize({ commit, }) {

            var transactionClass = new TransactionClass();

            transactionClass.getSync().then(data => {
                console.log(data)
                var dataArr = [];

                for (var item = 0; item < data.length; item++) {
                    var obj = {};

                    if (item != 0) {
                        obj.TransactionID = data[item].TransactionID,
                        obj.AccountID = data[item].AccountID,
                        obj.Address = data[item].Address,
                        obj.Amount = data[item].Amount,
                        obj.ClosingAmount = data[item].ClosingAmount,
                        obj.Description = data[item].Description,
                        obj.EventName = data[item].EventName,
                        obj.FCAmount = data[item].FCAmount,
                        obj.Following = true,
                        obj.Giver = data[item].Giver,
                        obj.ImageAttachName = null,
                        obj.IncomeExpenseCategoryID = data[item].IncomeExpenseCategoryID,
                        obj.IsFavorite = false,
                        //obj.IsoDebitDate = data[item].IsoDebitDate,
                        //obj.IsoTransactionDate = data[item].IsoTransactionDate,

                        obj.IsoDebitDate = "01/01/1753 12:00:00 AM",
                        obj.IsoTransactionDate = "11/08/2019 08:22:45 AM",

                        obj.Latitude = data[item].Latitude,
                        obj.Longitude = data[item].Longitude,
                        obj.Payee = data[item].Payee,
                        obj.RelatedPerson = null,
                        obj.RelationshipID = null,
                        obj.SortOrder = data[item].SortOrder,
                        obj.ToAccountID = null,
                        obj.TransactionType = data[item].TransactionType,

                        dataArr.push(obj);
                    }
                }

                var dataBlock = {
                    "userId": "ac1118ab-d601-43a4-8336-2369c8c2de04",
                    "uuidDevice": "",
                    "synchronizeData": {
                        "financeTransaction": {
                            "DeletedFinanceTransactionList": [],
                            "NewAndEditedFinanceTransactionList": dataArr
                        }
                    }
                }

                console.log(dataBlock)
                axios.post('http://localhost:8080/Services/FinanceService.svc/json/SynchronizeData', dataBlock)
                    .then((res) => {
                        console.log(res);
                        commit('notify', 'Đồng bộ thành công')
                    })
                    .catch( (err) => {
                        console.log(err);
                        commit('notify', 'Đồng bộ thất bại')
                    });
            }).catch(err => {
                console.log(err)
            })
            
        }
    }
};
