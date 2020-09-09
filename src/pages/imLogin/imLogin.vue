<template>
 <div>
       <input v-model="username"  placeholder="用户名"/>
                <input v-model="password"  type="password" placeholder="密码" required/>
            <button type="default" @click="toLogin" >登录</button>
 </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";
export default{
	data(){
		return {
			username: "",
			password: "",
			nickname: ""
		};
	},
	components: {},
	computed: {
		isRegister(){
			return this.$store.state.login.isRegister;
		},
	},
	methods: {
		...mapActions(["onLogin", "setRegisterFlag", "onRegister"]),
		toLogin(){
			this.onLogin({
				username: this.username.toLowerCase(),
				password: this.password
			});
		},
		toRegister(){
			this.onRegister({
				username: this.username.toLowerCase(),
				password: this.password,
				nickname: this.nickname.toLowerCase(),
			});
		},
		changeType(){
			this.setRegisterFlag(!this.isRegister);
		}
	}
};
</script>

<style  scoped>
.chat_room_area{
	width:1200px;
	margin:100px auto;
	overflow: hidden;
}
.chat_room{
	margin-left:30px;
	margin-top:30px;
	width:200px;
	height:300px;
	float:left;
	background:pink;
}
</style>