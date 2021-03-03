import Vue from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'
import '@/assets/css/tailwind.css'
import VueRouter from 'vue-router'
import vmodal from 'vue-js-modal'
import VueScrollTo from 'vue-scrollto'
import Lightbox from 'vue-easy-lightbox'

// Pages for Routes
import PageBody from "./components/PageBody"
import Gallery from "./components/Gallery"
import Services from "./components/Services"
import Form from "./partials/Form";

Vue.config.productionTip = false

Vue.use(VueCookies)
Vue.use(VueRouter)
Vue.use(vmodal)
Vue.use(VueScrollTo)
Vue.use(Lightbox)

const routes = [
  { path: '/', component: PageBody },
  { path: '/gallery', component: Gallery },
  { path: '/services', component: Services},
  { path: '/contact', component: Form }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
