var db = openDatabase('MoneyKeeperDB', '1.0', 'Demo for sqlite web', 5 * 1024 * 1024);


export default class SyncClass {
    constructor() {
        this.data = null
    }

    createDatabase(data) {
        console.log('datataa')
        console.log(data)
        if (data) {
            var IncomeExpenseCategory = [
                {
                    "IncomeExpenseCategoryID": "f26e6435-398c-4944-a1c7-ffaeaff9fa09",
                    "IncomeExpenseCategoryName": "Ăn chơi",
                    "IncomeExpenseCategoryIcon": "https://static.moneylover.me/img/icon/icon_136.png",
                },
                {
                    "IncomeExpenseCategoryID": "f26e6435-398c-4944-a1c7-ffaeaff9fa10",
                    "IncomeExpenseCategoryName": "Ăn uống",
                    "IncomeExpenseCategoryIcon": "https://static.moneylover.me/img/icon/icon_136.png",
                },
                {
                    "IncomeExpenseCategoryID": "f26e6435-398c-4944-a1c7-ffaeaff9fa11",
                    "IncomeExpenseCategoryName": "Ăn mặc",
                    "IncomeExpenseCategoryIcon": "https://static.moneylover.me/img/icon/icon_136.png",
                },
            ];
            var AccountCategory = [
                {
                    "AccountCategoryID": 0,
                    "AccountCategoryName": "Tiền mặt 1",
                    "AccountCategoryIcon": "https://static.moneylover.me/img/icon/icon_136.png",
                },
                {
                    "AccountCategoryID": 1,
                    "AccountCategoryName": "Ví điện tử",
                    "AccountCategoryIcon": "https://static.moneylover.me/img/icon/icon_136.png",
                }
            ]
            var UserAccount = data.userAccount.NewAndEditedUserAccountList;
            var FinanceTransaction = data.financeTransaction.NewAndEditedFinanceTransactionList;


            db.transaction(function (tx) {

                //IncomeExpenseCategory table
                tx.executeSql("CREATE TABLE IF NOT EXISTS IncomeExpenseCategory(IncomeExpenseCategoryID unique, IncomeExpenseCategoryName, IncomeExpenseCategoryIcon)");

                IncomeExpenseCategory.forEach(ele => {
                    tx.executeSql("INSERT INTO IncomeExpenseCategory(IncomeExpenseCategoryID, IncomeExpenseCategoryName, IncomeExpenseCategoryIcon) VALUES (?, ?, ?)", [ele.IncomeExpenseCategoryID, ele.IncomeExpenseCategoryName, ele.IncomeExpenseCategoryIcon]);
                })

                //AccountCategory table
                tx.executeSql("CREATE TABLE IF NOT EXISTS AccountCategory(AccountCategoryID unique, AccountCategoryName, AccountCategoryIcon)");

                AccountCategory.forEach(ele => {
                    tx.executeSql("INSERT INTO AccountCategory(AccountCategoryID, AccountCategoryName, AccountCategoryIcon) VALUES (?, ?, ?)", [ele.AccountCategoryID, ele.AccountCategoryName, ele.AccountCategoryIcon]);
                })

                //UserAccount table
                tx.executeSql("CREATE TABLE IF NOT EXISTS UserAccount(AccountID unique, AccountCategoryID, AccountCurrentBalance, AccountDescription, AccountInitialBalance, AccountName, AccountSortingOrder, BankName, CreditCardIsReminder, CreditCardListRemindValue, CreditCardPaymentDay, CreditLine, CurrencyCode, CurrencyType, DictionaryKey, DueType, ExcludeReport, IconName, Inactive, InterestPaymentAccount, InterestPaymentType, InterestRate, IsAutoRenew, IsCreatRecurring, IsFinalize, IsSystem, IsoCreateDate, IsoEndDate, IsoFinalizeDate, IsoLastExcuteDate, IsoRecordTime, IsoStartDate, ListOtherValue, ListTransactionInterestPayment, MinInterestRate, RangeType, RecurringAmount, RecurringFromAccount, RecurringType, SavingFromAccount, TermMonth, TermType)");

                UserAccount.forEach(ele => {
                    tx.executeSql("INSERT INTO UserAccount (AccountID, AccountCategoryID, AccountCurrentBalance, AccountDescription, AccountInitialBalance, AccountName, AccountSortingOrder, BankName, CreditCardIsReminder, CreditCardListRemindValue, CreditCardPaymentDay, CreditLine, CurrencyCode, CurrencyType, DictionaryKey, DueType, ExcludeReport, IconName, Inactive, InterestPaymentAccount, InterestPaymentType, InterestRate, IsAutoRenew, IsCreatRecurring, IsFinalize, IsSystem, IsoCreateDate, IsoEndDate, IsoFinalizeDate, IsoLastExcuteDate, IsoRecordTime, IsoStartDate, ListOtherValue, ListTransactionInterestPayment, MinInterestRate, RangeType, RecurringAmount, RecurringFromAccount, RecurringType, SavingFromAccount, TermMonth, TermType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [ele.AccountID, ele.AccountCategoryID, ele.AccountCurrentBalance, ele.AccountDescription, ele.AccountInitialBalance, ele.AccountName, ele.AccountSortingOrder, ele.BankName, ele.CreditCardIsReminder, ele.CreditCardListRemindValue, ele.CreditCardPaymentDay, ele.CreditLine, ele.CurrencyCode, ele.CurrencyType, ele.DictionaryKey, ele.DueType, ele.ExcludeReport, ele.IconName, ele.Inactive, ele.InterestPaymentAccount, ele.InterestPaymentType, ele.InterestRate, ele.IsAutoRenew, ele.IsCreatRecurring, ele.IsFinalize, ele.IsSystem, ele.IsoCreateDate, ele.IsoEndDate, ele.IsoFinalizeDate, ele.IsoLastExcuteDate, ele.IsoRecordTime, ele.IsoStartDate, ele.ListOtherValue, ele.ListTransactionInterestPayment, ele.MinInterestRate, ele.RangeType, ele.RecurringAmount, ele.RecurringFromAccount, ele.RecurringType, ele.SavingFromAccount, ele.TermMonth, ele.TermType]);
                })

                //FinanceTransaction table
                tx.executeSql("CREATE TABLE IF NOT EXISTS FinanceTransaction(TransactionID, AccountID, Address, Amount, ClosingAmount, Description, EventName, FCAmount, Following, Giver, ImageAttachName, IncomeExpenseCategoryID, IsFavorite, IsoDebitDate, IsoTransactionDate, Latitude, Longitude, Payee, RelatedPerson, RelationshipID, SortOrder, ToAccountID, TransactionType, Date)");

                FinanceTransaction.forEach(ele => {
                    tx.executeSql("INSERT INTO FinanceTransaction VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [ele.TransactionID, ele.AccountID, ele.Address, ele.Amount, ele.ClosingAmount, ele.Description, ele.EventName, ele.FCAmount, ele.Following, ele.Giver, ele.ImageAttachName, ele.IncomeExpenseCategoryID, ele.IsFavorite, ele.IsoDebitDate, ele.IsoTransactionDate, ele.Latitude, ele.Longitude, ele.Payee, ele.RelatedPerson, ele.RelationshipID, ele.SortOrder, ele.ToAccountID, ele.TransactionType, new Date(ele.IsoTransactionDate).toDateString()]);
                })
            });

        }
    }
}
