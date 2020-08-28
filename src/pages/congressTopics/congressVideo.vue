<template>
    <div class='content' >
        <div class="intrduce">
            <div class="introduce_wrap">
                <div class="intruduce_con">
                    <div class="title">{{ title }}</div>
                    <video class="videoBox" src="../../assets/images/congressTopics/test123.mp4"></video>
                    <div class="eva_title">评价</div>
                    <textarea class="eval_box" placeholder="我也来说几句" :value="textCon"></textarea>
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
                    <!-- <div class="submit_but">
                        <img @click="submit()" src="../../assets/images/congressTopics/submit.png" alt="">
                    </div> -->
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
}
.intrduce .intruduce_con{
    width: 100%;
    margin-bottom:2.3rem;
}
.intrduce .intruduce_con .title{
    color: #1577C9;
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
    height: 5.2rem;
    line-height: 5.2rem;
    font-family:Source Han Sans CN;
}
/* 视频 */
.videoBox{
    height: 19.4rem;
    width: 34.5rem;
    margin: 0 1.5rem;
    background: crimson;
    object-fit: fill;
}
/* 评论 */
.intrduce .intruduce_con .eva_title{
    width: 100%;
    color: #4374EF;
    font-size: 1.4rem;
    text-align: center;
    height: 4rem;
    line-height: 4rem;
    box-shadow: 0 0.3rem 0.3rem #ddd;
}
.evalution_li{
    border-bottom:1px solid #CBCBCB;
    padding: 0 1.6rem;
    color:#2F2F2F;
    font-size: 1.3rem;
}
.evalution_li .acount{
    margin-top:1.2rem
}
.evalution_li .time{
    font-size: 0.8rem;
    color: #B7B7B7;
}
.evalution_li .content{
    margin: 1.5rem 1.9rem;
}
.good{
    display: flex;
    justify-content: flex-end;
    color: #8B8B8B;
    position: relative;
    font-size: 1.2rem;
    margin-bottom:1.4rem
}
.good span{
    position: absolute;
    right: 2rem;
    top: -1.5rem;
    font-size: 1.2rem;
}
.goods{
    color: #FF5353;
    font-size: 1.2rem;
}
.good img{
    margin: 0 16px;
    height: 2rem;
    width: 2rem;
}
/* 填写评论的框开始 */
.eval_box{
    width:30.6rem;
    height:3.7rem;
    line-height: 3.7rem;
    text-align: center;
    border: none;
    background:rgba(232,232,232,1);
    opacity:0.7;
    border-radius:10px;
    font-size:1.4rem;
    color: #979797;
    margin: 1.8rem 3.4rem;
}
/* 填写评论的框结束 */
</style>