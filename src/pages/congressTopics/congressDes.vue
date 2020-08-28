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
.content{
    background: #F5F5F5;
}
/* tab开始 */
.tab{
    width: 100%;
    background: #fff;
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
    font-family: SourceHanSansCN-Medium;
}

.intrduce .intruduce_con{
    width: 100%;
    background: #F5F5F5;
}
.intrduce .intruduce_con .title{
    width: 100%;
    color: #1577C9;
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
    height: 3.7rem;
    line-height: 3.7rem;
    background: #fff;
}
.intrduce .intruduce_con  .intr_con{
    font-size: 1rem;
    color: #535353;
    padding: 0 1.3rem 1.3rem 1.3rem;
    background: #fff;
}
/* 会议概要，议程安排公共开始 */
.onebox{
    margin-top: 1rem;
    background: #fff;
}
.subtitle{
    height: 3.4rem;
    line-height: 3.4rem;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0 1.5rem;
}
.onebox .subtitleline{
    height: 1px;
    width: 100%;
    background:url('../../assets/images/congressTopics/subtitleline.png')  no-repeat center;
}
.onebox .sub_con{
    padding: 1.9rem 1.5rem;
}
/* 会议概要，议程安排公共结束 */
/* 会议概要单独样式开始 */
.onebox .sub_con li{
    list-style: none;
}
/* 会议概要单独样式结束 */
/* 议程安排单独样式开始 */
.onebox .box_table{
    padding:2.3rem 0.5rem;
}
.sty_table{
    height: 19.7rem;
    width: 36.3rem;
}
/* 议程安排单独样式结束 */
/* 大会介绍结束 */
</style>