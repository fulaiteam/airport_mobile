<template>
    <div>
        <div class="tab">
            <div class="content_center">

            </div>
        </div>
        <!-- 版心区域开始 -->
        <div class='content_center_lll' >
            <div class='title'    >
                云发布
            </div>
            <div class='black_subtitle' >
                发布简介
            </div>
            <div  class='dotted_line' ></div>
            <!-- 文字区域开始  -->
            <div  class='flex_center' >
                <div  class='text_content' >

                                党的十九大提出，我国经济已由高速增长阶段转向高质量发展阶段，为新时代中国经济发展标定了历史方位、提供了行动指南。在此背景下，找准高质量发展的重点和路径成为各行各业发展的重中之重。<br>
2018年，民航局发布了《新时代民航强国建设行动纲要》，明确指出，要高质量推进机场规划建设，建设平安、绿色、智慧、人文机场。建设“四型机场”，为我国机场实现高质量发展指明了前行之路。<br>
为响应民航局局长冯正霖在2018年全国民航工作会议上提出的建设“四型机场”标杆体系，对标一流，打造现代化民用机场的要求，首都机场集团公司将建设“四型机场”作为打造世界一流机场管理集团的核心目标，并将其纳入“4-3-4-1”总体工作思路中。<br>
过去的一年，首都机场集团公司陆续拟定发布了平安、绿色、智慧、人文机场建设指导纲要，明晰了发展的思路与目标。集团下属各成员机场与专业公司齐头并进、亮点频现，为建设“四型机场”赢得了良好开局，也在打造世界一流机场集团的新征程上迈出了扎实的一步。
                            
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
                <div  class='text_content2' >

                                党的十九大提出，我国经济已由高速增长阶段转向高质量发展阶段，为新时代中国经济发展标定了历史方位、提供了行动指南。在此背景下，找准高质量发展的重点和路径成为各行各业发展的重中之重。<br>
2018年，民航局发布了《新时代民航强国建设行动纲要》，明确指出，要高质量推进机场规划建设，建设平安、绿色、智慧、人文机场。建设“四型机场”，为我国机场实现高质量发展指明了前行之路。<br>
为响应民航局局长冯正霖在2018年全国民航工作会议上提出的建设“四型机场”标杆体系，对标一流，打造现代化民用机场的要求，首都机场集团公司将建设“四型机场”作为打造世界一流机场管理集团的核心目标，并将其纳入“4-3-4-1”总体工作思路中。<br>
过去的一年，首都机场集团公司陆续拟定发布了平安、绿色、智慧、人文机场建设指导纲要，明晰了发展的思路与目标。集团下属各成员机场与专业公司齐头并进、亮点频现，为建设“四型机场”赢得了良好开局，也在打造世界一流机场集团的新征程上迈出了扎实的一步。
                            
                </div>
            </div>
            <!-- 文字区域结束  -->
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
.content_center_lll{
    width:1110px;
    margin:0 auto;
}
.title{
    margin-top:75px;
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
    width:1095px;
    font-size:18px;
    margin-top:28px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:26px;
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
    margin-top:45px;
    width:800px;
    height:450px;
}

</style>