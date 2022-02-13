import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'
// import VueCookies from 'vue-cookie'
// import VueCompositionApi from '@vue/composition-api'

Vue.config.productionTip = false;
// Vue.use(VueCompositionApi)
// Vue.use(VueCookies)
window.Kakao.init('0d2a85e9c0ff89607d55a020069580ba');

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


