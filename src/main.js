// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

router.beforeEach((to,from,next)=>{
  if(to.meta.needLogin){
    //当页面需要登录的时候判断浏览器是否有sessionStorage
    if(window.sessionStorage.data){
      next()
    }else{
    //如果没有，让页面进入登录页
      next('/login')
    }
  }else{
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
