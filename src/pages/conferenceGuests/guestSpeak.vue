<template>
    <div>
    <!-- 版心区域开始  -->
    <div  class='middle_conte' >
        <div  class='flex_center' >
            <div  class='title' >嘉宾致辞</div>
        </div>
        <img src="../../assets/images/conference/st.png"    class='st_img'  >
    </div>
    <!-- 版心区域结束 -->
    <div  class='grey_rec'  ></div>
        <!-- 版心区域开始  -->
    <div  class='middle_conte' >
        <div  class='summary_area' >
            致辞摘要
        </div>
         <div  class='flex_center' >
            <div  class='title' >企业介绍</div>
        </div>
                    <div class='text_area margin_bottom_1' >
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
    width:100%;
    padding-left:1.55rem;
    padding-right:1.5rem;
    box-sizing: border-box;
}
.flex_center{
    display: flex;
    justify-content: center;
}
.title{
    height: 1.2rem;
    font-size: 1.2rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #155BA5;
    margin-top:1.5rem;
}
.st_img{
    width:34.9rem;
    height:19.45rem;
    margin-top:1.8rem;
}
.grey_rec{
    margin-top:2.25rem;
    width: 100%;
    height: 1rem;
    background: #F5F5F5;
}
.summary_area{
    width:100%;
    height:8.75rem;
    background: #F4F4F4;
    opacity: 0.7;
    margin-top:1.25rem;
    font-size: 1.1rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #656565;
    padding-left:15rem;
    padding-top:1.2rem;

}
.text_area{
    width:100%;
    margin-top:1rem;
    font-size: 1rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #535353;
    line-height: 1.3rem;

}
.margin_bottom_1{
    margin-bottom:3.4rem;
}

</style>