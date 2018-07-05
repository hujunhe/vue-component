import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pop from './components/pop/index.vue'
//引入animate-支持动画
import 'animate.css'
Vue.config.productionTip = false
//挂载弹出框
Vue.component('pop',pop)
//事件总线
window.$ev = new Vue();
new Vue({
  router,
  store,
	component:{
		pop
	},
  render: h => h(App)
}).$mount('#app')
