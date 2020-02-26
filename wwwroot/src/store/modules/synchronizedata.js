import axios from "axios";
export default {
    namespaced: true,
    state: {

    },
    mutations: {
        
    },
    actions: {
        synchronizeTransactionData({ commit },data) {
            var userId = "ac1118ab-d601-43a4-8336-2369c8c2de04";
            var uuidDevice = "null";
            console.log(commit)
            var sendData = {
                "userId": userId,
                "uuidDevice": uuidDevice,
                "synchronizeData": {
                    "financeTransaction": {
                        "DeletedFinanceTransactionList": [],
                        "NewAndEditedFinanceTransactionList": [data]
                    }
                }
            }
            return new Promise((res, rej) => {
                axios
                    .post("http://localhost:8080/Services/FinanceService.svc/json/SynchronizeData", sendData)
                    .then(function (response) {
                        return res(response);
                    })
                    .catch(function (error) {
                        return rej(error);
                    });
            })

        },
    }
};
