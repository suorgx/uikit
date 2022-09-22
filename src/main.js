import { createApp } from 'vue'
import App from './App.vue'

import router from "./router/index.js";

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCircleUp, faHand, faAddressBook, faCreditCard, faLemon, faHourglass } from '@fortawesome/free-regular-svg-icons'

library.add([faCircleUp, faHand, faAddressBook, faCreditCard, faLemon, faHourglass])

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
