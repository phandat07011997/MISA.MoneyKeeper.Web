import axios from "axios";
export default {
    namespaced: true,
    state: {
        
    },
    mutations: {
        synchronizeTransactionData(state, payload) {
            var userId = "ac1118ab-d601-43a4-8336-2369c8c2de04";
            var uuidDevice = "null";
            
            var sendData = {
                "userId": userId,
                "uuidDevice": uuidDevice,
                "synchronizeData": {
                    "financeTransaction": {
                        "DeletedFinanceTransactionList": [],
                        "NewAndEditedFinanceTransactionList": [payload]
                    }
                }
            }
            axios
                .post("http://localhost:8080/Services/FinanceService.svc/json/SynchronizeData", sendData)
                .then(function (response) {
                    var res = JSON.parse(response.request.responseText)
                    if (res.resultMessage == 'Success') {
                        console.log("Đồng bộ thành công");
                        return true;
                    }
                    else {
                        return false;
                    }
                })
                .catch(function (error) {
                    alert(error);
                });
        }
    },
    actions: {
        synchronizeTransactionData({ commit },item) {
            commit('synchronizeTransactionData',item);
        },
    }
};
