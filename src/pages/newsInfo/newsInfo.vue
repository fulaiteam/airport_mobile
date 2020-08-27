<template>
    <div>
        <!-- 轮播图区域开始 -->
        <div   class='top_carousel_area' >
            <img src="../../assets/images/newsInfo/banner_1.png"   class='banner_bg' >
            <!-- 版心区域开始 -->
            <div  class='middle_area1100' >
                <div  class='middle_area_content'  >
                   <div  class='btn_top_area' >
                       <img src="../../assets/images/newsInfo/btn_left.png"    class='carousel_btn' >
                        <div class='specify_news' >专题报道</div>
                        <img src="../../assets/images/newsInfo/btn_right.png"    class='carousel_btn' >
                   </div>
                   <div  class='btn_bottom_area' >
                       <ul  class='btn_bottom_area_ul'  >
                           <li  class='btn_bottom_area_li' v-for='(item,index)  in  carouselarr'  :key='index'   >

                           </li>
                       </ul>
                   </div>
                </div>
            </div>
            <!-- 版心区域结束 -->
        </div>
        <!-- 轮播图区域结束 -->
        <!-- 下部分版心区域开始 -->
            <div   class='b_middle' >
                <!-- 大会报道区域开始 -->
                <div  class='con_title' >
                    大会报道
                </div>
                <ul  class='con_ul' >
                    <li  class='con_li' v-for='i in 4' >
                        <img src="../../assets/images/newsInfo/theNewConsult.png" class='con_li_left'   @click='topage("newsInfosSecond")' >
                        <div  class='con_li_right'  >
首都机场集团将于2020年10月10日在线举办首届“四型机场”技术创新大会。届时首都机场集团将发布“四型机场”建设需求，国内大型机场集团、民航科研院所、技术设备厂商、互联网科创企业将共聚一堂，交流成功经验、展示科创产品、建立合作契机。
                        </div>
                    </li>
                </ul>
                <!-- 大会报道区域结束 -->
                <!-- 产业发展区域开始 -->
                <div  class='con_title' >
                    产业发展
                </div>
                <ul  class='con_ul' >
                    <li  class='con_li' v-for='i in 4' >
                        <img src="../../assets/images/newsInfo/theNewConsult.png" class='con_li_left'>
                        <div  class='con_li_right'  >
首都机场集团将于2020年10月10日在线举办首届“四型机场”技术创新大会。届时首都机场集团将发布“四型机场”建设需求，国内大型机场集团、民航科研院所、技术设备厂商、互联网科创企业将共聚一堂，交流成功经验、展示科创产品、建立合作契机。
                        </div>
                    </li>
                </ul>
                <!-- 产业发展区域结束 -->
            </div>
        <!-- 下部分版心区域结束 -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                carouselarr:[
                    {
                        img:require("@/assets/images/newsInfo/banner_1.png"),
                    },
                    {
                        img:require("@/assets/images/hj-login.jpg"),
                    },
                    {
                        img:require("@/assets/images/congressTopics/table.png"),
                    },
                ]
            }
        },
        methods:{
            topage(a){
                this.$router.push({name:a})
            }
        }
    }
</script>

<style  scoped>
.top_carousel_area{
    width:100%;
    height:500px;
    position: relative;
    z-index: 1;
}
.banner_bg{
    width:100%;
    position: absolute;
    left: 0;
    top:0;
    height:500px;
    z-index: 2;
}
.middle_area1100{
    width:100%;
    position: absolute;
    left: 0;
    top:0;
    height:500px;
    z-index: 3;
}
.middle_area_content{
    width:1100px;
    height:263px;
    margin-left:auto;
    margin-right: auto;
    margin-top:210px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.btn_top_area{
    width:100%;
    height:66px;
    display: flex;
    justify-content: space-between;
}
.btn_bottom_area{
    width:100%;
    height:13px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.carousel_btn{
    width:66px;
    height:66px;
}
.specify_news{
    font-size:40px;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.btn_bottom_area_ul{
    
}
.btn_bottom_area_li{
    float:left;
    margin-right:21px;
    width:13px;
    height:13px;
    background:url('../../assets/images/newsInfo/circle.png');
}
.btn_bottom_area_li:nth-last-child(1){
    margin-right:0;
}
.con_title{
    width:100%;
    font-size:30px;
    display: flex;
    justify-content: center;
    margin-top:82px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(21,119,201,1);
}
.b_middle{
    width:1100px;
    margin:0 auto;
}
.con_ul{
    margin-top:88px;
    width:100%;
    overflow: hidden;
}
.con_li{
    width:500px;
    height:228px;
    float: left;
    display:flex;
    justify-content: space-between;
    margin-bottom:20px;
}
.con_li:nth-child(2n+1){
    margin-right:93px;
}
.con_li_left{
    width:220px;
    height:220px;
    background:blue;
}
.con_li_right{
    width:236px;
    height:228px;
    font-size:16px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:26px;
}
</style>