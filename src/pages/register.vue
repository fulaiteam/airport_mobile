<template>
    <div class="content">
        <div class="tab">
            <div class="content_center">

            </div>
        </div>
        <div class="login_wrap">
            <div class="login" @keyup.enter="hjSubmite('user')">
                <div class="login_center">注册</div>
                <el-form
                    class="login_box"
                    ref="user"
                    :model="user"
                    :rules="rules2">
                    <div class="role">观众</div>
                    <div class="message">
                        <div class="mes_box">
                            <el-form-item class="mes_li" 
                                label="单  位" 
                                prop="danwei">
                                <label slot="label">单&nbsp;&nbsp;&nbsp;位</label>
                                <input type="text" placeholder="" class="mes_text" v-model="user.danwei">
                            </el-form-item>
                            <el-form-item class="mes_li" label="姓     名" prop="name">
                                <label slot="label">姓&nbsp;&nbsp;&nbsp;名</label>
                                <input type="text" placeholder="" class="mes_text" v-model="user.name">
                            </el-form-item> 
                            <el-form-item class="mes_li" label="邮     箱" prop="email">
                                <label slot="label">邮&nbsp;&nbsp;&nbsp;箱</label>
                                <input type="text" placeholder="" class="mes_text" v-model="user.email">
                            </el-form-item>
                            <el-form-item class="mes_li" label="手机号" prop="phone">
                                <input type="text" placeholder="" class="mes_text" v-model="user.phone">
                            </el-form-item>
                            <el-form-item class="mes_li" label="验证码" prop="pas">
                                <input type="password" placeholder="" class="mes_text mes_text_short" v-model="user.pas">
                                <img class="checked" v-if="codeShow" @click="validateBtn()" src="../assets/images/login/sendmes.png" alt="">
                                <div class="checked checkTime" v-if="!codeShow">{{ btnTitle }}</div>
                            </el-form-item>
                            <div class="mes_but">
                                <div class="but">
                                    <img @click="hjSubmite('user')" src="../assets/images/login/register.png" alt="">
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
        validateEmail,
        validateNumber
    } from '../assets/javascript/validate.js';
    export default {
        name: "login",
        data() {
            return {
                codeShow:true,
                btnTitle:'',
                user: {
                    danwei:'',
                    name:'',
                    email:'',
                    phone: '',
                    pas: ''
                },
                rules2: {   // 表单验条件
                    danwei:[
                        {validator: validateNull, trigger: 'blur'},//表单验证填写（必填项不能为空）
                        {validator: validateLength, trigger: 'blur'},//表单验证填写（长度验证）
                    ],
                    name:[
                        {validator: validateNull, trigger: 'blur'},//表单验证填写（必填项不能为空）
                        {validator: validateLength, trigger: 'blur'},//表单验证填写（长度验证）
                    ],
                    email:[
                        {validator: validateNull, trigger: 'blur'},//表单验证填写（必填项不能为空）
                        {validator: validateEmail, trigger: 'blur'},//表单中输入邮箱验证
                    ],
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
        methods: {
            hjSubmite(formName) {
                // 管理登陆方法.
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this._ajax('admin/adminLogin', {
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
}
.tab .content_center{
    width: 100%;
    height: 15.4rem;
    background:url('../assets/images/congressTopics/mtab.gif')  no-repeat center;
    background-size: 100% 15.4rem;
}
/* tab结束*/
.login_wrap{
    width: 100%;
    display: flex;
    justify-content: center;
}
.login{
    width: 100%;
    height: 38.4rem;
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
    height: 30.9rem;
    width: 34.4rem;
    background:url('../assets/images/login/registerback.png')  no-repeat center;
    background-size: 34.4rem 30.9rem;
    margin-left: 1.5rem;
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
    margin-top: 2rem;
    margin-left: 1.5rem;
}
.login .login_box .message .mes_li{
    width: 25.1rem;
    height: 2.4rem;
    line-height: 2.4rem;
    display: flex;
    justify-content: flex-start;
    align-items:flex-end;
    position: relative;
}
.login .login_box .message .mes_li .mes_text{
    width: 18.4rem;
    height: 2rem;
    border-width: 0;
    border-bottom-width: 1px;
    border-bottom-color: #999;
    outline:none;
}
.login .login_box .message .mes_li .mes_text_short{
    width: 11.7rem;
}
.el-form-item{
    margin-bottom: 2.2rem !important;
}

.checked{
    height: 1.4rem;
    width: 6.2rem;
    position: absolute;
    top: 1.5rem;
    right: -7rem;
}
.login .login_box .message .mes_but{
    display: flex;
    justify-content: space-around;
}
.login .login_box .message  .but{
    height: 1.4rem;
    width: 6.2rem;
}
.login .login_box .message .but img{
    height: 1.4rem;
    width: 6.2rem;
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
