<template>
  <div class="bloglist_wrap">
     <h2 class="title">我的博客 <span class="add_new"></span></h2>
     <div class="search_wrap">
     	 <div class="search"><input type="text" placeholder="请输入关键字"> <span class="search_icon"><img src="./img/search_icon.png" alt=""></span></div>
     </div>
     <ul class="list_wrp">
     	<li v-for="item in blogLists">
     		<p>{{item.title}}</p>
     		<p>{{item.content}}</p>
       <div>
       	  <span>{{item.createtime}}</span>
       	  <span>删除</span>
       	  <span>编辑</span>
       </div>
     	</li>
     </ul>
  </div>
</template>

<script>
export default {
  data () {
  	return {
  		blogLists: ""
  	}
  },
  created () {
  	this._getBlogLists()
  },
  methods: {
  	_getBlogLists () {
  	  let  _this = this;
      let url="http://127.0.0.1:3000/api/blog/list";
      console.log(url)
	  this.$axios({
	    method: 'get',
	    url: url,               
	  }).then(function(res){
	    //console.log(res.data)
	    _this.blogLists = res.data.data;
	    console.log(_this.blogLists)
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
.add_new {
	position: absolute;
	top: 5px;
	right: 5px;
	display: block;
	width: 35px;
	height: 35px;
	background-color: yellow;
	background: url("./img/add_icon.png") no-repeat;
	background-size: 100%;
}
.list_wrp {
	width: 100%;
}
.list_wrp li {
	padding:10px 15px;
	overflow: hidden;
	border-bottom: #b2b2b2 solid 1px;
}
.search {
	position: relative;
	width: 95%;
	height: 40px;
	line-height: 40px;
	background-color: #f3efef;
	margin: 0 auto;
	margin-top: 10px;
	border-radius: 30px;
	text-align: center;
}

.search input {
	width: 90%;
	height: 38px;
	line-height: 38px;
	border: none;
	background-color: #f3efef;
	text-indent: 10px;
	outline: none;
}
.search_icon {
	display: block;
	width: 30px;
	height: 30px;
	line-height: 30px;
	background-color: #c2c0c0;
	border-radius: 50%;
	position: absolute;
	right: 5px;
	top: 5px;
	text-align: center;
}
.search_icon img {
	width: 85%;
}
.list_wrp li p:first-child {
	font-size: 18px;
	font-weight: bold;
	line-height: 35px;
}
.list_wrp li p:nth-child(2) {
	font-size: 13px;
	line-height: 20px;
	color: #a8a6a6;
	margin-bottom: 10px;
}
.list_wrp li span:first-child {
  font-size: 13px;
  float: left;
  color: #a8a6a6
}
.list_wrp li span:nth-child(2) {
	display: block;
	float: right;
	padding: 5px 10px;
	font-size: 13px;
	border: #f789b2 solid 1px;
	color: #f789b2;
	border-radius: 5px;
}
.list_wrp li span:nth-child(3) {
	display: block;
	float: right;
	padding: 5px 10px;
	font-size: 13px;
	border: #b0ee5d solid 1px;
	color: #b0ee5d;
	border-radius: 5px;
	margin-right: 8px;
}
</style>
