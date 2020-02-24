var db = openDatabase('MoneyKeeperDB', '1.0', 'Demo for sqlite web', 5 * 1024 * 1024);

//var UserAccount = [
//    {
//        "AccountCategoryID": 0,
//        "AccountCurrentBalance": 0,
//        "AccountDescription": "",
//        "AccountID": "1b1b7ee4-9506-4a6b-899a-d17b4244ef7f",
//        "AccountInitialBalance": 2000000.0000,
//        "AccountName": "Ví tiền mặt",
//        "AccountSortingOrder": 1,
//        "BankName": null,
//        "CreditCardIsReminder": false,
//        "CreditCardListRemindValue": null,
//        "CreditCardPaymentDay": 0,
//        "CreditLine": 0.0000,
//        "CurrencyCode": "VND",
//        "CurrencyType": "en-US",
//        "DictionaryKey": 0,
//        "DueType": 0,
//        "ExcludeReport": false,
//        "IconName": null,
//        "Inactive": false,
//        "InterestPaymentAccount": null,
//        "InterestPaymentType": 0,
//        "InterestRate": 0.0000,
//        "IsAutoRenew": false,
//        "IsCreatRecurring": false,
//        "IsFinalize": false,
//        "IsSystem": false,
//        "IsoCreateDate": "01/01/1753 12:00:00 AM",
//        "IsoEndDate": "01/01/1753 12:00:00 AM",
//        "IsoFinalizeDate": "01/01/1753 12:00:00 AM",
//        "IsoLastExcuteDate": "01/01/1753 12:00:00 AM",
//        "IsoRecordTime": "01/01/1753 12:00:00 AM",
//        "IsoStartDate": "01/01/1753 12:00:00 AM",
//        "ListOtherValue": null,
//        "ListTransactionInterestPayment": null,
//        "MinInterestRate": 0.0000,
//        "RangeType": 0,
//        "RecurringAmount": 0.0000,
//        "RecurringFromAccount": null,
//        "RecurringType": 0,
//        "SavingFromAccount": null,
//        "TermMonth": 0,
//        "TermType": 0
//    }
//];

//var AccountCategory = [
//    {
//        "AccountCategoryID": 0,
//        "AccountCategoryName": "Tiền mặt",
//        "AccountCategoryIcon": "https://static.moneylover.me/img/icon/icon_136.png",
//    },
//    {
//        "AccountCategoryID": 1,
//        "AccountCategoryName": "Ví điện tử",
//        "AccountCategoryIcon": "https://static.moneylover.me/img/icon/icon_136.png",
//    }
//]

