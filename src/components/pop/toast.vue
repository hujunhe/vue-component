<template lang="pug">
	transition(:enter-active-class="'animated bounceInDown'" :leave-active-class="'animated bounceOutUp'")
		.toast(v-if="show")
			p {{tip}}
</template>

<script>
export default {
	data(){
		return {
			show:false,
			delay:3000,
			tip:''
		}
	},
	mounted(){
		let that = this
		$ev.$on('toast',res=>{
			//合并对象
			Object.assign(that,res)
			setTimeout(()=>{
				that.show = false
			},that.delay)
		})
	}
}
</script>

<style lang="stylus">
.toast
	position absolute
	z-index 999
	top 100px
	color #fff
	background rgba(0, 0, 0, 0.54)
	left 50%
</style>
