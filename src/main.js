import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import obj from "components/common/tocast";
import FastClick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';
//引入element-UI
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)

//解决移动端快速点击延迟300毫秒
FastClick.attach(document.body);

//启用图片懒加载
Vue.use(VueLazyLoad,{
  loading:require("./assets/img/home/lazyload.gif")
})

//启用事件总线
Vue.prototype.$bus=new Vue()

Vue.config.productionTip = false;
Vue.use(obj)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
