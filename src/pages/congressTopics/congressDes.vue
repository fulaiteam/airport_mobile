<template>
    <div class='content' >
        <div class="tab">
            <div class="content_center">

            </div>
        </div>
        <div class="intrduce">
            <div class="introduce_wrap">
                <div class="intruduce_con">
                <div class="title">大会介绍</div>
                <div class="intr_con">
                    为进一步汇聚世界民航领先技术，搭建行业交流、资源共享、合作共赢的生态平台，挖掘潜在合作机遇，寻求最佳解决方案，推广自主创新产品，寻求提升技术创新能力的外部智力渠道，首都机场集团将于2020年10月10日举办首届“四型机场”技术创新大会。 届时首都机场集团将发布“四型机场”建设需求，国内大型机场集团、民航科研院所、技术设备厂商、互联网科创企业共聚一堂，分享技术创新成功经验，展示民航科创产品，开展供需对接交流。
                </div>
                <div class="onebox">
                    <div class="subtitle">
                        会议概要
                    </div>
                    <div class="subtitleline"></div>
                    <div class="sub_con">
                        <li>会议时间：2020年10月10日</li>
                        <li>会议主题：“科技赋能 智慧助力 高质量推进四型机场建设”</li>
                        <li>主办单位：首都机场集团</li>
                        <li>承办单位：北京首都机场广告有限公司</li>
                        <li>参会单位：首都机场集团、成员企业/机场，国内大型机场集团、民航科研院所、技术设备厂商、互联网科创企业</li>
                        <li>会议形式：线上会议及+云展览+1V1视频会谈</li>
                    </div>
                </div>
                <div class="onebox">
                    <div class="subtitle">
                        议程安排
                    </div>
                    <div class="subtitleline"></div>
                    <div class="sub_con box_table">
                        <img class="sty_table" src="../../assets/images/congressTopics/table.png" alt="">
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
               
            }
        },
        methods:{
            
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
.intrduce .intruduce_con .title{
    color: #1577C9;
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    height: 192px;
    line-height: 192px;
}
/* 会议概要，议程安排公共开始 */
.onebox{
    margin-top: 62px;
}
.subtitle{
    height: 45px;
    line-height: 45px;
    font-size: 24px;
    font-weight: bold;
}
.onebox .subtitleline{
    height: 1px;
    width: 1095px;
    background:url('../../assets/images/congressTopics/subtitleline.png')  no-repeat center;
}
.onebox .sub_con{
    margin-top: 38px;
}
/* 会议概要，议程安排公共结束 */
/* 会议概要单独样式开始 */
.onebox .sub_con li{
    list-style: none;
}
/* 会议概要单独样式结束 */
/* 议程安排单独样式开始 */
.onebox .box_table{
    display: flex;
    justify-content: center;
}
.sty_table{
    height: 510px;
    width: 1000px;
    margin-bottom: 81px;
}
/* 议程安排单独样式结束 */
/* 大会介绍结束 */
</style>