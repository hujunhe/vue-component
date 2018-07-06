<template lang="pug">
	.setConfirm(v-if="showPop")
		.confirm.animated.bounceInDown
			h3.confirm_title {{title}}
			.content
				p {{showPop}}
				slot
			.btnBox
				p
					a.sure.btn(@click="clickDone") {{doneBtn}}
					a.cancel.btn(@click="showPop = false") {{cancelBtn}}
</template>

<script>
export default {
	props:{
		show:{
			type:Boolean,
			default:false
		},
		title:{
			type:String,
			default:''
		},
		done:{
			type:Function,
			default(){
				console.log('默认事件');
			}
		},
		doneBtn:{
			type:String,
			default:'确认'
		},
		cancelBtn:{
			type:String,
			default:'取消'
		}
	},
	data(){
		return {
			showPop:this.show
		}
	},
	methods:{
		clickDone(){
			this.done()
			this.showPop = false
		}
	}
}
</script>

<style lang="stylus">
.setConfirm
	width 100%
	height 100%
	position fixed
	background rgba(0,0,0,.1)
	top 0
	left 0
	p
		margin 0
	.confirm
		min-width 200px
		background #fff
		position fixed
		top 100px
		left 50%
		margin-left -100px
		border-radius 10px
		overflow hidden
		h3
			margin 0
			text-align center
			border 1px solid #e3e3e3
			line-height 32px
			font-size 18px
			font-weight 600
		.content
			padding 0 20px 20px
			height 100px
			display flex
			align-items center
			justify-content center
		.btnBox
			margin 10px 0 20px
			p
				display flex
				justify-content space-around
			.btn
				border 1px solid #e6e6e6
				padding 5px 10px
				cursor pointer
				&.sure
					color #fff
					background rgb(58, 174, 200)
</style>
