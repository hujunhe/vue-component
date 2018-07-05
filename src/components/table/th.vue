<template lang="pug">
	th(:colspan="_item.colspan" :rowspan="_item.rowspan")
		template(v-if="_item.checkbox")
			input(type="checkbox" :checked="_item.checked" @change="doChange(_item.checked)")
		template(v-else)
			span(v-html="_item.text")
</template>

<script>
export default {
	props:{
		item:{
			type:Object,
			default () {
				return {
					text:'',
					checkbox:false,
					select:false,
					colspan:0,
					rowspan:0,
					checked:false
				}
			}
		}
	},
	data () {
		return {

		}
	},
	methods:{
		doChange(obj){
			this._item.checked = !obj
		}
	},
	computed:{
		_item () {
			return this.item
		}
	},
	watch:{
		'_item.checked'(val){
			this.$emit('checked',val)
		}
	}

}
</script>

<style lang="stylus">
th
	padding 10px 0
</style>
