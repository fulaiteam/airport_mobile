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
                    <li  class='con_li' v-for='i in 2' >
                        <img src="../../assets/images/newsInfo/theNewConsult.png" class='con_li_left'   @click='topage("newsInfosSecond")' >
                        <div  class='con_li_right'  >
首都机场集团将于2020年10月10日在线举办首届“四型机场”技术创新大会。届时首都机场集团将发布“四型机场”建设需求，国内大型机场集团、民航科研院所、技术设备厂商、互联网科创企业将共聚一堂，交流成功经验、展示科创产品、建立合作契机。
                        </div>
                    </li>
                </ul>
                <!-- 大会报道区域结束 -->
                <div  class='grey_rec' ></div>
                <!-- 产业发展区域开始 -->
                <div  class='con_title' >
                    产业发展
                </div>
                <ul  class='con_ul' >
                    <li  class='con_li' v-for='i in 2' >
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
    height:18rem;
    position: relative;
    z-index: 1;
}
.banner_bg{
    width:100%;
    position: absolute;
    left: 0;
    top:0;
    height:18rem;
    z-index: 2;
}
.middle_area1100{
    width:100%;
    position: absolute;
    left: 0;
    top:0;
    height:18rem;
    z-index: 3;
}
.middle_area_content{
    width:100%;
    height:8rem;
    box-sizing: border-box;
    padding-left:2.5rem;
    padding-right: 2.4rem;
    margin-top:8.5rem;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.btn_top_area{
    width:100%;
    height:1.3rem;
    display: flex;
    justify-content: space-between;
}
.btn_bottom_area{
    width:100%;
    height:0.45rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.carousel_btn{
    width:1.3rem;
    height:1.3rem;
}
.specify_news{
    height: 1.3rem;
    font-size: 1rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 1.3rem;

}
.btn_bottom_area_ul{
    
}
.btn_bottom_area_li{
    float:left;
    margin-right:0.45rem;
    width: 0.45rem;
    height: 0.45rem;
    background: #FFFFFF;
    border-radius: 50%;

}
.btn_bottom_area_li:nth-last-child(1){
    margin-right:0;
}
.con_title{
    margin-top:2.6rem;
    width:100%;
    font-size:30px;
    display: flex;
    justify-content: center;
    height: 1.2rem;
    font-size: 1.2rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #155BA5;
}
.b_middle{
   width:100%;
   box-sizing: border-box;
}
.con_ul{
    margin-top:3.45rem;
    width:100%;
    padding-right:2.45rem;
    overflow: hidden;
    box-sizing: border-box;
    padding-left:1.55rem;

}
.con_li{
    width:100%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:1.7rem;
}
.con_li_left{
    width:11rem;
    height:11rem;
}
.con_li_right{
    width:21.05rem;
    height:11rem;
    font-size: 1rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #333333;
    line-height: 1.3rem;
}
.grey_rec{
    width: 100%;
    height: 1rem;
    background: #F5F5F5;

}
</style>