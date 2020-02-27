var db = openDatabase('MoneyKeeperDB', '1.0', 'Demo for sqlite web', 5 * 1024 * 1024);

export default class UserInfoDataClass {
    constructor() {
        this.data = null
    }
    getUserInfoData() {
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql("SELECT * FROM UserInfoData", [], (transaction, result) => {
                    var data = result.rows.item(0);
                    resolve(data)
                },
                    (transaction, error) => {
                        reject(error)
                    }
                );
            });
        })

    }

    
}

