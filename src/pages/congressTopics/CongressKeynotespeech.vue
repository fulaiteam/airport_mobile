<template>
    <div class='content' >
        <div class="intrduce">
            <div class="introduce_wrap">
                <div class="intruduce_con">
                    <div class="title">{{ title }}</div>
                    <div>
                        <video  class="videoBox" width="100%" height="34.5rem" controls>
                            <source src="../../assets/images/congressTopics/test123.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="eval">
                        <div class="eval_title">发言摘要</div>
                        <textarea class="eval_box" :value="textCon" placeholder="发言内容"></textarea>
                    </div>
                    <div class="con_intro">企业介绍</div>
                    <div class="con_con">首都机场集团公司（英文缩写CAH）隶属于中国民用航空局，是一家以机场业为核心的跨地域的大型国有企业集团。 公司旗下拥有北京、天津、江西、河北、吉林、内蒙古、黑龙江等8省（直辖市、自治区）所辖干支机场20多个，并参股沈阳、大连机场，2010年，首都机场集团公司实现旅客吞吐量1.43亿人次，为我国最大的机场集团。</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
               title:"主旨发言",
               evalutionList:[
                   {acount:"15066666666",time:"2018.05.24",con:'这个视频666',liked:false,num:0},
                   {acount:"15066666666",time:"2018.05.24",con:'这个视频666',liked:true,num:1},
                   {acount:"15066666666",time:"2018.05.24",con:'这个视频666',liked:true,num:5},
               ],
                textCon:""
            }
        },
        methods:{
            // 提交评论信息
            submit(){
                console.log('提交评论')
            }
        }
    }
</script>

<style scoped>

.intrduce{
    width: 100%;
    background: #F5F5F5;
}
.intrduce .intruduce_con{
    width: 100%;
}
.intrduce .intruduce_con .title{
    color: #1577C9;
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
    margin-top: 0.6rem;
    height: 4.2rem;
    line-height: 4.2rem;
    font-family:Source Han Sans CN;
    background: #fff;
}
/* 视频 */
.videoBox{
    height: 19.4rem;
    width: 34.5rem;
    padding: 0 1.4rem 2.3rem 1.4rem;
    background: crimson;
    object-fit: fill;
    display: flex;
    justify-content: center;
    background: #fff;
}
/* 填写评论的框开始 */
.eval{
    position: relative;
    background:#fff;
    margin-top: 1rem;
}
.eval_box{
    width:33.7rem;
    height:8.7rem;
    margin: 1rem 1.4rem;
    background:#F4F4F4;
    opacity:0.7;
    border-radius:10px;
    font-size:0.9rem;
    color: #979797;
    border: none;
    padding: 3.6rem 0.5rem 0 0.5rem;
    text-align: center;
}
/* 填写评论的框结束 */
.eval_title{
    position: absolute;
    top: 2.2rem;
    left:50%;
    margin-left:-2.5rem;
    font-size:20px;
    color:#333333;
    z-index:999;
    font-size:1.2rem
}
/* 企业介绍开始 */
.con_intro{
    color: #1577C9;
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
    height: 2.6rem;
    line-height: 2.6rem;
    background: #fff;
}
.con_con{
    padding:2.2rem 1.5rem;
    background: #fff;
    font-size:1rem;
    font-weight:400;
    color:rgba(83,83,83,1);
}
/* 企业介绍结束 */
</style>