<template lang="pug">
	.tipComponent
		p
			a 我是按钮A
		p
			a(@mouseenter="showTip('btnB')" class="btnB") 我是按钮B
		Tip(:msgs="pop.msg" :bindEl="pop.obj")
</template>

<script>
import Tip from '@/components/tip'
export default {
	data(){
		return{
			pop:{
				msg:['第一句','第二句','第三句'],
				obj:null
			}
		}
	},
	methods:{
		showTip(obj){
			this.pop.obj = obj
		}
	},
	components:{
		Tip
	}
}
</script>

<style lang="stylus">

</style>
