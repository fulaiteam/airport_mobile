<template>
    <div class='content'>
        <div class="content_con">
            <div class="center_box">
                <div class="title">企业名称</div>
                <div class="list">
                    <div class="subtitle">
                        <img src="../../assets/images/yunExhibitionhall/icon1.png" alt="">
                        <span>企业简介</span>
                    </div>
                    <div class="con">
                        首都机场集团公司（英文缩写CAH）隶属于中国民用航空局，是一家以机场业为核心的跨地域的大型国有企业集团。 公司旗下拥有北京、天津、江西、河北、吉林、内蒙古、黑龙江等8省（直辖市、自治区）所辖干支机场20多个，并参股沈阳、大连机场，2010年，首都机场集团公司实现旅客吞吐量1.43亿人次，为我国最大的机场集团。首都机场集团公司（英文缩写CAH）隶属于中国民用航空局，是一家以机场业为核心的跨地域的大型国有企业集团。 公司旗下拥有北京、天津、江西、河北、吉林、内蒙古、黑龙江等8省（直辖市、自治区）所辖干支机场20多个，并参股沈阳、大连机场，2010年，首都机场集团公司实现旅客吞吐量1.43亿人次，为我国最大的机场集团。
                    </div>
                </div>
                <div class="list">
                    <div class="subtitle">
                        <img src="../../assets/images/yunExhibitionhall/icon2.png" alt="">
                        <span>主营产品</span>
                    </div>
                    <div class="con_li">
                        <div class="li_box" v-for="(item,index) in productList" :key="index">
                            <div class="pro_title">{{ item.name }}</div>
                            <div class="pro_con">{{ item.con }}</div>
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
                productList:[
                    {name:'产品名称  产品名称',con:'工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事 1992.05－1993.07 北京市通县民政局干事 1993.07－1994.12 北京市通县政府办办事员.'},
                    {name:'产品名称  产品名称',con:'工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事 1992.05－1993.07 北京市通县民政局干事 1993.07－1994.12 北京市通县政府办办事员.'},
                    {name:'产品名称  产品名称',con:'工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事 1992.05－1993.07 北京市通县民政局干事 1993.07－1994.12 北京市通县政府办办事员.'},
                    {name:'产品名称  产品名称',con:'工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事 1992.05－1993.07 北京市通县民政局干事 1993.07－1994.12 北京市通县政府办办事员.'},
                    {name:'产品名称  产品名称',con:'工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事 1992.05－1993.07 北京市通县民政局干事 1993.07－1994.12 北京市通县政府办办事员.'},
                    {name:'产品名称  产品名称',con:'工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事 1992.05－1993.07 北京市通县民政局干事 1993.07－1994.12 北京市通县政府办办事员.'},
                ]
            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>
/* tab开始 */
.content{
    width: 100%;
    height: 1430px;
    box-sizing: border-box;
    
}
.content_con{
    width: 100%;
    display: flex;
    justify-content: center;
}
.center_box{
    width: 1200px;
}
/* 企业名称 */
.content_con .title{
    background:url('../../assets/images/yunExhibitionhall/cname.png')  no-repeat center;
    background-size: 100% 4.8rem;
    height: 106px;
    line-height: 106px;
    text-align: center;
    margin:0 80px;
    font-size:40px;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
    border-bottom:1px solid #fff;
    margin-bottom:30px
}
/* list公共样式开始 */
.list{
    margin-top: 50px;
}
.list .subtitle{
    width: 227px;
    height: 55px;
    line-height: 55px;
    font-size:30px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color: #fff;
    border-bottom: 1px solid #fff;
}
.list .subtitle img{
    height: 34px;
    width: 32px;
}
/* list公共样式结束 */
/* 企业简介开始 */
.list .con{
    width:1100px;
    height:130px;
    background:rgba(255,255,255,1);
    opacity:0.9;
    border-radius:10px;
    padding:25px 50px;
    color: #535353;
    font-size: 18px;
    margin-top: 20px;
}
/* 企业简介结束 */
/* 主营产品开始 */
.list .con_li{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 18px;
}
.list .con_li .li_box{
    width:319px;
    height:172px;
    background:rgba(255,255,255,1);
    opacity:0.9;
    border-radius:10px;
    margin:30px 30px 0 0;
    padding: 36px 25px 23px 25px;

}
.list .con_li .li_box:nth-child(3n+0){
    margin-right:0;
}
.list .con_li .li_box .pro_title{
    font-size:24px;
    font-family:Source Han Sans CN;
    font-weight:500;
    color: #333;
}
.list .con_li .li_box .pro_con{
    font-size:16px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(83,83,83,1);
    line-height:26px;
    color: #535353;
    margin-top: 30px;
}
/* 主营产品结束 */
</style>