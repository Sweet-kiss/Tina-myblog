<template>
  <div class="addNew">
    <h2 class="title"> <span class="back"><img src="./img/arr-l.png" alt=""></span>编辑博客</h2>
    <div class="formmat">
    	<div class="blog_title"><input type="text" v-model="title" placeholder="请输入标题"></div>
    	<div class="blog_desc"><textarea v-model="content" name="" id="" cols="30" rows="10"></textarea></div>
    </div>
    <div class="login_btn">提交</div>
  </div>
</template>

<script>
export default {
	data () {
    return {
    	 title: '',
    	 content: ''
    }
	},
	created(){
    this._getDetailList()
	},
	methods: {
    _getDetailList () {
      console.log(this.$route.query.id,"lll")
    }
	}
}
</script>

<style>
.title {
	width: 100%;
	height: 45px;
	line-height: 45px;
	text-align: center;
	background-color: #f9536c;
	color: #fff;
}
.back {
	position: absolute;
	top:7px;
	left: 8px;
	display: block;
	width: 30px;
	height: 30px;
}
.back img {
	width: 100%;
}
.formmat {
	width: 90%;
	margin: 0 auto;
	margin-top: 20px;
}
.blog_title input {
	width: 100%;
	height: 50px;
	line-height: 50px;
	border: #b2b2b2 solid 1px;
	font-size: 15px;
	text-indent: 10px;
}
.blog_desc textarea {
	width: 100%;
	height: 400px;
	margin-top: 20px;
	border: #b2b2b2 solid 1px;
}
.login_btn {
	width: 90%;
	margin: 40px auto;
	height: 50px;
	line-height: 50px;
	background-color: #f9536c;
	color: #fff;
	border-radius: 26px;
	text-align: center;
}
</style>
