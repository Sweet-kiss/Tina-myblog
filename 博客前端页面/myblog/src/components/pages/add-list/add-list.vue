<template>
  <div class="addNew">
    <h2 class="title"> <span class="back"><img src="./img/arr-l.png" alt=""></span>添加博客</h2>
    <div class="formmat">
    	<div class="blog_title"><input type="text" v-model="title" placeholder="请输入标题"></div>
    	<div class="blog_desc"><textarea v-model="content" name="" id="" cols="30" rows="10"></textarea></div>
    </div>
    <div class="login_btn" @click="addBlogList">提交</div>
    <modal-fom v-show="isShow" :msg="msg"></modal-fom>
  </div>
</template>

<script>
import ModalFom from '@/components/base/modal/modal'	
export default {
	components: {
    ModalFom
	},	
	data () {
    return {
    	 title: '',
    	 content: '',
    	 isShow: false,
    	 msg:""
    }
	},
	methods: {
    addBlogList () {
    	var title = this.title
    	var content = this.content
    	console.log(title, content)
    	let data = {
    		title: title,
    		content: content
    	}

    	let url = '/api/blog/new'
    	let _this = this

			this.$axios({
			    method: 'post',
			    url: url, 
			    data: data              
			  }).then(function(res){
			    console.log(res.data)
			    var result = res.data
			    if(result.errno==0) {
			    	//alert("插入成功！")
			    	_this.isShow = true	
			    	_this.msg = "添加成功！"

			    	setTimeout(function(){ 
			    		_this.$router.push({path:'/bloglist'})
			    	}, 1000)
			    }else{
			    	_this.isShow = true	
			    	_this.msg = "添加失败！"
			    	setTimeout(function(){ 
			    		_this.isShow = false
			    		_this.$router.push({path:'/addList'})
			    	}, 1000)
			    }

			  }).catch(function(err){
			         console.log(err)
			  })



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
