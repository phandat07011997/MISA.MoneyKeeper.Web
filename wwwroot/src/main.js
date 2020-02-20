import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
//import router from './router'
import store from './store'
import routes from './router/index.js'

Vue.config.productionTip = false

new Vue({
    router: routes,
    store,

  render: h => h(App)
}).$mount('#app')
