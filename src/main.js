// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter)

var vuef = require('./modules/model')
window.vuef = vuef
vuef.document = require('./modules/document')
vuef.libs = require('./modules/libs')

import Route1 from './components/Route1.vue'
import Route2 from './components/Route2.vue'
import Route3 from './components/Route3.vue'

const routes = [
  {path:'/', component:Route1},
  {path:'/Route2', component:Route2},
  {path:'/Route3', component:Route3}
]

const router = new VueRouter({
  routes
})

// Event Listeners
window.addEventListener('resize', vuef.document.debounce(vuef.document.resize, 50))
window.addEventListener('scroll', vuef.document.scroll)

new Vue({
    router,
    el: '#app',
    render: (h) => h(App)
})