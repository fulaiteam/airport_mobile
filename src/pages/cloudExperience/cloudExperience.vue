<template>
    <div>
        <!--轮播图区域开始  -->
        <img src="../../assets/images/index/banner_1.gif" class='banner_img'>
        <!-- 轮播图区域结束 -->
        <!--版心区域开始  -->
        <div  class='center_area' >
            <!--云机场区域开始  -->
            <div  class='flex_center'  >
                <div  class='title' >云机场</div>
            </div>
            <ul  class='cloud_ul'  >
                <li  class='cloud_li'   v-for='(item,index)   in  listarr1'   :key='index' >
                    <div  class='cloud_li_title'  >
                        {{item.text}}
                    </div>
                    <img   :src="item.src"  class='cloud_li_img' >
                </li>
            </ul>
            <!-- 云机场区域结束 -->
            <!--云发布区域开始  -->
            <div  class='flex_center'  >
                <div  class='title margin_top64' >云发布</div>
            </div>
            <ul  class='cloud_ul margin_bottom109'  >
                <li  class='cloud_li'   v-for='(item,index)   in  listarr2'   :key='index' >
                    <div  class='cloud_li_title'  >
                        {{item.text}}
                    </div>
                    <img   :src="item.src"  class='cloud_li_img'    @click='changeRoute("cloudRelease")'  >
                </li>
            </ul>
            <!-- 云发布区域结束 -->
        </div>
        <!--版心区域结束  -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                listarr1:[
                    {
                        text:'标题',
                        src:require("@/assets/images/conference/grey_cloud.png")
                    },
                    {
                        text:'标题',
                        src:require("@/assets/images/conference/grey_cloud.png")
                    },
                    {
                        text:'标题',
                        src:require("@/assets/images/conference/grey_cloud.png")
                    },
                    {
                        text:'标题',
                        src:require("@/assets/images/conference/grey_cloud.png")
                    },
                ],
                listarr2:[
                    {
                        text:'标题',
                        src:require("@/assets/images/conference/orange_cloud.png")
                    },
                    {
                        text:'标题',
                        src:require("@/assets/images/conference/orange_cloud.png")
                    },
                    {
                        text:'标题',
                        src:require("@/assets/images/conference/orange_cloud.png")
                    },
                    {
                        text:'标题',
                        src:require("@/assets/images/conference/orange_cloud.png")
                    },
                ]
            }
        },
        methods:{
            changeRoute(a){
                this.$router.push({name:a})

            }
        }
    }
</script>

<style scoped>
.banner_img{
    width:100%;
    height:15.4rem;
}
.center_area{
    width:100%;
    box-sizing: border-box;
    padding-left:1.5rem;
    padding-right:1.7rem;
}
.flex_center{
    width:100%;
    display: flex;
    justify-content: center;
}
.title{
    margin-top:1.8rem;
     width: 3.65rem;
    height: 1.2rem;
    font-size: 1.2rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #155BA5;

}
.cloud_ul{
    width:100%;
    margin-top:6rem;
    overflow: hidden;
}
.cloud_li{
    width:16.5rem;
    height:11rem;
    float:left;
    margin-bottom:1.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.cloud_li:nth-child(2n+1){
    margin-right:1.3rem;
}
.cloud_li_title{
    width:100%;
    display: flex;
    justify-content: center;
    height: 0.95rem;
    font-size: 1rem;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #535353;
    line-height: 1.3rem;

}
.cloud_li_img{
    width:16.5rem;
    height:9rem;
}
.margin_top64{
    margin-top:2.25rem;
}
.margin_bottom109{
    margin-bottom:2.9rem;
}
</style>