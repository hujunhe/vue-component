<template lang="pug">
	.pageCut
		.list(@click="pageThat")
			a(data-index="-1") 上一页
			a(data-index="1" :class="choose === 1?'active':''") 首页
			template(v-if="_page !== 1 && _page <= 7")
				a(v-for="item in _page" :data-index="item" :class="choose === item?'active':''" ) {{item}}
			template(v-else-if="_page > 7")
				span(v-if="prev") ...
				a(v-for="item in _list" :data-index="item" :class="choose === item?'active':''") {{item}}
				span(v-if="next") ...
			a(:data-index="_page" :class="choose === _page?'active':''") 末页
			a(data-index="0") 下一页
		.jumpBox
			p
				span 共{{_page}}页
				span 跳转至
					input(type="number" v-model="jumpNum" min="1" :max="_page" @keyup.enter="jumpTo")
</template>
<script>
export default {
	props:{
		//一共多少条
		total:{
			type:Number,
			default:0
		},
		//一页显示多少条
		size:{
			type:Number,
			default:10
		}
	},
	data(){
		return {
			choose:1,
			list:[1,2,3,4,5],
			prev:false,
			next:true,
			jumpNum:NaN
		}
	},
	methods:{
		pageThat(ev){
			if(ev.target.nodeName === 'SPAN') return
			let num = +ev.target.dataset.index
			if(num === -1){
				if(this.choose > 1)this.choose -= 1
			}else if(num === 0){
				if(this.choose < this._page)this.choose += 1
			}else{
				this.choose = num
			}
		},
		jumpTo(){
			if(this.jumpNum > this._page) return
			this.choose = +this.jumpNum
		}
	},
	computed:{
		_page(){
			return this.total % this.size > 0 ? parseInt(this.total / this.size) + 1 : this.total / this.size
		},
		_list (){
			let num = this.choose
			if(num < 5){
				this.list = [1,2,3,4,5]
				this.next = true
				this.prev = false
			}else if(num > 4 && num < this._page - 4){
				this.list = [num-2,num-1,num,num+1,num+2]
				this.next = true
				this.prev = true
			}else{
				this.list = [this._page-4,this._page-3,this._page-2,this._page-1,this._page]
				this.prev = true
				this.next = false
			}
			return this.list
		}
	}
}
</script>

<style lang="stylus" scoped>
	.pageCut
		w = 30px
		display flex
		p
			margin 0
		.list
			display flex
		.jumpBox
			line-height w
			span
				margin 0 5px;
		a
			cursor pointer
			min-width w
			height w
			line-height w
			text-align center
			margin 0 5px
			border 1px solid #e6e6e6
			border-radius 2px
			&.active
				background #e3e4e1
</style>
