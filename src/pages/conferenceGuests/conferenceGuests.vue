<template>
    <div>
        <div class="tab">
            <div class="content_center">

            </div>
        </div>
        <!-- 版心区域开始 -->
        <div class='content_center_lll' >
            <div class='title'    >
                嘉宾介绍
            </div>
            <!--嘉宾介绍区域开始  -->
            <ul  class='intro_ul' >
                <li   class='intro_li' v-for='(item,index) in liarr'    :key='index'  >
                    <img  :src='item.img'  class='li_left_img'   @click='topage("guestIntro")'  >
                    <div  class='li_right_text' >{{item.text}}</div>
                </li>
            </ul>
            <!-- 嘉宾介绍区域结束 -->
            <div class='title' >
                嘉宾致辞
            </div>
            <!-- 视频区域开始 -->
            <div  class='video_ul' >
                <div  class='video_li'  v-for='(item,index) in videoarr'    :key='index'   >
                    <video  class='video_l'     @click='topage("guestSpeak")'  ></video>
                    <div  class='vidoe_text' >嘉宾致辞</div>
                </div>
            </div>
            <!-- 视频区域结束 -->
        </div>
        <!-- 版心区域结束 -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                liarr:[
                    {
                        img:require('../../assets/images/conference/person.png'),
                        text:'负责党务、党风廉政建设、宣传思想及意识形态、机关党建、干部人事、教育培训、机关群团组织、产权管理、防范重大金融风险、企业“双联帮扶”工作。分管党委办、人事科、产权管理科、“双联帮扶”工作办公室。联系县市区国有资产管理、本系统脱贫攻坚联系点建设、脱贫攻坚督导工作。'
                    },
                    {
                        img:require('../../assets/images/conference/person.png'),
                        text:'负责党务、党风廉政建设、宣传思想及意识形态、机关党建、干部人事、教育培训、机关群团组织、产权管理、防范重大金融风险、企业“双联帮扶”工作。分管党委办、人事科、产权管理科、“双联帮扶”工作办公室。联系县市区国有资产管理、本系统脱贫攻坚联系点建设、脱贫攻坚督导工作。'
                    },
                    {
                        img:require('../../assets/images/conference/person.png'),
                        text:'负责党务、党风廉政建设、宣传思想及意识形态、机关党建、干部人事、教育培训、机关群团组织、产权管理、防范重大金融风险、企业“双联帮扶”工作。分管党委办、人事科、产权管理科、“双联帮扶”工作办公室。联系县市区国有资产管理、本系统脱贫攻坚联系点建设、脱贫攻坚督导工作。'
                    },
                    {
                        img:require('../../assets/images/conference/person.png'),
                        text:'负责党务、党风廉政建设、宣传思想及意识形态、机关党建、干部人事、教育培训、机关群团组织、产权管理、防范重大金融风险、企业“双联帮扶”工作。分管党委办、人事科、产权管理科、“双联帮扶”工作办公室。联系县市区国有资产管理、本系统脱贫攻坚联系点建设、脱贫攻坚督导工作。'
                    }
                ],
                videoarr:[
                    {
                        src:''
                    },
                    {
                        src:''
                    },
                    {
                        src:''
                    },
                    {
                        src:''
                    },
                    {
                        src:''
                    },
                    {
                        src:''
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
    width:1170px;
    margin:0 auto;
}
.top_area{
    width:100%;
    height:500px;
    background:url('../../assets/images/congressTopics/tab.png');
}
.title{
    margin-top:77px;
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
.intro_ul{
    width:100%;
    margin-top:82px;
    overflow: hidden;
}
.intro_li{
    margin-top:28px;
    width:565px;
    height:320px;
    float:left;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.intro_li:nth-child(1){
    margin-top:0;
}
.intro_li:nth-child(2){
  margin-top:0;
}
.intro_li:nth-child(2n+1){
    margin-right:30px;
}
.li_left_img{
    width:250px;
    height:320px;
}
.li_right_text{
    width:301px;
    padding-top:26px;
    padding-left:20px;
    padding-right:20px;
    box-sizing: border-box;
    height:320px;
    font-size:18px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(153,153,153,1);
}
.video_ul{
    width:100%;
    overflow: hidden;
    margin-bottom:89px;
}
.video_li{
    width:380px;
    height:260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    float: left;
    margin-top:44px;
    margin-right:15px;
    border-radius: 10px;
}
.video_li:nth-child(3n){
    margin-right: 0;
}
.video_l{
    width:380px;
    height:214px;
    background: #eeeeee;
}
.vidoe_text{
    width:380px;
    height:22px;
    line-height: 22px;
    font-size:24px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(180,180,180,1);
    text-align: center;

}
</style>