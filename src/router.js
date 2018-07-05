import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Table = (res) => require(['./views/table.vue'],res)
const Tip = (res) => require(['./views/Tip.vue'],res)
const PageCut = res => require(['./views/pageCut.vue'],res)
const Hello = res => require(['./views/on-emit.vue'],res)
export default new Router({
  routes: [
    {
      path: '/tip',
      name: 'tip',
      component: Tip
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },{
			path:'/pageCut',
			name:'pageCut',
			component:PageCut
		},{
			path:'/onEmit',
			name:'onEmit',
			component:Hello
		}
  ]
})
