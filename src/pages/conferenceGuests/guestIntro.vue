<template>
    <div>
        <div class="tab">
            <div class="content_center">

            </div>
        </div>
        <!--版心区域开始  -->
        <div class='intro_middle_content'  >
            <div class='title' >
                嘉宾介绍
            </div>
            <div  class='flrx_content_center' >
                <img  class='img_area'  src="../../assets/images/conference/person.png" >
            </div>
            <div  class='flrx_content_center'  >
                <img   src='../../assets/images/conference/watch_btn.png'  class='watch_btn' />
            </div>
            <div  class='flrx_content_center'  >
               <div  class='black_title margin_top52' >领导介绍</div>
            </div>
            <div   class='grey_line' ></div>
            <div  class='text_area' >

                                出生年份：1970年2月 性别：男 民族：汉族 籍贯：北京市通州区 学历：研究生工作分工：主持局全面工作。<br>
工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事 1992.05－1993.07 北京市通县民政局干事 1993.07－1994.12 北京市通县政府办办事员 1994.12－1998.12 北京市通县（通州区）政府办信息科副科长 1998.12－2003.03 北京市通州区政府办督察室主任 2003.03－2005.06 北京市民政局副局长 2005.06－2006.05 北京市通州区民政局党委委员、副局长 2006.05－2010.08 北京市通州区宋庄镇党委委员、副书记、镇长 2010.08－2012.11 北京市通州区新城建设管理委员会调研员、新城运营公司董事长 2012.11－2013.11 北京市通州区人民政府国有资产监督管理委员会调研员 2013.11－2014.02 北京市通州区环境保护局书记 2014.02－2019.03 北京市通州区环境保护局书记、局长 2019.03－2019.09 北京市通州区交通局党委书记、局长 2019.09－至今 北京市通州区交通局党组书记、局长
                            
            </div>
            <div  class='flrx_content_center'  >
               <div  class='black_title margin_top52' >演讲状况</div>
            </div>
            <div  class='dotted_line' ></div>
            <div  class='content_intro' >
                内容介绍
            </div>
                        <div  class='flrx_content_center'  >
               <div  class='black_title margin_top52' >企业介绍</div>
            </div>
            <div   class='grey_line' ></div>
            <div class='enterprise_content' >
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
.tab{
    padding: 0;
    margin: 0;
    width: 100%;
    background:#0F1061;
    display: flex;
    justify-content: center;
}
.tab .content_center{
    width: 1200px;
    height: 500px;
    background:url('../../assets/images/congressTopics/tab.png')  no-repeat center;
}
.intro_middle_content{
    width:1095px;
    margin:0 auto;
}
.title{
    margin-top:83px;
    width:100%;
    height:29px;
    line-height: 29px;
    font-size:30px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(21,119,201,1);
    display: flex;
    justify-content: center;
}
.flrx_content_center{
    width:100%;
    display: flex;
    overflow: hidden;
    justify-content: center;
}
.img_area{
    height:321px;
    width:251px;
    margin-top:75px;
}
.watch_btn{
    margin-top:23px;
    width:130px;
    height:35px;
}
.black_title{
    height:23px;
    font-size:24px;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(83,83,83,1);
    line-height:23px;
}
.margin_top52{
    margin-top:52px;
}
.grey_line{
    width:100%;
    margin-top:12px;
    height:1px;
    border-top:1px solid rgba(230,230,230,1);
}
.text_area{
    width:100%;
    margin-top:36px;
    font-size:18px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(83,83,83,1);
    line-height:26px;
}
.dotted_line{
    width:100%;
    margin-top:12px;
    height:1px;
    border-top:1px dotted   black;
}
.content_intro{
    width:100%;
    height:300px;
    margin-top:20px;
    text-align: center;
}
.enterprise_content{
    width:100%;
    margin-top:31px;
    font-size:18px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(83,83,83,1);
    line-height:26px;
    margin-bottom:145px;
    
}
</style>