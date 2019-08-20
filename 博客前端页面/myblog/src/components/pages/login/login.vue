<template>
  <div class="login_wrap">
     <div class="form_w">
     	<div class="user_w">
     		<span class="icon_f"></span>
     		<span class="icon_in"><input type="text" placeholder="请输入用户名" v-model="username"></span>
     	</div>
     	<div class="password_w">
     		<span class="icon_fcc"></span>
     	  <span class="icon_in"><input type="text" placeholder="请输入密码" v-model="password"></span>
     	</div>
     </div>
     <div class="login_btn" @click="login">登录</div>
  </div>
</template>

<script>
export default {
	data () {
    return {
    	username: "",
    	password: ""
    }
	},
	methods: {
		login () {
			let username = this.username
			let password = this.password
			console.log(username,password)
		}
	}
}
</script>

<style scoped>
.login_wrap {
  position:fixed;
  width: 100%;
  height: 100%;
  background: url("./img/login_bg.png") no-repeat;
  text-align:center;
  background-size: cover;  
}
.form_w {
  width: 80%;
  margin: 0 auto;
  margin-top: 50%;
}
.user_w,.password_w {
	width: 100%;
	background-color: #f6f6f6;
	padding: 16px 0px;
}
.user_w {
	border-bottom: #dfdddd solid 1px;
}
.icon_f{
	display: inline-block;
	width: 30px;
	height: 50px;
	text-align: center;
	background: url("./img/user_icon.png") no-repeat;
	background-position:left 10px;
	background-size: 87%;
	float: left;
	margin-left: 10px;
}
.icon_fcc {
	display: inline-block;
	width: 30px;
	height: 50px;
	text-align: center;
	background: url("./img/password_icon.png") no-repeat;
	background-position:left 10px;
	background-size: 100%;
	float: left;
	margin-left: 10px;
}
.icon_in {
	display: inline-block;
	width: 75%;
	height: 50px;
	line-height: 50px;
	vertical-align: center;
}
.icon_in input {
	width: 100%;
	height: 100%;
	line-height: 50px;
	text-indent: 5px;
	background-color: #f6f6f6;
	font-size: 16px;
	border: none;
	outline: none;
}
.login_btn {
	width: 80%;
	margin: 40px auto;
	height: 50px;
	line-height: 50px;
	background-color: #f9536c;
	color: #fff;
	border-radius: 26px;
}
</style>