//var FinanceTransaction = [
//    {
//        "AccountID": "1b1b7ee4-9506-4a6b-899a-d17b4244ef7f",
//        "Address": "",
//        "Amount": 1000000.0000,
//        "ClosingAmount": 0.0000,
//        "Description": "",
//        "EventName": "",
//        "FCAmount": 0.0000,
//        "Following": true,
//        "Giver": "",
//        "ImageAttachName": null,
//        "IncomeExpenseCategoryID": "f26e6435-398c-4944-a1c7-ffaeaff9fa09",
//        "IsFavorite": false,
//        "IsoDebitDate": "01/01/1753 12:00:00 AM",
//        "IsoTransactionDate": "11/08/2019 08:22:45 AM",
//        "Latitude": 0,
//        "Longitude": 0,
//        "Payee": "",
//        "RelatedPerson": null,
//        "RelationshipID": null,
//        "SortOrder": 0,
//        "ToAccountID": null,
//        "TransactionID": "1ba5a94a-0ba6-4e65-b003-77520138b693",
//        "TransactionType": 1
//    },
//    {
//        "AccountID": "1b1b7ee4-9506-4a6b-899a-d17b4244ef7f",
//        "Address": "",
//        "Amount": -2000000.0000,
//        "ClosingAmount": 0.0000,
//        "Description": "Cho Đông vay",
//        "EventName": "",
//        "FCAmount": 0.0000,
//        "Following": true,
//        "Giver": "",
//        "ImageAttachName": "",
//        "IncomeExpenseCategoryID": "f26e6435-398c-4944-a1c7-ffaeaff9fa09",
//        "IsFavorite": false,
//        "IsoDebitDate": "12/06/2019 08:24:38 AM",
//        "IsoTransactionDate": "11/08/2019 08:24:18 AM",
//        "Latitude": 0,
//        "Longitude": 0,
//        "Payee": "",
//        "RelatedPerson": "Đông",
//        "RelationshipID": null,
//        "SortOrder": 0,
//        "ToAccountID": null,
//        "TransactionID": "c081d77a-8ebd-49c6-82b2-d7fdf1d34f06",
//        "TransactionType": 0
//    },
//    {
//        "AccountID": "1b1b7ee4-9506-4a6b-899a-d17b4244ef7f",
//        "Address": "",
//        "Amount": 500000.0000,
//        "ClosingAmount": 0.0000,
//        "Description": "Vay f88",
//        "EventName": "",
//        "FCAmount": 0.0000,
//        "Following": true,
//        "Giver": "",
//        "ImageAttachName": "",
//        "IncomeExpenseCategoryID": "f26e6435-398c-4944-a1c7-ffaeaff9fa09",
//        "IsFavorite": false,
//        "IsoDebitDate": "11/22/2019 08:25:12 AM",
//        "IsoTransactionDate": "11/08/2019 08:24:55 AM",
//        "Latitude": 0,
//        "Longitude": 0,
//        "Payee": "",
//        "RelatedPerson": "f88",
//        "RelationshipID": null,
//        "SortOrder": 0,
//        "ToAccountID": null,
//        "TransactionID": "545eb260-4ead-48ca-b323-f2738237a245",
//        "TransactionType": 1
//    },
//    {
//        "AccountID": "1b1b7ee4-9506-4a6b-899a-d17b4244ef7f",
//        "Address": "",
//        "Amount": -100000.0000,
//        "ClosingAmount": 0.0000,
//        "Description": "Ăn tối",
//        "EventName": "",
//        "FCAmount": 0.0000,
//        "Following": true,
//        "Giver": "",
//        "ImageAttachName": "",
//        "IncomeExpenseCategoryID": "f26e6435-398c-4944-a1c7-ffaeaff9fa09",
//        "IsFavorite": false,
//        "IsoDebitDate": "01/01/1753 12:00:00 AM",
//        "IsoTransactionDate": "11/08/2019 08:25:29 AM",
//        "Latitude": 0,
//        "Longitude": 0,
//        "Payee": "",
//        "RelatedPerson": null,
//        "RelationshipID": null,
//        "SortOrder": 0,
//        "ToAccountID": null,
//        "TransactionID": "e1c5a94f-a5c4-4c9e-816f-f25b475c0c7b",
//        "TransactionType": 0
//    },
//    {
//        "AccountID": "1b1b7ee4-9506-4a6b-899a-d17b4244ef7f",
//        "Address": "",
//        "Amount": 5000000.0000,
//        "ClosingAmount": 0.0000,
//        "Description": "Lương t10",
//        "EventName": "",
//        "FCAmount": 0.0000,
//        "Following": true,
//        "Giver": "",
//        "ImageAttachName": "",
//        "IncomeExpenseCategoryID": "f26e6435-398c-4944-a1c7-ffaeaff9fa09",
//        "IsFavorite": false,
//        "IsoDebitDate": "01/01/1753 12:00:00 AM",
//        "IsoTransactionDate": "11/08/2019 08:25:53 AM",
//        "Latitude": 0,
//        "Longitude": 0,
//        "Payee": "",
//        "RelatedPerson": null,
//        "RelationshipID": null,
//        "SortOrder": 0,
//        "ToAccountID": null,
//        "TransactionID": "87bd378f-75d2-4afd-ba39-48ae80d5956f",
//        "TransactionType": 1
//    },
//    {
//        "AccountID": "1b1b7ee4-9506-4a6b-899a-d17b4244ef7f",
//        "Address": "",
//        "Amount": -200000.0000,
//        "ClosingAmount": 0.0000,
//        "Description": "Quà sinh nhật",
//        "EventName": "",
//        "FCAmount": 0.0000,
//        "Following": true,
//        "Giver": "",
//        "ImageAttachName": "",
//        "IncomeExpenseCategoryID": "f26e6435-398c-4944-a1c7-ffaeaff9fa09",
//        "IsFavorite": false,
//        "IsoDebitDate": "01/01/1753 12:00:00 AM",
//        "IsoTransactionDate": "11/08/2019 08:26:15 AM",
//        "Latitude": 0,
//        "Longitude": 0,
//        "Payee": "",
//        "RelatedPerson": null,
//        "RelationshipID": null,
//        "SortOrder": 0,
//        "ToAccountID": null,
//        "TransactionID": "1169aa09-1143-428d-8fdc-c949bdcb7b58",
//        "TransactionType": 0
//    },
//];

