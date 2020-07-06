import Vue from 'vue'
import App from './App.vue'
import { mask } from 'vue-the-mask'

Vue.config.productionTip = false

Vue.directive('mask', mask)

new Vue({
  render: h => h(App)
}).$mount('#app')
