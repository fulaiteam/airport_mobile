<template>
    <div class='content' >
        <div class="intrduce">
            <div class="introduce_wrap">
                <div class="intruduce_con">
                    <div class="title">{{ title }}</div>
                    <video class="videoBox" src="../../assets/images/congressTopics/test123.mp4"></video>
                    <div class="eval">
                        <div class="eval_title">发言摘要</div>
                        <textarea class="eval_box" :value="textCon"></textarea>
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
    font-family: SourceHanSansCN-Medium;
    display: flex;
    justify-content: center;
    color: #535353;
    font-size: 18px;
}
.intrduce .intruduce_con{
    width: 1200;
}
.intrduce .intruduce_con .title{
    color: #1577C9;
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    height: 192px;
    line-height: 192px;
    font-family:Source Han Sans CN;
}
/* 视频 */
.videoBox{
    height: 675px;
    width: 1200px;
    background: crimson;
    object-fit: fill;
    display: flex;
    justify-content: center;
}
/* 填写评论的框开始 */
.eval{
    position: relative;
}
.eval_box{
    width:1146px;
    height:163px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(67,67,67,1);
    opacity:0.7;
    border-radius:10px;
    font-size:26px;
    color: #979797;
    padding: 23px 27px;
    margin-top: 52px;
    padding-top: 50px;
}
/* 填写评论的框结束 */
.eval_title{
    position: absolute;
    top: 67px;
    left:50%;
    margin-left:-42px;
    font-size:20px;
    color:#999999;
    z-index:999
}
/* 企业介绍开始 */
.con_intro{
    color: #1577C9;
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    height: 192px;
    line-height: 192px;
}
.con_con{
    width: 1095px;
    padding:0 52.5px;
    font-size:18px;
    font-weight:400;
    color:rgba(83,83,83,1);
    margin-bottom: 160px;
}
/* 企业介绍结束 */
</style>