<template>
  <div id="app">
		<aside class="leftNav">
			<a href="#/table">表单控件</a>
			<a href="#/tip">移动tips</a>
			<a href="#/pageCut">分页插件</a>
			<a href="#/onEmit">事件分发，监听</a>
		</aside>
		<div class="leftSide">
			<router-view/>
		</div>
		<pop></pop>
  </div>
</template>

<style lang="less">
	html,body{
		width:100%;
		height:100%;
		margin:0;
	}
	a{
		text-decoration:none;
	}
	#app{
		width:100%;
		height:100%;
		display:flex;
		aside{
			width:100px;
			background:rgba(0, 0, 0, 0.9);
			height:100%;
			display:flex;
			flex-direction:column;
			a{
				color: #A7B1C2;
				text-align:center;
				margin:10px 0;
				&:hover{
					color:#fff;
				}
			}
		}
		.leftSide{
			width:100%;
		}
	}
</style>
