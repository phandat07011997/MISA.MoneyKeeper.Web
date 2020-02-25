import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
//import router from './router'
import store from './store'
import routes from './router/index.js'
import VueI18n from 'vue-i18n'
import vnMessage from './lang/vn.json'
import enMessage from './lang/en.json'

Vue.use(VueI18n)
Vue.config.productionTip = false

const messages = {
    vn: vnMessage,
    en: enMessage,
}
const i18n = new VueI18n({
    locale: 'vn', // set locale
    messages,
    fallbackLocale: 'vn',
})

new Vue({
    router: routes,
    store,
    i18n,
  render: h => h(App)
}).$mount('#app')
