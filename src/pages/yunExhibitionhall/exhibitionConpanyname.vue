<template>
    <div class='content'>
        <div class="intrduce">
            <div class="introduce_wrap">
                <div class="intruduce_con">
                    <div class="title">云展馆企业名称</div>
                </div>
                <div class="companyImg">
                    <img src="../../assets/images/yunExhibitionhall/companyImg.png" alt="">
                </div>
                <div class="business_outline">
                    <div class="bo_title">企业概况</div>
                    <div class="bo_con">
                        北京空港赛瑞安防科技有限公司是首都机场集团公司旗下的北京首都机场航空安保有限公司的全资子公司，是集生产、研发、销售、维护为一体的专业从事民航安防技术管理及相关专业系统集成的科技型企业。
                    </div>
                    <div class="bo_img">
                        <img src="../../assets/images/yunExhibitionhall/business_outline.png" alt="">
                    </div>
                </div>
                <div class="business_outline">
                    <div class="bo_title">企业特色</div>
                    <div class="bo_con">
                        北京空港赛瑞安防科技有限公司是首都机场集团公司旗下的北京首都机场航空安保有限公司的全资子公司，是集生产、研发、销售、维护为一体的专业从事民航安防技术管理及相关专业系统集成的科技型企业。
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
}
/* 标题 */
.intrduce .intruduce_con .title{
    color: #1577C9;
    background: #fff;
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
    height: 4.4rem;
    line-height: 4.4rem;
}
/* 公司图片 */
.companyImg{
    height: 13.5rem;
    background: #fff;
    display: flex;
    justify-content: center;
}
.companyImg img{
   height: 13.5rem;
    width: 26.5rem;
}
/* 企业概况 */
.business_outline{
    
}
.business_outline .bo_title{
    text-align: center;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 1rem;
    color: #535353;
    font-weight:bold;
    background: #fff;
    border-bottom:1px solid #D5D5D5;
    padding-top: 1.7rem;
}
.business_outline .bo_con{
    color: #333333;
    font-size: 1rem;
    padding: 1.1rem 1.5rem 2.4rem 1.5rem;
    background: #fff;
}
.business_outline .bo_img{
    width: 100%;
    height: 15.1rem;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    background: #fff;
}
.business_outline .bo_img img{
    height: 13.5rem;
    width: 26.5rem;
    margin-top: 1.3rem;
}
</style>