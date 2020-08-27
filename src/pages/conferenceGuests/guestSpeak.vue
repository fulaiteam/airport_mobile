<template>
    <div>
    <!-- 版心区域开始  -->
    <div  class='middle_conte' >
        <div  class='flex_center' >
            <div  class='title' >嘉宾致辞</div>
        </div>
        <img src="../../assets/images/conference/st.png"    class='st_img'  >
        <div  class='summary_area' >
            致辞摘要
        </div>
        <div  class='flex_center' >
            <div  class='title2' >企业介绍</div>
        </div>
        <div  class='bottom_text' >
首都机场集团公司（英文缩写CAH）隶属于中国民用航空局，是一家以机场业为核心的跨地域的大型国有企业集团。 公司旗下拥有北京、天津、江西、河北、吉林、内蒙古、黑龙江等8省（直辖市、自治区）所辖干支机场20多个，并参股沈阳、大连机场，2010年，首都机场集团公司实现旅客吞吐量1.43亿人次，为我国最大的机场集团。
        </div>
    </div>
    <!-- 版心区域结束 -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.middle_conte{
    width:1200px;
    margin:0 auto;
}
.flex_center{
    display: flex;
    justify-content: center;
}
.title{
    margin-top:115px;
    font-size:30px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(21,119,201,1);
}
.title2{
    margin-top:74px;
    font-size:30px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(21,119,201,1);
}
.st_img{
    width:1200px;
    height:675px;
    margin-top:79px;
}
.summary_area{
    width:1200px;
    text-align: center;
    padding-top:20px;
    margin-top:66px;
    height:294px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(67,67,67,1);
    border-radius:10px;
    font-size:20px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(153,153,153,1);
}
.bottom_text{
    width:1095px;
    margin-top:95px;
    font-size:18px;
    margin-bottom:150px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(83,83,83,1);
    line-height:26px;
}
</style>