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
                <div class="talk_title cooper">合作伙伴</div>
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
}
.tab .content_center{
    width: 100%;
    height: 15.4rem;
    background:url('../../assets/images/congressTopics/mtab.gif')  no-repeat center;
    background-size:100% 15.4rem
}
/* tab结束 */
.intrduce{
    width: 100%;
    font-family: SourceHanSansCN-Medium;
    background: #F5F5F5;
}
.intrduce .introduce_wrap{
    width: 100%x;
}
.intrduce .introduce_wrap .talk_title{
    color:#1577C9;
    height: 4.2rem;
    line-height: 4.2rem;
    font-weight: bold;
    text-align: center;
    font-size: 1.2rem;
    background: #fff;
}
.intrduce .introduce_wrap .cooper{
    margin-top: 1rem;
}
.intrduce .introduce_wrap .talk_con{
    padding: 0 1.5rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    background: #fff;
    padding-bottom:2.2rem;
}
.intrduce .introduce_wrap .talk_con .talk_conli{
    width:16.6rem;
    height:6.2rem;
    background:rgba(251,251,251,1);
    border:1px solid rgba(153,153,153,1);
    border-radius:10px;
    margin: 0.6rem 1.2rem 0 0;
    position: relative;
}
.intrduce .introduce_wrap .talk_con .talk_conli img{
    height: 5.8rem;
    width: 4.5rem;
    position: absolute;
    top: 0.3rem;
    left:50%;
    margin-left: -2.25rem;
}
.intrduce .introduce_wrap .talk_con .talk_conli:nth-child(2n+0){
    margin-right: 0;
}
</style>