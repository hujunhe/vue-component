<template lang="pug">
	.onEmit
		p
			a(@click="showToast") 显示通知栏
		p
			a(@click="showConfirm") 显示确认框
</template>

<script>
export default {
	methods:{
		showToast(){
			$ev.$emit('toast',{
				show:true,
				tip:'移动弹层'
			})
		},
		showConfirm(){
			$ev.$emit('confirm',{
				show:true,
				title:'你确定么?',
				msg:'你真的确定么?',
				cb(){
					alert('哈哈哈');
				}
			})
		}
	}
}
</script>

<style lang="stylus">
</style>
