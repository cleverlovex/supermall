import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'

//安装toast插件
import toast from 'components/common/toast'

import FastClick from'fastclick'
import VueLazyLoad from 'vue-lazyload'


//添加事件总线对象
Vue.config.productionTip = false

//解决移动端300ms延迟
FastClick.attach(document.body)

//使用图片懒加载
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

Vue.prototype.$bus = new Vue()

Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

require('./assets/css/base.css')
