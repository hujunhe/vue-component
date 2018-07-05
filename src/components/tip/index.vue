<template lang="pug">
.tips#tipsBox(v-if="_show" :style="style")
	p(v-for="item in msgs") {{item}}
</template>

<script>
export default {
  props: {
    msgs: {
      type: Array,
      default: () => []
    },
    bindEl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      style: {
        top: '',
        left: ''
      }
    }
  },
	computed:{
		_show(){
			return this.bindEl !== ''?false:true
		}
	},
  updated() {
    console.log(1);
    let _obj = document.getElementById('tipsBox')
		console.log(_obj);
    let width = parseInt(window.getComputedStyle(_obj).width)
    let obj = document.getElementsByClassName(this.bindEl)
    let that = this
    for (let i = 0, len = obj.length; i < len; i++) {
      obj[i].addEventListener('mouseenter', function(ev) {
        that.show = true
        let left = (ev.clientX - width / 2) + 'px'
        let top = (ev.clientY + 10) + 'px'
        that.style.top = top
        that.style.left = left
      }, false)
    }
  }
}
</script>

<style lang="stylus">
.tips
	position: fixed;
	width 300px
	border 1px solid #e3e3e3
	background rgb(174, 226, 204)
	padding 10px
	border-radius 5px
	p
		margin 0
		display flex
		flex-direction colmun
</style>
