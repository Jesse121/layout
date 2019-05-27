import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './assets/css/global.css'


//Muse-UI
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
// import '@/assets/css/theme-dark.css'
Vue.use(MuseUI)

//为代码文本提供高亮、缩进
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)
    //为代码文本格式化
import pretty from 'pretty'
Vue.prototype.$prettyDom = pretty

//云数据库
import lean from './utils/leancloud storage'
Vue.prototype.$lean=lean


Vue.config.productionTip = false
Vue.prototype.$compile = Vue.compile

window._Vue = new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