//var IncomeExpenseCategory = [
//    {
//        "IncomeExpenseCategoryID": "f26e6435-398c-4944-a1c7-ffaeaff9fa09",
//        "IncomeExpenseCategoryName": "Ăn chơi",
//        "IncomeExpenseCategoryIcon": "https://static.moneylover.me/img/icon/icon_136.png",
//    },
//    {
//        "IncomeExpenseCategoryID": "f26e6435-398c-4944-a1c7-ffaeaff9fa10",
//        "IncomeExpenseCategoryName": "Ăn uống",
//        "IncomeExpenseCategoryIcon": "https://static.moneylover.me/img/icon/icon_136.png",
//    },
//    {
//        "IncomeExpenseCategoryID": "f26e6435-398c-4944-a1c7-ffaeaff9fa11",
//        "IncomeExpenseCategoryName": "Ăn mặc",
//        "IncomeExpenseCategoryIcon": "https://static.moneylover.me/img/icon/icon_136.png",
//    },
//];
    
//export class DataBase {
//    constructor() {
//        this.init();
//    }
//    init() {
//        db.transaction(function (tx) {

//            //IncomeExpenseCategory table
//            tx.executeSql("CREATE TABLE IF NOT EXISTS IncomeExpenseCategory(IncomeExpenseCategoryID unique, IncomeExpenseCategoryName, IncomeExpenseCategoryIcon)");

//            IncomeExpenseCategory.forEach(ele => {
//                tx.executeSql("INSERT INTO IncomeExpenseCategory(IncomeExpenseCategoryID, IncomeExpenseCategoryName, IncomeExpenseCategoryIcon) VALUES (?, ?, ?)", [ele.IncomeExpenseCategoryID, ele.IncomeExpenseCategoryName, ele.IncomeExpenseCategoryIcon]);
//            })

//            //AccountCategory table
//            tx.executeSql("CREATE TABLE IF NOT EXISTS AccountCategory(AccountCategoryID unique, AccountCategoryName, AccountCategoryIcon)");

//            AccountCategory.forEach(ele => {
//                tx.executeSql("INSERT INTO AccountCategory(AccountCategoryID, AccountCategoryName, AccountCategoryIcon) VALUES (?, ?, ?)", [ele.AccountCategoryID, ele.AccountCategoryName, ele.AccountCategoryIcon]);
//            })

//            //UserAccount table
//            tx.executeSql("CREATE TABLE IF NOT EXISTS UserAccount(AccountID unique, AccountCategoryID, AccountCurrentBalance, AccountDescription, AccountInitialBalance, AccountName, AccountSortingOrder, BankName, CreditCardIsReminder, CreditCardListRemindValue, CreditCardPaymentDay, CreditLine, CurrencyCode, CurrencyType, DictionaryKey, DueType, ExcludeReport, IconName, Inactive, InterestPaymentAccount, InterestPaymentType, InterestRate, IsAutoRenew, IsCreatRecurring, IsFinalize, IsSystem, IsoCreateDate, IsoEndDate, IsoFinalizeDate, IsoLastExcuteDate, IsoRecordTime, IsoStartDate, ListOtherValue, ListTransactionInterestPayment, MinInterestRate, RangeType, RecurringAmount, RecurringFromAccount, RecurringType, SavingFromAccount, TermMonth, TermType)");

