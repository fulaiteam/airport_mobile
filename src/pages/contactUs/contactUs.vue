<template>
    <div>
        <!--  -->
        <div class="tab">
        <div class="content_center">

        </div>
        </div>
        <!--  -->
        <!--版心区域开始  -->
        <div  class='middle_area' >
           <div  class='title' >
               联系我们
           </div>
           <ul   class='module_ul' >
               <li  class='module_li'  v-for='i in 4'  >
                   <div  class='module_li_top' >
                       商务部
                   </div>
                   <div  class='module_li_bottom'  >
                        联系人：***<br>
                        电话：010-6666666<br>
                        手机：1506666666<br>
                        邮箱：666666@666.com<br>
                        传真：010-66666666<br>
                   </div>
               </li>
           </ul>
        </div>
        <!-- 版心区域结束 -->
        <!-- 尾部版心区域开始 -->
        <div  class='bottom_content_area' >
            <div  class='bottom_content_area_left'  >
                <img src="../../assets/images/contactUs/ewm.png"    class='bottom_content_area_left_img'   >
                <img src="../../assets/images/contactUs/contact_img.png"    class='bottom_content_area_left_img'   >
            </div>
            <div  class='bottom_content_area_left' >
                <img src="../../assets/images/contactUs/ewm.png"    class='bottom_content_area_left_img'   >
                <img src="../../assets/images/contactUs/contact_img.png"    class='bottom_content_area_left_img'   >
            </div>
        </div>
        <!-- 尾部版心区域结束 -->
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
.middle_area{
    width:890px;
    margin:0 auto;
}
.title{
    width:100%;
    margin-top:91px;
    height:29px;
    line-height: 29px;
    font-size:30px;
    display: flex;
    justify-content: center;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(21,119,201,1);
}
.module_ul{
    width:100%;
    margin-top:23px;
    overflow: hidden;
}
.module_li{
    width:394px;
    float:left;
    margin-bottom:40px;
    overflow: hidden;
}
.module_li:nth-child(2n+1){
    margin-right:102px;
}
.module_li_top{
    width:394px;
    box-sizing: border-box;
    height:40px;
    padding-left:37px;
    font-size:20px;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:40px;
    width:394px;
    border-bottom:1px solid rgba(67,116,239,1);
}
.module_li_bottom{
    width:394px;
    padding-left:37px;
    box-sizing: border-box;
    font-size:18px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:26px;
}
.bottom_content_area{
    width:800px;
    height:130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 auto;
    margin-bottom:107px;
    margin-top:124px;
}
.bottom_content_area_left{
    width:302px;
    height:130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bottom_content_area_left_img{
    width:130px;
    height:130px;
}
</style>