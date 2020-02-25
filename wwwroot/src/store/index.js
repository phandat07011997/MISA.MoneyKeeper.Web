import Vue from 'vue'
import Vuex from 'vuex'
import financetransaction from './modules/financetransaction';
import incomeexpensecategory from './modules/incomeexpensecategory';
import useraccount from './modules/useraccount';
import synchronizedata from './modules/synchronizedata';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        financetransaction,
        incomeexpensecategory,
        useraccount,
        synchronizedata
    }
})
