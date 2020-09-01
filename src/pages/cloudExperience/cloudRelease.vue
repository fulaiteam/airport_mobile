<template>
    <div>
        <!--轮播图区域开始  -->
        <img src="../../assets/images/index/banner_1.gif" class='banner_img'>
        <!-- 轮播图区域结束 -->
        <!-- 版心区域开始 -->
        <div class='content_center_lll' >
            <div class='title'    >
                云发布
            </div>
            <!-- 文字区域开始  -->
            <div  class='flex_center' >
                <div  class='text_content' >

                                党的十九大提出，我国经济已由高速增长阶段转向高质量发展阶段，为新时代中国经济发展标定了历史方位、提供了行动指南。在此背景下，找准高质量发展的重点和路径成为各行各业发展的重中之重。
2018年，民航局发布了《新时代民航强国建设行动纲要》，明确指出，要高质量推进机场规划建设，建设平安、绿色、智慧、人文机场。建设“四型机场”，为我国机场实现高质量发展指明了前行之路。

                            
                </div>
            </div>
            <!-- 文字区域结束  -->
            <!-- 视频区域开始 -->
             <div  class='flex_center' >
                <img src="../../assets/images/conference/clo_video.png"    class='video_mmm' >
             </div>
            <!-- 视频区域结束 -->
            <!-- 文字区域开始  -->
            <div  class='flex_center' >
                <div  class='text_content' >

                                党的十九大提出，我国经济已由高速增长阶段转向高质量发展阶段，为新时代中国经济发展标定了历史方位、提供了行动指南。在此背景下，找准高质量发展的重点和路径成为各行各业发展的重中之重。
2018年，民航局发布了《新时代民航强国建设行动纲要》，明确指出，要高质量推进机场规划建设，建设平安、绿色、智慧、人文机场。建设“四型机场”，为我国机场实现高质量发展指明了前行之路。

                            
                </div>
            </div>
            <!-- 文字区域结束  -->
            <!--  -->
            <div  class='bottom_img_area' >
                <img src="../../assets/images/conference/ttttttt.png"  class='bottom_img'  >
                <img src="../../assets/images/conference/ttttttt.png"  class='bottom_img'  >
            </div>
            <!--  -->
        </div>
        <!-- 版心区域结束 -->
    </div>
</template>

<script>
    export default {
        data(){
            return{

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
.banner_img{
    width:100%;
    height:15.4rem;
}
.content_center_lll{
    width:100%;
    padding-left:1.55rem;
    padding-right:1.55rem;
    box-sizing: border-box;
}
.title{
    width: 100%;
    height: 1.2rem;
    font-size: 1.2rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #165CA6;
    margin-top:1.8rem;
    display: flex;
    justify-content: center;
}
.black_subtitle{
    width:100%;
    margin-top:68px;
    font-size:24px;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(102,102,102,1);
    display: flex;
    justify-content: center;
}
.dotted_line{
    width:100%;
    margin-top:12px;
    border-top:2px dotted black;
}
.flex_center{
    width:100%;
    display: flex;
    justify-content: center;
}
.text_content{
    margin-top:1.9rem;
    width: 100%;
    height: 7.5rem;
    font-size: 1rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #343434;
    line-height: 1.3rem;

}
.text_content2{
    width:1095px;
    font-size:18px;
    margin-top:48px;
    margin-bottom:141px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:26px;
}
.video_mmm{
    margin-top:1.25rem;
    width:34.55rem;
    height:19.45rem;
}
.bottom_img_area{
    margin-top:1.3rem;
    width:100%;
    height:9rem;
    margin-bottom:4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bottom_img{
    width:16.5rem;
    height:9rem;
}

</style>