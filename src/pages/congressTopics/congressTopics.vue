<template>
    <div class='content' >
        <div class="tab">
            <div class="content_center">

            </div>
        </div>
        <div class="intrduce">
            <div class="introduce_wrap">
                <div class="intruduce_con">
                    <div class="sub_box">
                        <div class="subtitle">
                            <img class="icon" src="../../assets/images/congressTopics/icon1.png" alt="">
                            <div class="title">大会介绍</div>
                        </div>
                        <img class="line" src="../../assets/images/congressTopics/intruline.png" alt="">
                    </div>
                    <div class="congress">
                        <div class="congress_li" v-for="(item,index) in congress1" :key="index">
                            <div class="title">{{ item.title }}</div>
                            <div class="time">{{ item.time }}</div>
                            <div class="but" @click="todes(1)">大会简介</div>
                        </div>
                    </div>
                </div>
                <div class="intruduce_con">
                    <div class="sub_box">
                        <div class="subtitle">
                            <img class="icon" src="../../assets/images/congressTopics/icon2.png" alt="">
                            <div class="title">主题大会</div>
                        </div>
                        <img class="line" src="../../assets/images/congressTopics/intruline.png" alt="">
                    </div>
                    <div class="congress">
                        <div class="congress_li" v-for="(item,index) in congress2" :key="index">
                            <div class="title">{{ item.title }}</div>
                            <div class="time">{{ item.time }}</div>
                            <div class="but"  @click="todes(2)">大会视频</div>
                        </div>
                    </div>
                </div>
                <div class="intruduce_con">
                    <div class="sub_box">
                        <div class="subtitle">
                            <img class="icon" src="../../assets/images/congressTopics/icon3.png" alt="">
                            <div class="title">主旨发言</div>
                        </div>
                        <img class="line" src="../../assets/images/congressTopics/intruline.png" alt="">
                    </div>
                    <div class="congress">
                        <div class="congress_li" v-for="(item,index) in congress3" :key="index">
                            <div class="title">{{ item.title }}</div>
                            <div class="time">{{ item.time }}</div>
                            <div class="but"  @click="todes(3)">观看视频</div>
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
                congress1:[
                    {title:'科技赋能 智慧助力 高质量推进四型机场建设',time:"2020年10月10日"}
                ],
                congress2:[
                    {title:'开幕式',time:"2020年10月10日"},
                    {title:'论坛',time:"2020年10月10日"},
                    {title:'闭幕式',time:"2020年10月10日"},
                ],
                congress3:[
                    {title:'科技赋能 智慧助力 高质量推进四型机场建设',time:"2020年10月10日"},
                    {title:'科技赋能 智慧助力 高质量推进四型机场建设',time:"2020年10月10日"},
                    {title:'科技赋能 智慧助力 高质量推进四型机场建设',time:"2020年10月10日"},
                    {title:'科技赋能 智慧助力 高质量推进四型机场建设',time:"2020年10月10日"},
                    {title:'科技赋能 智慧助力 高质量推进四型机场建设',time:"2020年10月10日"},
                    {title:'科技赋能 智慧助力 高质量推进四型机场建设',time:"2020年10月10日"}
                ]
            }
        },
        methods:{
            // 跳转到大会的简介的页面
            todes(val){
                if(val == 1){
                    this.$router.push({name: 'congressDes'});
                }else if(val == 2){
                    this.$router.push({name: 'congressVideo'});
                }else if(val == 3){
                    this.$router.push({name: 'CongressKeynotespeech'});
                }
                
            }
        }
    }
</script>

<style scoped>
.content{
    background: #F5F5F5;
}
/* tab开始 */
.tab{
    width: 100%;
    height: 15.4rem;
    background:#333333;
}
.tab .content_center{
    width: 100%;
    height: 15.4rem;
    background:url('../../assets/images/congressTopics/mtab.gif')  no-repeat center;
    background-size: 100% 15.4rem;
}
/* tab结束 */
/* 大会介绍开始 */
.intrduce{
    width: 100%;
    color: #535353;
}
.intrduce .intruduce_con{
    width: 100%;
    padding: 0 1.5rem;
    background: #fff;
    margin-bottom: 1rem;
}
.sub_box{
    display: flex;
    flex-direction: column;
    padding-top: 2.2rem;
}
.intrduce .intruduce_con .subtitle{
    display: flex;
    justify-content: flex-start;
    height: 2.6rem;
    line-height: 1.6rem;
}
.intrduce .intruduce_con .subtitle .icon{
    width: 1.5rem;
    height: 1.5rem;
}
.intrduce .intruduce_con .subtitle .title{
    color: #155BA5;
    font-size: 1.2rem;
    font-weight: 500;
    margin-left: .7rem;
}
.line{
    height: 1px;
    width: 13.8rem;
}
/* 各大会的框开始 */
.congress{
    margin-top: 2.4rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.congress .congress_li{
    height: 9.4rem;
    width: 15.7rem;
    margin-top: 2.4rem;
    border: 1px solid #ccc;
    box-shadow:0px 2px 2px 0px rgba(8,1,3,0.15);
    margin-right:1.5rem;
    border-radius: 6px;
    padding: 0.4rem;
    font-family: SourceHanSansCN-Regular;
}
.congress .congress_li:nth-child(2n+0){
    margin-right: 0;
}
.congress .congress_li:nth-child(-n+2){
    margin-top: 0;
}
.congress .congress_li:last-child{
    margin-bottom: 3.2rem;
}
.congress .congress_li .title{
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    margin-top: 1rem;
}
.congress .congress_li .time{
    font-size: 0.9rem;
    color: #666666;
    margin-top: 0.8rem;
}
.congress .congress_li .but{
    width:5.1rem;
    height:1.3rem;
    line-height: 1.3rem;
    background:rgba(23,116,229,1);
    border-radius:14px;
    font-size:0.9rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    margin-top: 0.8rem;
    padding: 0.2rem 0.5rem;
}

/* 各大会的框结束 */
/* 大会介绍结束 */
</style>