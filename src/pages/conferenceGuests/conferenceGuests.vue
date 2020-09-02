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
        <div   class='article_area'   v-for='(item,index) in liarr' :key="index">
            <img :src="item.img" class='article_left'   @click='topage("guestIntro")' >
            <div  class='article_right'  >
                {{ item.text }}
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
       <div   v-for='(item,index) in videoarr' :key="index">
        <img :src="item.src"  class='female_area'   @click='topage("guestSpeak")'    >
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
                        img:require('../../assets/images/conference/personal_wu.jpg'),
                        text:'吴方正先生大学毕业先后就职于中石油、加拿大著名飞行模拟器生产商CAE、欧洲知名飞机制造商空中客车和中国航空器材进出口集团公司。吴先生是北京安杰新时代信息科技有限公司董事长兼总裁，作为在民航领域服务多年的工科背景技术专家，创立的安杰机器人品牌，已经是国内知名服务机器人品牌，拥有包括首都机场、国贸、万科、碧桂园、中海、中航、招商局、新恒基等众多国内知名客户。安杰机器人2019年开始服务大兴机场、首都机场T3航站楼、首都机场股份办公楼、南昌机场等众多民航客户，是目前国内服务机器人保有量最大的运营公司。'
                    },
                    {
                        img:require('../../assets/images/conference/personal_yang.jpg'),
                        text:'杨立东先生拥有18年技术团队的管理经验，一直践行“知行合一”的管理理念，在多个公司担任技术副总裁及CTO期间，一直致力于技术和项目管理规范性体系的搭建、技术团队效率和交付能力的提升以及技术人才的培养，并取得了丰硕的成果。'
                    },
                    {
                        img:require('../../assets/images/conference/personal_f.jpg'),
                        text:'赵仙，新华三民航行业总工，首席产品经理，主导新华三智慧机场方案顶层架构设计，致力于通过打造机场数字大脑，广泛联合业内生态合作伙伴，实现新技术与机场业务的融合，助力民航数字化转型升级，在机场物联网建设方面有丰富的设计经验。'
                    },
                    {
                        img:require('../../assets/images/conference/personal_lin.jpg'),
                        text:'林康，男，北京航空航天大学飞行器设计专业博士。现任铱格斯曼航空科技集团股份有限公司副总裁。曾参与国家级863项目、交通部项目、总装备部项目等多个重大专项，在国内外期刊上发表过多篇论文。主要研究方向是飞行器控制、机器人控制、人工智能。'
                    },
                    {
                        img:require('../../assets/images/conference/personal_han.jpg'),
                        text:'2016年毕业于南京工业大学车辆工程专业，从业以来一直参与整车设计，具有丰富的整车设计经验，有四年多的项目管理经验。负责主导了2.1吨、2.5吨、3.2吨及3.5吨纯电动厢式物流车醒目的完成；负责完成5座、7座轻型客车车型的整车开发工作。'
                    }
                ],
                videoarr:[
                    {
                        src:require('../../assets/images/conference/person.png'),
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
    height:29.05rem;
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
    height: 27.5rem;
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