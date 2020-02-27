
import TransactionClass from '../../assets/js/transaction'
import { isOneDay } from '../../assets/js/util'
import axios from 'axios'
export default {
    namespaced: true,
    state: {
        totalIncome: 0,
        totalExpense : 0,
        data: [],
        dataDate: [],
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
            // console.log(typeof (state.dataDate));
            transactionClass.getAll().then(data => {
                return state.data = Object.values(data);
            }).catch(err => {
                console.log(err)
            })
            state.dataDate = [];
            state.totalIncome = 0;
            state.totalExpense = 0;
            transactionClass.getDate().then(dat => {
                for (var item in dat) {
                    var incometmp = 0;
                    var expensetmp = 0;
                    for (var aData in state.data) {
                        let time = new Date (state.data[aData].IsoTransactionDate);
                        let aTime = new Date(dat[item].Date);
                        if (isOneDay(time, aTime)) {
                            if (state.data[aData].Amount > 0) {
                                incometmp += state.data[aData].Amount;
                                
                            }
                            else {
                                expensetmp += state.data[aData].Amount;
                                
                            } 
                            }
                    }
                    state.totalIncome += Number (incometmp);
                    state.totalExpense += Number( expensetmp);
                    var tmp = { date: new Date(dat[item].Date), income: incometmp, expense: expensetmp };
                    //console.log(tmp);
                    if (tmp.date != 'Invalid Date') state.dataDate.push(tmp);
                }
                console.log(state.dataDate);
                state.dataDate.sort((a, b) => {
                    if (a.date.getFullYear() != b.date.getFullYear()) return b.date.getFullYear() - a.date.getFullYear();
                    else if (a.date.getMonth() != b.date.getMonth()) return b.date.getMonth() - a.date.getMonth();
                    else return b.date.getDate() - a.date.getDate();
                });                
                
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
        },

        async synchronize() {

            var transactionClass = new TransactionClass();
            var dataArr = [];
            transactionClass.getSync().then(data => {
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

                return axios.post('http://localhost:8080/Services/FinanceService.svc/json/SynchronizeData', dataBlock);
            }).catch(err => {
                console.log(err)
            })

            
        }
    }
};
 