<template>
  <div class="modal">
  	<div class="zhezao"></div>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  props: {
  	msg:String
  }
}
</script>

<style>
.zhezao {
	position: fixed;
	top:0;	
	left: 0;
	width: 100%;
	height: 100%;

	background-color: #000;
	opacity: 0.5
}
.modal p{
  width: 200px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  top: 50%;
  margin-top: -150px;
  background-color: #ccc;
  border-radius: 5px;
}
</style>
