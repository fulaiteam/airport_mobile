<template>
    <div>
       <!--轮播图区域开始  -->
        <img src="../../assets/images/index/banner_1.gif" class='banner_img'>
        <!-- 轮播图区域结束 -->
        <!-- 中间区域开始 -->
        <div  class='middle_area' >
       <!-- 标题区域开始  -->
        <div  class='title' >
            嘉宾介绍
        </div>
       <!-- 标题区域结束 -->
       <!-- 文章区域开始 -->
        <div   class='article_area'   v-for='i in 3'  >
            <img src="../../assets/images/conference/person.png" class='article_left'   @click='topage("guestIntro")' >
            <div  class='article_right'  >
负责党务、党风廉政建设、宣传思想及意识形态、机关党建、干部人事、教育培训、机关群团组织、产权管理、防范重大金融风险、企业“双联帮扶”工作。分管党委办、人事科、产权管理科、“双联帮扶”工作办公室。联系县市区国有资产管理、本系统脱贫攻坚联系点建设、脱贫攻坚督导工作。
            </div>
        </div>
       <!-- 文章区域结束 -->
       </div>
       <!-- 中间区域结束 -->
       <div   class='grey_block' ></div>
       <!-- 中间区域开始 -->
        <div  class='middle_area' >
        <!-- 标题区域开始  -->
        <div  class='title' >
            嘉宾致辞
        </div>
       <!-- 标题区域结束 -->
       <!-- 一项item开始 -->
       <div   v-for='i in 3' >
        <img src="../../assets/images/conference/female.png"  class='female_area'   @click='topage("guestSpeak")'    >
        <div  class='grey_text' >
            嘉宾致辞
        </div>
        </div>
        <!-- 一项item结束  -->

         </div>
        <!-- 中间区域结束 -->
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
.banner_img{
    width:100%;
    height:15.4rem;
}
.middle_area{
    width:100%;
    box-sizing: border-box;
    padding-left:1.55rem;
    padding-right:1.51rem;
}
.title{
    width: 100%;
    height: 1.2rem;
    font-size: 1.2rem;
    margin-top:1.9rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #155BA6;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:1.75rem;
}
.grey_text{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:1.4rem;
    margin-bottom:2.5rem;
    height: 0.95rem;
    font-size: 1rem;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #535353;
    line-height: 1.3rem;

}
.article_area{
    width:100%;
    height:19.05rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom:1.45rem;
}
.article_left{
    width:16.5rem;
    height:19.25rem;
    margin-right:0.3rem;
}
.article_right{
    width: 17.61rem;
    height: 19.05rem;
    border: 1px solid #999999;
    border-radius: 0.5rem;
    padding-left:0.65rem;
    padding-right:0.5rem;
    font-size: 1rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #656565;
    line-height: 1.3rem;
}
.grey_block{
    width:100%;
    height:1rem;
    margin-top:1.65rem;
    background: #F5F5F5;
}
.female_area{
    width:100%;
    height:19.45rem;
}
</style>