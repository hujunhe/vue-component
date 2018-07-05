<template lang="pug">
	.pageCutComponents
		p 分页
		PageCut(:total="page.total" :size="page.size")
</template>

<script>
import PageCut from '@/components/pageCut'
export default {
	data(){
		return {
			page:{
				total:100,
				size:1
			}
		}
	},
	components:{
		PageCut
	}
}
</script>

<style lang="stylus">
</style>
