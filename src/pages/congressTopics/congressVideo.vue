<template>
    <div class='content' >
        <div class="intrduce">
            <div class="introduce_wrap">
                <div class="intruduce_con">
                    <div class="title">{{ title }}</div>
                    <video class="videoBox" src="../../assets/images/congressTopics/test123.mp4"></video>
                    <div class="title">评价</div>
                    <div class="evalution_li" v-for="(item,index) in evalutionList" :key="index">
                        <div class="acount">{{ item.acount }}</div>
                        <div class="time">{{ item.time }}</div>
                        <div class="content">{{ item.con }}</div>
                        <div :class="{ 'good':true, 'goods':item.liked}">
                            <img v-if="!item.liked" class="icon" src="../../assets/images/congressTopics/good.png" alt="">
                            <img v-if="item.liked" class="icon" src="../../assets/images/congressTopics/goods.png" alt="">
                            <span v-if="item.num != 0">+{{ item.num }}</span>
                            赞
                        </div>
                    </div>
                    <textarea class="eval_box" placeholder="我也来说几句" :value="textCon"></textarea>
                    <div class="submit_but">
                        <img @click="submit()" src="../../assets/images/congressTopics/submit.png" alt="">
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
               title:"首都机场集团第一届“四型机场”技术创新大会",
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
}
/* 评论 */
.evalution_li{
    border-bottom:1px solid #CBCBCB;
    margin: 53px 80px;
    color:#2F2F2F;
    font-size: 28px;
}
.evalution_li .acount{
    margin-left: 32px;
}
.evalution_li .time{
    margin-left: 32px;
    font-size: 25px;
    color: #B7B7B7;
}
.evalution_li .content{
    margin-left: 32px;
    margin-top: 37px;
    margin: 37px 0 0 32px;
}
.good{
    display: flex;
    justify-content: flex-end;
    color: #8B8B8B;
    font-size: 25px;
    margin-bottom: 29px;
    position: relative;
}
.good span{
    position: absolute;
    right: 29px;
    top: -17px;
    font-size: 18px;
}
.goods{
    color: #FF5353;
    font-size: 25px;
}
.good img{
    margin: 0 16px;
}
/* 填写评论的框开始 */
.eval_box{
    width:1146px;
    height:163px;
    background:rgba(232,232,232,1);
    opacity:0.7;
    border-radius:10px;
    font-size:26px;
    color: #979797;
    padding: 23px 27px;
}
/* 填写评论的框结束 */
/* 提交的按钮开始 */
.submit_but{
    display: flex;
    justify-content: center;
    margin: 55px 0 247px 0;
}
/* 提交的按钮结束 */
</style>