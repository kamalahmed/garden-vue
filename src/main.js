import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTimes, faShoppingCart, faAngleLeft, faAngleRight, faLongArrowAltRight, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookF, faTwitter, faInstagram, faSearch, faTimes, faShoppingCart, faAngleLeft, faAngleRight, faLongArrowAltRight,faPhoneAlt, faEnvelope, faClock)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
