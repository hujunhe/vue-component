<template lang="pug">
	.onEmit
		p
			a(@click="showToast") 显示通知栏
		p
			a(@click="showConfirm") 显示确认框
		p
			a(@click="showMyconfirm") 显示自定义确认框
		Modal(:show="showModal" :done="doneFn")
			input(type="text" placeholder="请输入数量" v-model="inputText" )
</template>

<script>
import Modal from '@/components/pop/setConfirm.vue'
export default {
	data(){
		return {
			inputText:'',
			showModal:false
		}
	},
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
		},
		showMyconfirm(){
			this.showModal = true
		},
		doneFn(){
			console.log(this.inputText);
			this.showModal = false
		}
	},
	components:{
		Modal
	}
}
</script>

<style lang="stylus">
</style>
