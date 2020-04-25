import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookF, faTwitter, faInstagram, faSearch, faTimes, faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
