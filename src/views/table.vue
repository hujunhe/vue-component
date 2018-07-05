<template lang="pug">
	.tableComponent
		Table(:ths="table.ths" :title="table.title" @checked="allChoose" :list="table.list" scroll="true")
			template(slot-scope="item")
				.checkBox
					input(type="checkbox")
				.name
					p {{item.name}}
				.age
					p {{item.age}}
				.age
					p {{item.age}}
				.age
					p {{item.age}}
				.age
					p {{item.age}}
				.age
					p {{item.age}}
				.age
					p {{item.age}}
				.age
					p {{item.age}}
</template>

<script>
import Table from '@/components/table'
export default {
	data () {
		return{
			table:{
				ths:[{checkbox:true,checked:false},{text:'1',colspan:2},{text:2},{text:'1',colspan:2},{text:2},{text:'1',colspan:2},{text:2},{text:'1',colspan:2},{text:2}],
				title:'学生信息表',
				list:[{
					name:'hujunhe',
					age:12
				},{
					name:'hujunhe',
					age:12
				},{
					name:'hujunhe',
					age:12
				},{
					name:'hujunhe',
					age:12
				},{
					name:'hujunhe',
					age:12
				},{
					name:'hujunhe',
					age:12
				},{
					name:'hujunhe',
					age:12
				},{
					name:'hujunhe',
					age:12
				},]
			}
		}
	},
	methods:{
		allChoose(obj){
			if(obj === true){
				console.log('选中');
			}else{
				console.log('未选中');
			}
		}
	},
	components:{
		Table
	},
	mounted(){
	}
}
</script>

<style lang="stylus">
.checkBox
.name
.age
	flex 1 0
	text-align center
</style>
