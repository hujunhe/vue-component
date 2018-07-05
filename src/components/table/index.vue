<template lang="pug">
	.table
		table(:class="!!scroll === true?'rightPadd':''")
			caption(v-if="title !== ''") {{title}}
			thead
				tr
					Th(v-for="item in _ths" :item="item" @checked="checkedFn")
		.tbody(:style="!!scroll === true?'height:'+ height:''" :class="!!scroll === true?'scrollBox':''")
			template(v-if="!loading")
				ul
					template(v-if="list.length !== 0")
						li(v-for="item in list")
							.oneItem
									slot(v-bind="item")
					template(v-else)
						li
							p.noData 暂无数据
			template(v-else)
				p.loading 加载中...
</template>

<script>
import Th from './th.vue'
export default {
	data(){
		return {
			msg:''
		}
	},
	props:{
		ths:{
			type:Array,
			default:() => []
		},
		list:{
			type:Array,
			default:() => []
		},
		title:{
			type:String,
			default:''
		},
		loading:{
			type:Boolean,
			default:false
		},
		scroll:{
			type:String,
			default:'false'
		},
		height:{
			type:String,
			default:'300px'
		}
	},
	computed:{
		_ths () {
			return this.ths
		}
	},
	methods:{
		checkedFn(obj){
			this.$emit('checked',obj)
		}
	},
	components:{
		Th
	}
}
</script>

<style lang="stylus">
.table
	width 90%
	margin 0 auto
	min-width 900px
	table
		&.rightPadd
			padding-right 18px
		width 100%
		border-spacing 0
		thead
			tr
				display flex
				background-color #F5F5F6
				th
					border 1px solid #e3e3e3
					border-bottom none
					border-right none
					flex 1 0
					&:last-child
						border-right 1px solid #e3e3e3
	.tbody
		border 1px solid #e3e3e3
		&.scrollBox{
			overflow-y:auto;
		}
		ul
			padding 0
			margin 0
			li
				padding 0
				margin 0
				list-style-type none
				.oneItem
					display flex
					word-break break-all
					& > div
						border 1px solid #e3e3e3
				.noData
					text-align center
					margin 10 0;
		.loading
			text-align center
</style>
