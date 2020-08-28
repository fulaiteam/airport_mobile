<template>
    <div class='content'>
        <div class="intrduce">
            <div class="introduce_wrap">
                <div class="intruduce_con">
                    <div class="title">合作伙伴项下企业介绍标题</div>
                </div>
                <div class="companyImg">
                    <img class="comImg" src="../../assets/images/yunExhibitionhall/hall.png" alt="">
                </div>
                <div class="business_outline">
                    <div class="bo_con">
                        华为智慧机场数据中心解决方案，近年来，智慧机场理念已得到业内的普遍认可，并开始逐步付诸实践。数字化协作、云计算和大数据等新ICT技术带来的变革将赋予传统ICT系统所不具备的能力，重构机场的信息流，在智慧机场的运营安全保障、机场运行效率、面向旅客及企业的服务质量等方面将带来显著效益。
                    </div>
                    <div class="bussiness_img">
                        <img src="../../assets/images/cloudTalk/sec.png" alt="">
                        <img src="../../assets/images/cloudTalk/sec.png" alt="">
                    </div>
                    <div class="bo_con">
                        华为智慧机场数据中心解决方案，近年来，智慧机场理念已得到业内的普遍认可，并开始逐步付诸实践。数字化协作、云计算和大数据等新ICT技术带来的变革将赋予传统ICT系统所不具备的能力，重构机场的信息流，在智慧机场的运营安全保障、机场运行效率、面向旅客及企业的服务质量等方面将带来显著效益。
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
    font-family:Source Han Sans CN;
    background: #F5F5F5;
}
/* 云展馆企业名称开始 */
.intrduce{
    width: 100%;
}
.intrduce .intruduce_con{
    width: 100%;
    background: #fff;
}
/* 标题 */
.intrduce .intruduce_con .title{
    color: #1577C9;
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
    height: 5.5rem;
    line-height: 5.5rem;
}
/* 公司图片 */
.companyImg{
    height: 13.5rem;
    width: 100%;
    padding: 0 5.4rem;
    background: #fff;
}
.comImg{
   height: 13.5rem;
   width: 26.5rem;
}
/* 企业概况 */
.business_outline{
    width: 100%;
    margin-bottom:4rem;
}
.business_outline .bo_con{
    color: #666;
    font-size: 1rem;
    background: #fff;
    padding: 2.8rem 1.5rem 1.9rem 1.5rem;
}
.business_outline .bo_img{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 80px;
}
.bussiness_img{
    display: flex;
    justify-content: flex-start;
    margin-top: 1rem;
    background: #fff;
    padding: 2.3rem 1.6rem 0 1.6rem;
}
.bussiness_img img{
    height: 9rem;
    width: 16.5rem;
    margin-right: 1.3rem;
}
.bussiness_img img:last-child{
    margin: 0;
}
</style>