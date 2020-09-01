<template>
    <div class="content">
        <div class="tab">
            <div class="content_center">

            </div>
        </div>
        <div class="login_wrap">
            <div class="login" @keyup.enter="hjSubmite('user')">
                <div class="login_center">欢迎登录</div>
                <el-form
                    class="login_box"
                    ref="user"
                    :model="user"
                    :rules="rules2">
                    <div class="role">观众</div>
                    <div class="message">
                        <div class="mes_box">
                            <el-form-item class="mes_li" label="手机号" prop="phone">
                                <input type="text" placeholder="" class="mes_text" v-model="user.phone">
                            </el-form-item>
                            <el-form-item class="mes_li" label="验证码" prop="pas">
                                <input type="password" placeholder="" class="mes_text mes_text_short" v-model="user.pas">
                                <img class="checked" v-if="codeShow" @click="validateBtn()" src="../assets/images/login/checked.png" alt="">
                                <div class="checked checkTime" v-if="!codeShow">{{ btnTitle }}</div>
                            </el-form-item>
                            <div class="mes_but">
                                <div class="but">
                                    <img @click="hjSubmite('user')" src="../assets/images/login/login.png" alt="">
                                </div>
                                <div class="but">
                                    <img @click="torregister()" src="../assets/images/login/register.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        validateNull, 
        validateLength, 
        validateSpace, 
        validateSpecial,
        validateMobile,
        validateNumber
    } from '../assets/javascript/validate.js';
    export default {
        name: "login",
        data() {
            return {
                codeShow:true,
                btnTitle:'',
                user: {
                    phone: '',
                    pas: ''
                },
                rules2: {   // 表单验条件
                    phone: [
                        {validator: validateNull, trigger: 'blur'},//表单验证填写（必填项不能为空）
                        {validator: validateLength, trigger: 'blur'},//表单验证填写（长度验证）
                        {validator: validateSpace, trigger: 'blur'},//表单中出现空格验证
                        {validator: validateSpecial, trigger: 'blur'},  //表单中输入中出现特殊字符
                        {validator: validateMobile, trigger: 'blur'}   //手机号验证
                        
                    ],
                    pas: [
                        {validator: validateNull, trigger: 'blur'},//表单验证填写（必填项不能为空）
                        {validator: validateLength, trigger: 'blur'},//表单验证填写（长度验证）
                        {validator: validateSpace, trigger: 'blur'},//表单中出现空格验证
                        {validator: validateNumber, trigger: 'blur'}//表单验证填写 (必须为数字)
                    ]
                }
            }
        },
        created() {
            // this.changfouce();
        },
        methods: {  
            hjSubmite(formName) {
                // 管理登陆方法.
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this._ajax('', {
                            account: this.user.name,
                            password: this.user.pas
                        }, data => {
                            console.log(data);
                            window.sessionStorage.setItem('bear', JSON.stringify(data));
                            this.$router.push({name: 'Home'});
                        })
                        // this.$router.push({name: 'Home'});
                    } else {
                        return false;
                    }
                });
            },
            torregister(){
                this.$router.push({name: 'register'});
            },
            validateBtn(){
                //倒计时
                let time = 60;
                let timer = setInterval(() => {
                    if(time == 0) {
                        clearInterval(timer);
                        this.codeShow = true;
                    } else {
                        this.codeShow = false;
                        this.btnTitle = time + '秒后重试';
                        time--
                    }
                },1000)
            },
        }
    }
</script>

<style scoped>
/* tab开始 */
.tab{
    width: 100%;
    background:#333333;
    display: flex;
    justify-content: center;
    height: 15.4rem;
}
.tab .content_center{
    width: 100%;
    height: 15.4rem;
    background:url('../assets/images/congressTopics/mtab.gif')  no-repeat center;
    background-size:100% 15.4rem;
}
/* tab结束*/
.login_wrap{
    width: 100%;
    display: flex;
    justify-content: center;
    height: 27.4rem;
} 
.login{
    width: 34.5rem;
    height: 19.2rem;
}
.login .login_center{
    text-align: center;
    font-size:1.2rem;
    height: 5rem;
    line-height: 5rem;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:#155BA5;
   
}
.login_box{
    height: 19.2rem;
    width: 34.5rem;
    box-shadow:0 1px 3px #999;
    border-radius: 10px;
    background:url('../assets/images/login/loginback.png')  no-repeat center;
    background-size:34.5rem 19.2rem;
}
.login .login_box .role{
    font-size: 1rem;
    text-align: center;
    color: #535353;
    height: 4rem;
    line-height: 4rem;
}
.login .login_box .message{
    display: flex;
    justify-content: center;
}
.mes_box{
    width: 25rem;
    margin-top: 1rem;
}
.login .login_box .message .mes_li{
    height: 4rem;
    line-height:4rem;
    display: flex;
    justify-content: flex-start;
    align-items:flex-end;
    position: relative;
    font-size: 1rem !important;
    
}
.login .login_box .message .mes_li .mes_text{
    width: 18.4rem;
    height: 3rem;
    border-width: 0;
    border-bottom-width: 1px;
    border-bottom-color: #999;
    outline:none;

}
.el-form-item{
    margin-bottom: 1rem !important;
}

.el-form-item__label{
    font-size: 1rem !important;
    color: #999999 !important;
}
.login .login_box .message .mes_li .mes_text_short{
    width: 11.7rem;
}
.checked{
    height: 1.4rem;
    width: 6.8rem;
    position: absolute;
    top: 1.5rem;
    right: -7.2rem;
}
.login .login_box .message .mes_but{
    display: flex;
    justify-content: space-around;
    margin-top: 2.2rem;
}
.login .login_box .message .but{
    height: 1.5rem;
    width: 6.3rem;
}
.login .login_box .message .but img{
    height: 1.5rem;
    width: 6.3rem;
}
.checkTime{
    height: 1.4rem;
    width: 6.8rem;
    border-radius: 0.6rem;
    border: 1px solid #999;
    line-height: 1.4rem;
    color: #999;
    text-align: center;
    font-size: 0.8rem;
}
</style>
