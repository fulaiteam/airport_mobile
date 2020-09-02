<template>
    <div class='content' >
        <div class="tab">
            <div class="content_center">

            </div>
        </div>
        <div class="intrduce">
            <div class="introduce_wrap">
                <div class="talk_title">云会谈</div>
                <div class="talk_con">
                    <div class="talk_conli" v-for="(item,index) in companyList" :key="index">
                        <img :src="item.img" alt="">
                        <div class="talk_text">
                            <div class="text">{{ item.name }}</div>
                            <div class="text">{{ item.theme }}</div>
                            <div class="text">{{ item.num }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                companyList:[
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                ]
            }
        },
        methods:{
          
        }
    }
</script>

<style scoped>
.content{
    width: 100%;
}
/* tab开始 */
.tab{
    width: 100%;
}
.tab .content_center{
    width: 100%;
    height: 15.4rem;
    background:url('../../assets/images/congressTopics/mtab.gif')  no-repeat center;
    background-size:100% 15.4rem;
}
/* tab结束 */
.intrduce{
    width: 100%;
    font-family: SourceHanSansCN-Medium;
    display: flex;
    justify-content: center;
}
.intrduce .introduce_wrap .talk_title{
    color:#1577C9;
    height: 5rem;
    line-height: 5rem;
    font-weight: bold;
    text-align: center;
    font-size: 1.2rem;
}
.intrduce .introduce_wrap .talk_con{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 5.4rem 2rem 5.4rem;
}
.intrduce .introduce_wrap .talk_con .talk_conli{
    width:26.6rem;
    height:10.9rem;
    border:1px solid rgba(153,153,153,1);
    border-radius:5px;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0.9rem;
}
.intrduce .introduce_wrap .talk_con .talk_conli:nth-child(2n+0){
    margin-right:0
}
.intrduce .introduce_wrap .talk_con .talk_conli img{
    width:9rem;
    height:9rem;
    border-radius:5px;
    margin: 0.9rem 0 0 1.1rem;
}
.intrduce .introduce_wrap .talk_con .talk_conli .talk_text{
    width: 10.9rem;
    margin-left: 2.5rem;
    margin-top: 1.1rem;
}
.intrduce .introduce_wrap .talk_con .talk_conli .talk_text .text{
    border-bottom:1px solid #999;
    height: 2.7rem;
    line-height: 2.7rem;
    text-align: center;
    font-size: 0.9rem;
    color: #333333;
}
</style>