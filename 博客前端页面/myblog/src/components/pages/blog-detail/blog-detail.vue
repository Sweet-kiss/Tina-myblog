<template>
  <div class="addNew">
    <h2 class="title"> <span class="back" @click="back"><img src="./img/arr-l.png" alt=""></span>博客详情</h2>
    <div class="blog_wrap">
	    <p class="blog_title">{{title}}</p>
	    <div class="blog_content">{{content}}</div>    	
    </div>

  </div>
</template>

<script>
export default {
	data () {
		return {
	  	title:'',
	  	content: ''			
		}
	},
	created () {
    this._getDetail()
	},
  methods: {
    back () {
      this.$router.back()
    },
    _getDetail () {
      console.log(this.$route.query.id,"lll")
      let id = this.$route.query.id
      let url="/api/blog/detail?id="+id;
      let _this = this;
	    console.log(url)  
	    this.$axios({
		     method: 'get',
		     url: url,               
		  }).then(function(res){
		  	console.log(res.data.data)
		    _this.detailData = res.data.data
        _this.title = _this.detailData.title
        _this.content = _this.detailData.content  

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
.blog_wrap {
	padding: 5px 10px;
}
.blog_title {
	font-size: 20px;
	font-weight: bold;
	line-height: 30px;
}
.blog_content {
	margin-top: 5px;
	font-size: 15px;
	line-height: 20px;
	text-indent: 20px;
}
</style>
