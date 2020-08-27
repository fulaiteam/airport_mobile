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
                    {title:'科技赋能 智慧助力 高质量推进四型机场建设',time:"2020年10月10日"},
                    {title:'科技赋能 智慧助力 高质量推进四型机场建设',time:"2020年10月10日"}
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
/* 大会介绍开始 */
.intrduce{
    width: 100%;
    font-family: SourceHanSansCN-Medium;
    display: flex;
    justify-content: center;
    color: #535353;
    font-size: 18px;
}
.intrduce .intruduce_con{
    width: 1095px;
    margin: 0 52.5px;
}
.intruduce_con:last-child{
    margin-bottom:166px;
}
.sub_box{
    display: flex;
    flex-direction: column;
}
.intrduce .intruduce_con .subtitle{
    display: flex;
    justify-content: flex-start;
    margin-top: 71px;
    height: 56px;
    line-height: 56px;
    color: #333333;
    font-size: 30px;
}
.intrduce .intruduce_con .subtitle .icon{
    width: 31px;
    height: 31px;
    margin: 11px 14px;
}
.line{
    height: 1px;
    width: 277px;
}
/* 各大会的框开始 */
.congress{
    margin-top: 49px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.congress .congress_li{
    height: 152px;
    width: 299px;
    border: 1px solid #ccc;
    box-shadow:0px 2px 18px 0px rgba(8,1,3,0.15);
    margin-right:20px;
    border-radius: 6px;
    padding: 18px 25px;
    font-family: SourceHanSansCN-Regular;
    margin-top: 22px;
}
.congress .congress_li:nth-child(3n+0){
    margin-right: 0;
}
.congress .congress_li:nth-child(-n+3){
    margin-top: 0;
}
.congress .congress_li .title{
    font-size: 24px;
    font-weight: bold;
    color: #333;
}
.congress .congress_li .time{
    font-size: 18px;
    color: #666666;
    margin-top: 15px;
}
.congress .congress_li .but{
    width:102px;
    height:27px;
    line-height: 27px;
    background:rgba(23,116,229,1);
    border-radius:14px;
    font-size:18px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    margin-top: 27px;
}

/* 各大会的框结束 */
/* 大会介绍结束 */
</style>