//            UserAccount.forEach(ele => {
//                tx.executeSql("INSERT INTO UserAccount (AccountID, AccountCategoryID, AccountCurrentBalance, AccountDescription, AccountInitialBalance, AccountName, AccountSortingOrder, BankName, CreditCardIsReminder, CreditCardListRemindValue, CreditCardPaymentDay, CreditLine, CurrencyCode, CurrencyType, DictionaryKey, DueType, ExcludeReport, IconName, Inactive, InterestPaymentAccount, InterestPaymentType, InterestRate, IsAutoRenew, IsCreatRecurring, IsFinalize, IsSystem, IsoCreateDate, IsoEndDate, IsoFinalizeDate, IsoLastExcuteDate, IsoRecordTime, IsoStartDate, ListOtherValue, ListTransactionInterestPayment, MinInterestRate, RangeType, RecurringAmount, RecurringFromAccount, RecurringType, SavingFromAccount, TermMonth, TermType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [ele.AccountID, ele.AccountCategoryID, ele.AccountCurrentBalance, ele.AccountDescription, ele.AccountInitialBalance, ele.AccountName, ele.AccountSortingOrder, ele.BankName, ele.CreditCardIsReminder, ele.CreditCardListRemindValue, ele.CreditCardPaymentDay, ele.CreditLine, ele.CurrencyCode, ele.CurrencyType, ele.DictionaryKey, ele.DueType, ele.ExcludeReport, ele.IconName, ele.Inactive, ele.InterestPaymentAccount, ele.InterestPaymentType, ele.InterestRate, ele.IsAutoRenew, ele.IsCreatRecurring, ele.IsFinalize, ele.IsSystem, ele.IsoCreateDate, ele.IsoEndDate, ele.IsoFinalizeDate, ele.IsoLastExcuteDate, ele.IsoRecordTime, ele.IsoStartDate, ele.ListOtherValue, ele.ListTransactionInterestPayment, ele.MinInterestRate, ele.RangeType, ele.RecurringAmount, ele.RecurringFromAccount, ele.RecurringType, ele.SavingFromAccount, ele.TermMonth, ele.TermType]);
//            })

//            //FinanceTransaction table
//            tx.executeSql("CREATE TABLE IF NOT EXISTS FinanceTransaction(TransactionID, AccountID, Address, Amount, ClosingAmount, Description, EventName, FCAmount, Following, Giver, ImageAttachName, IncomeExpenseCategoryID, IsFavorite, IsoDebitDate, IsoTransactionDate, Latitude, Longitude, Payee, RelatedPerson, RelationshipID, SortOrder, ToAccountID, TransactionType)");

//            FinanceTransaction.forEach(ele => {
//                tx.executeSql("INSERT INTO FinanceTransaction(TransactionID, AccountID, Address, Amount, ClosingAmount, Description, EventName, FCAmount, Following, Giver, ImageAttachName, IncomeExpenseCategoryID, IsFavorite, IsoDebitDate, IsoTransactionDate, Latitude, Longitude, Payee, RelatedPerson, RelationshipID, SortOrder, ToAccountID, TransactionType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [ele.TransactionID, ele.AccountID, ele.Address, ele.Amount, ele.ClosingAmount, ele.Description, ele.EventName, ele.FCAmount, ele.Following, ele.Giver, ele.ImageAttachName, ele.IncomeExpenseCategoryID, ele.IsFavorite, ele.IsoDebitDate, ele.IsoTransactionDate, ele.Latitude, ele.Longitude, ele.Payee, ele.RelatedPerson, ele.RelationshipID, ele.SortOrder, ele.ToAccountID, ele.TransactionType]);
//            })
//        });
//    }
//}

export default class FinanceTransactionClass {
    constructor() {
        this.data = null
    }
    getAll() {
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql("SELECT * FROM FinanceTransaction inner join UserAccount on FinanceTransaction.AccountID = UserAccount.AccountID inner join IncomeExpenseCategory on FinanceTransaction.IncomeExpenseCategoryID = IncomeExpenseCategory.IncomeExpenseCategoryID", [], (transaction, result) => {
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
            tx.executeSql("INSERT INTO FinanceTransaction(AccountID, Address, Amount, ClosingAmount, Description, EventName, FCAmount, Following, Giver, ImageAttachName, IncomeExpenseCategoryID, IsFavorite, IsoDebitDate, IsoTransactionDate, Latitude, Longitude, Payee, RelatedPerson, RelationshipID, SortOrder, ToAccountID, TransactionID, TransactionType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [ele.AccountID, ele.Address, ele.Amount, ele.ClosingAmount, ele.Description, ele.EventName, ele.FCAmount, ele.Following, ele.Giver, ele.ImageAttachName, ele.IncomeExpenseCategoryID, ele.IsFavorite, ele.IsoDebitDate, ele.IsoTransactionDate, ele.Latitude, ele.Longitude, ele.Payee, ele.RelatedPerson, ele.RelationshipID, ele.SortOrder, ele.ToAccountID, ele.TransactionID, ele.TransactionType], (transaction, result) => {

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
