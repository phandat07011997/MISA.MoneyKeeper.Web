import Vue from 'vue'
import VueRouter from 'vue-router'

//import ViewDay from '../components/ViewDay.vue'
import Account from '../views/Account.vue'
import Home from '../views/Home.vue'
import Transaction from '../views/Transaction.vue'
import Report from '../views/Report.vue'
import SpendingLimit from '../views/SpendingLimit.vue'

import ReportAnalysis from '../views/report/ReportAnalysis.vue'
import ReportEvents from '../views/report/ReportEvents.vue'
import ReportCharbar from '../views/report/ReportCharbar.vue'
import ReportPayee from '../views/report/ReportPayee.vue'
import ReportFinancial from '../views/report/ReportFinancial.vue'
import ReportLentBorrowed from '../views/report/ReportLentBorrowed.vue'

import Other from '../views/Other.vue'
import OtherCategories from '../views/other/OtherCategories.vue'
import OtherConnectFriends from '../views/other/OtherConnectFriends.vue'
import OtherHelp from '../views/other/OtherHelp.vue'
import OtherRecurring from '../views/other/OtherRecurring.vue'
import OtherSettings from '../views/other/OtherSettings.vue'

import AccountDeposit from '../views/account/AccountDeposit.vue'
import AccountMainAccount from '../views/account/AccountMainAccount.vue'
import AccountAccumulation from '../views/account/AccountAccumulation.vue'
import Language from '../views/other-content/Language.vue'
import DefaultCurrency from '../views/other/other-settings/DefaultCurrency'
import Main from '../components/layout/Main.vue'
import Login from '../views/authenticate/Login.vue'

//import Main from '../components/layout/Main.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: 'Main',
        component: Main,
        children: [
            {
                path: 'home',
                name: 'Home',
                component: Home
            },
            {
                path: 'transaction',
                name: 'Transaction',
                component: Transaction
            },
            {
                path: 'spending-limit',
                name: 'spending-limit',
                component: SpendingLimit
            },
            {
                path: 'report',
                name: 'report',
                component: Report,
                children: [
                    {
                        path: 'events',
                        name: 'ReportEvents',
                        component: ReportEvents

                    },
                    {
                        path: 'financial',
                        name: 'ReportFinancial',
                        component: ReportFinancial

                    },
                    {
                        path: 'analysis',
                        name: 'ReportAnalysis',
                        component: ReportAnalysis

                    },
                    {
                        path: 'charbar',
                        name: 'ReportCharbar',
                        component: ReportCharbar

                    },
                    {
                        path: 'lentborrowed',
                        name: 'ReportLentBorrowed',
                        component: ReportLentBorrowed

                    },
                    {
                        path: 'payee',
                        name: 'ReportPayee',
                        component: ReportPayee

                    },

                ]
            },

            {
                path: 'account',
                name: 'Account',
                component: Account,
                children: [
                    {
                        path: 'deposit',
                        name: 'AccountDeposit',
                        component: AccountDeposit

                    },
                    {
                        path: 'mainAccount',
                        name: 'AccountMainAccount',
                        component: AccountMainAccount

                    },
                    {
                        path: 'saveMoney',
                        name: ' AccountSaveMoney',
                        component: AccountAccumulation

                    },

                ]
            },
            {
                path: 'other',
                name: 'other',
                component: Other,
                children: [
                    {
                        path: 'categories',
                        name: 'OtherCategories',
                        component: OtherCategories

                    },
                    {
                        path: 'connectFriends',
                        name: 'OtherConnectFriends',
                        component: OtherConnectFriends

                    },
                    {
                        path: 'help',
                        name: 'OtherHelp',
                        component: OtherHelp

                    },
                    {
                        path: 'recurring',
                        name: 'OtherRecurring',
                        component: OtherRecurring

                    },
                    {
                        path: 'settings',
                        name: 'OtherSettings',

                        component: OtherSettings,
                         children: [
                            {
                                path: 'language',
                                name: 'Language',
                                component: Language,
                             },
                             {
                                 path: 'default-currency',
                                 name: 'DefaultCurrency',
                                 component:DefaultCurrency,
                             }
                        ]

                    },
                ]

            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },


]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    if (authRequired && !loggedIn)
        next('/login')
    // if the user is not authenticated, `next` is called twice
    else next()
})



export default router
