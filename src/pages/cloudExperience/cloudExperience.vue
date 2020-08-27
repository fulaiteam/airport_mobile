<template>
    <div>
        <div class="tab">
            <div class="content_center">

            </div>
        </div>
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
.center_area{
    width:1103px;
    margin:0 auto;
}
.flex_center{
    width:100%;
    display: flex;
    justify-content: center;
}
.title{
    font-size:30px;
    margin-top:93px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(21,119,201,1);
}
.cloud_ul{
    width:100%;
    margin-top:98px;
    overflow: hidden;
}
.cloud_li{
    width:540px;
    height:342px;
    float:left;
    margin-bottom:35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.cloud_li:nth-child(2n+1){
    margin-right:23px;
}
.cloud_li_title{
    width:100%;
    display: flex;
    justify-content: center;
    font-size:20px;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(83,83,83,1);
}
.margin_top64{
    margin-top:64px;
}
.margin_bottom109{
    margin-bottom:109px;
}
</style>