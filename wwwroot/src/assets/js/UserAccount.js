﻿var db = openDatabase('MoneyKeeperDB', '1.0', 'Demo for sqlite web', 5 * 1024 * 1024);

export default class UserAccountClass {
    constructor() {
        this.data = null
    }
    getAll() {
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql("SELECT * FROM UserAccount", [], (transaction, result) => {
                    var data = result.rows;
                    resolve(data)
                },
                    (transaction, error) => {
                        reject(error)
                    }
                );
            });
        })

    }

    create(ele) {
        db.transaction((tx) => {
            tx.executeSql("INSERT INTO FinanceTransaction(TransactionID, AccountID, Address, Amount, ClosingAmount, Description, EventName, FCAmount, Following, Giver, ImageAttachName, IncomeExpenseCategoryID, IsFavorite, IsoDebitDate, IsoTransactionDate, Latitude, Longitude, Payee, RelatedPerson, RelationshipID, SortOrder, ToAccountID, TransactionType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [ele.TransactionID, ele.AccountID, ele.Address, ele.Amount, ele.ClosingAmount, ele.Description, ele.EventName, ele.FCAmount, ele.Following, ele.Giver, ele.ImageAttachName, ele.IncomeExpenseCategoryID, ele.IsFavorite, ele.IsoDebitDate, ele.IsoTransactionDate, ele.Latitude, ele.Longitude, ele.Payee, ele.RelatedPerson, ele.RelationshipID, ele.SortOrder, ele.ToAccountID, ele.TransactionType], (transaction, result) => {

                console.log(result)
            },
                (transaction, error) => {
                    console.log(error)
                }
            );
        });
    }

    delete(id) {
        db.transaction((tx) => {
            tx.executeSql("DELETE FROM FinanceTransaction WHERE TransactionID = ?", [id], (transaction, result) => {

                console.log(result)
            },
                (transaction, error) => {
                    console.log(error)
                }
            );
        });
    }

    update(ele) {
        db.transaction((tx) => {
            tx.executeSql("UPDATE FinanceTransaction SET AccountID = ?, Address = ?, Amount = ?, ClosingAmount = ?, Description = ?, EventName = ?, FCAmount = ?, Following = ?, Giver = ?, ImageAttachName = ?, IncomeExpenseCategoryID = ?, IsFavorite = ?, IsoDebitDate = ?, IsoTransactionDate = ?, Latitude = ?, Longitude = ?, Payee = ?, RelatedPerson = ?, RelationshipID = ?, SortOrder = ?, ToAccountID = ?, TransactionType = ? WHERE TransactionID = ?", [ele.AccountID, ele.Address, ele.Amount, ele.ClosingAmount, ele.Description, ele.EventName, ele.FCAmount, ele.Following, ele.Giver, ele.ImageAttachName, ele.IncomeExpenseCategoryID, ele.IsFavorite, ele.IsoDebitDate, ele.IsoTransactionDate, ele.Latitude, ele.Longitude, ele.Payee, ele.RelatedPerson, ele.RelationshipID, ele.SortOrder, ele.ToAccountID, ele.TransactionType, ele.TransactionID], (transaction, result) => {
                console.log(result)
            },
                (transaction, error) => {
                    console.log(error)
                }
            );
        });
    }
}

