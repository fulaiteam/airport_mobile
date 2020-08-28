<template>
    <div class='content' >
        <div class="tab">
            <div class="content_center">

            </div>
        </div>
        <div class="intrduce">
            <div class="introduce_wrap">
                <div class="talk_title">战略合作伙伴</div>
                <div class="talk_con">
                    <div class="talk_conli" v-for="(item,index) in cooperativeList" :key="index">
                        <img @click="todes()" :src="item.img" alt="">
                    </div>
                </div>
                <div class="talk_title">合作伙伴</div>
                <div class="talk_con">
                    <div class="talk_conli" v-for="(item,index) in cooperList" :key="index">
                        <img @click="todes()" :src="item.img" alt="">
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
                cooperativeList:[
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                ],
                cooperList:[
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                    {img:require("../../assets/images/cloudTalk/talk.png")},
                ]
            }
        },
        methods:{
            todes(){
                this.$router.push({name:'cooperativeDes'})
                
            }
        }
    }
</script>

<style scoped>
.content{
    width: 100%;
}
/* tab开始 */
.tab{
    padding: 0;
    margin: 0;
    width: 100%;
    background:#333333;
    display: flex;
    justify-content: center;
}
.tab .content_center{
    width: 1200px;
    height: 500px;
    background:url('../../assets/images/congressTopics/tab.png')  no-repeat center;
}
/* tab结束 */
.intrduce{
    width: 100%;
    font-family: SourceHanSansCN-Medium;
    display: flex;
    justify-content: center;
    color: #535353;
    font-size: 18px;
}
.intrduce .introduce_wrap{
    width: 1200px;
    margin-bottom: 160px;
}
.intrduce .introduce_wrap .talk_title{
    color:#1577C9;
    height: 170px;
    line-height: 200px;
    font-weight: bold;
    text-align: center;
    font-size: 30px;
}
.intrduce .introduce_wrap .talk_con{
    padding: 0 40px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.intrduce .introduce_wrap .talk_con .talk_conli{
    width:350px;
    height:130px;
    background:rgba(251,251,251,1);
    border:1px solid rgba(153,153,153,1);
    border-radius:10px;
    margin: 22px 29px 0 0;
    position: relative;
}
.intrduce .introduce_wrap .talk_con .talk_conli img{
    height: 117px;
    width: 90px;
    position: absolute;
    top: 5px;
    left:50%;
    margin-left: -45px;
}
.intrduce .introduce_wrap .talk_con .talk_conli:nth-child(3n+0){
    margin-right: 0;
}
</style>