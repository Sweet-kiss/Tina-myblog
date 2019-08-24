<template>
  <div class="bloglist_wrap">
     <h2 class="title">我的博客 <span class="add_new" @click="addNew"></span></h2>
     <div class="search_wrap">
     	 <div class="search">
     	 	 <input type="text" v-model="searchText" placeholder="请输入关键字"
     	 	  v-on:change="listenKeyword"> 
     	 	 <span class="search_icon" v-show="isShow" @click="clearInput">
     	 	 	<img src="./img/del_cha.png" alt="">
     	 	 </span>
     	 </div>
     </div>
     <ul class="list_wrp">
     	<li v-for="(item,index) in blogLists">
     		<p @click="toDetail(index)">{{item.title}}</p>
     		<p @click="toDetail(index)">{{item.content}}</p>
       <div>
       	  <span>{{item.createtime}}</span>
       	  <span @click="del(index)">删除</span>
       	  <span @click="edit(index)">编辑</span>
       </div>
     	</li>
     </ul>
  <modal-fom v-show="isShow2" :msg="msg"></modal-fom>
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
		blogLists: "",
		searchText: "",
		isShow: false,
		isShow2: false,
		msg: ""
  	}
  },
  created () {
  	this._getBlogLists()
  },
  methods: {
  	_getBlogLists () {
  	  let  _this = this;
      let url="/api/blog/list?isadmin=1";
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
  	},
  	addNew () {
  		this.$router.push({path: '/addList'})
  	},
  	toDetail(index){
  		let list_id = this.blogLists[index].id
  		this.$router.push({path: '/blogDetail', query:{id: list_id}})      
  	},
  	edit(index){
  		let list_id = this.blogLists[index].id
  		this.$router.push({path: '/editLsit', query:{id: list_id}})
  	},
  	del (index) {
  		var _this = this
	    let url="/api/blog/del?id="+this.blogLists[index].id;
	      console.log(url)
		  this.$axios({
		    method: 'post',
		    url: url,               
		  }).then(function(res){
		    console.log(res.data)
		    let code = res.data.errno
		    if(code==0){
          //alert("删除成功！")
          _this.isShow = true
          _this.msg = "删除成功!"

          setTimeout(function(){ 
          	   _this.isShow = false
			    		 _this._getBlogLists()
			    	}, 1000);
          _this._getBlogLists()
		    }
		  }).catch(function(err){
		         console.log(err)
		  })      
  	},
    listenKeyword () {
    	console.log(this.searchText,"kkkkk")
    	let search_result = []
    	let _this = this
    	if(this.searchText) {
    		_this.isShow = true
    		console.log(this.isShow)
    	for(let i=0; i<_this.blogLists.length; i++) {
    		if(_this.blogLists[i].title.indexOf(_this.searchText)>-1||_this.blogLists[i].content.indexOf(_this.searchText)>-1) {
            search_result.push(_this.blogLists[i])
    		}
    	}
    	console.log(search_result,"搜索结果")
    	_this.blogLists = search_result
    	}else {
         _this.isShow = false
         _this._getBlogLists()
    	}
    },
    clearInput () {
    	this.searchText=""
    	this.isShow = false
    	this._getBlogLists()
    }
  },
  watch: {
  	searchText(){
  		if(this.searchText===""){
         this._getBlogLists()
  		}
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
	border-bottom: #f0edee solid 1px;
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
	margin-top: 2px;
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
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
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
