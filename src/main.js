import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import install from './install'
import 'windi.css'
import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/color-brewer.css'
import 'vue-dotmd-loader/src/docs.css'
import VueCompositionAPI from '@vue/composition-api'
import '@/assets/css/doc.less'

Vue.use(VueCompositionAPI)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(install)

/**
 * 解决路由重复
 * */
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV !== 'development' ? '/uidoc' : '/',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
