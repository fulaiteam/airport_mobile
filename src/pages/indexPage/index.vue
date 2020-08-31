<template>
    <div>
        <!--轮播图区域开始  -->
        <!-- <img src="../../assets/images/index/banner_1.gif" class='banner_img'> -->
        <div  class='carousel_area' >
            <img :src="nowimg" class='banner_img'>
            <div  class='dotted_area' >
                <ul  class='dotted_ul' >
                    <li  :class='{dotted_li:true,dotted_li_active:item.name == nowDotted}'   v-for='(item,index)  in  carouselList'    @click='changeCaouselImg(item.name,item.img)'    :key='index'  >

                    </li>
                </ul>
            </div>
        </div>
        <!-- 轮播图区域结束 -->
        <!-- 主题大会区域开始 -->
        <div class='title_text' >
            主题大会
        </div>
        <!-- 中间区域开始 -->
        <div  class='content_area' >
            <!-- 一项文章开始 -->
            <div  class='content_li' >
                <div class='content_li_left'  >
首都机场集团将于2020年10月10日在线举办首届“四型机场”技术创新大会。届时首都机场集团将发布“四型机场”建设需求，国内大型机场集团、民航科研院所、技术设备厂商、互联网科创企业将共聚一堂，交流成功经验、展示科创产品、建立合作契机。
                </div>
                <img src="../../assets/images/index/video_play.png" class='content_li_right'   @click='changenowactive("index2")'   >
            </div>
            <!-- 一项文章结束 -->
        </div>
        <!-- 中间区域结束 -->
         <div   class='grey_rectangular' ></div>
        <!-- 主题大会区域结束 -->
        <!-- 主旨发言开始 -->
        <div class='title_text' >
                主旨发言
        </div>
        <!-- 中间区域开始 -->
        <div class='content_area' >
            <!-- 一项文章开始 -->
            <div  class='content_li' >
                <div class='content_li_left'  >

                                出生年份：1970年2月 性别：男 民族：汉族 籍贯：北京市通州区 学历：研究生<br>
工作分工：主持局全面工作。<br>
工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事 1992.05－1993.07 北京市通县民政局干事 1993.07－1994.12 北京市通县政府办办事员 1994.12－1998.12 北京市通县（通州区）政府办信息科副科长 1998.12－2003.03 北京市通州区政府办督察室主任 2003.03－2005.06 北京市民政局副局长 2005.06－2006.05 北京市通州区民政局党委委员、副局长 2006.05－2010.08 北京市通州区宋庄镇党委委员、副书记、镇长 2010.08－2012.11 北京市通州区新城建设管理委员会调研员、新城运营公司董事长 2012.11－2013.11 北京市通州区人民政府国有资产监督管理委员会调研员 2013.11－2014.02 北京市通州区环境保护局书记 2014.02－2019.03 北京市通州区环境保护局书记、局长 2019.03－2019.09 北京市通州区交通局党委书记、局长 2019.09－至今 北京市通州区交通局党组书记、局长
                            
                </div>
                <img src="../../assets/images/index/video_play.png" class='content_li_right'   >
            </div>
            <!-- 一项文章结束 -->
            <div  class='grey_line' ></div>
            <!-- 一项文章开始 -->
            <div  class='content_li' >
                <div class='content_li_left'  >

                                出生年份：1970年2月 性别：男 民族：汉族 籍贯：北京市通州区 学历：研究生<br>
工作分工：主持局全面工作。<br>
工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事 1992.05－1993.07 北京市通县民政局干事 1993.07－1994.12 北京市通县政府办办事员 1994.12－1998.12 北京市通县（通州区）政府办信息科副科长 1998.12－2003.03 北京市通州区政府办督察室主任 2003.03－2005.06 北京市民政局副局长 2005.06－2006.05 北京市通州区民政局党委委员、副局长 2006.05－2010.08 北京市通州区宋庄镇党委委员、副书记、镇长 2010.08－2012.11 北京市通州区新城建设管理委员会调研员、新城运营公司董事长 2012.11－2013.11 北京市通州区人民政府国有资产监督管理委员会调研员 2013.11－2014.02 北京市通州区环境保护局书记 2014.02－2019.03 北京市通州区环境保护局书记、局长 2019.03－2019.09 北京市通州区交通局党委书记、局长 2019.09－至今 北京市通州区交通局党组书记、局长
                            
                </div>
                <img src="../../assets/images/index/video_play.png" class='content_li_right'   >
            </div>
            <!-- 一项文章结束 -->
            <div  class='grey_line' ></div>
                        <!-- 一项文章开始 -->
            <div  class='content_li' >
                <div class='content_li_left'  >

                                出生年份：1970年2月 性别：男 民族：汉族 籍贯：北京市通州区 学历：研究生<br>
工作分工：主持局全面工作。<br>
工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事 1992.05－1993.07 北京市通县民政局干事 1993.07－1994.12 北京市通县政府办办事员 1994.12－1998.12 北京市通县（通州区）政府办信息科副科长 1998.12－2003.03 北京市通州区政府办督察室主任 2003.03－2005.06 北京市民政局副局长 2005.06－2006.05 北京市通州区民政局党委委员、副局长 2006.05－2010.08 北京市通州区宋庄镇党委委员、副书记、镇长 2010.08－2012.11 北京市通州区新城建设管理委员会调研员、新城运营公司董事长 2012.11－2013.11 北京市通州区人民政府国有资产监督管理委员会调研员 2013.11－2014.02 北京市通州区环境保护局书记 2014.02－2019.03 北京市通州区环境保护局书记、局长 2019.03－2019.09 北京市通州区交通局党委书记、局长 2019.09－至今 北京市通州区交通局党组书记、局长
                            
                </div>
                <img src="../../assets/images/index/video_play.png" class='content_li_right'   >
            </div>
            <!-- 一项文章结束 -->
        </div>
        <!-- 中间区域结束 -->
        <!-- 主旨发言结束 -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                nowactive:'',
                nowDotted:'first',
                nowimg:require('@/assets/images/newsInfo/banner_1.png'),
                carouselList:[
                    {
                        name:'first',
                        img:require('@/assets/images/newsInfo/banner_1.png')
                    },
                    {
                        name:'second',
                        img:require('@/assets/images/index/secondary_img1.png')
                    },
                    {
                        name:'third',
                        img:require('@/assets/images/index/secondary_img2.png')
                    }
                ],
                imglist:[
                    {
                        img:'1'
                    },
                    {
                        img:'2'
                    },
                    {
                        img:'3'
                    },
                    {
                        img:'4'
                    },
                    {
                        img:'5'
                    },
                    {
                        img:'6'
                    },
                    {
                        img:'7'
                    },
                    {
                        img:'8'
                    }
                ]
            }
        },
        methods:{
            changenowactive(a){
                this.$router.push({name:a})
            },
            changeCaouselImg(name,img){
                this.nowDotted = name;
                this.nowimg = img;
            }
        }
    }
</script>

<style  scoped>
.banner_img{
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:18rem;
}
.carousel_area{
    position: relative;
    width:100%;
    height:18rem;
    background:yellow;
}
.dotted_area{
    position:absolute;
    bottom:1.45rem;
    left:0;
    width:100%;
    height:0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dotted_ul{
    width:5.6rem;
    height:0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.dotted_li{
    width: 1.2rem;
    height: 0.2rem;
    background: #FFFFFF;
    opacity: 0.4;
    border-radius: 0rem;
}
.dotted_li_active{
    opacity: 1;
}
.title_text{
    margin-top:2.45rem;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height:1.2rem;
    font-size:1.2rem;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(21,91,165,1);
}
.content_area{
    width:100%;
    padding-left:1.5rem;
    padding-right:1.5rem;
    box-sizing: border-box;
    overflow: hidden;
}
.content_li{
    width:100%;
    margin-top:1.95rem;
    height:4.9rem;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.content_li:nth-last-child(1){
    margin-bottom:2.4rem;
}
.content_li_left{
    width:29rem;
    height:4.9rem;
    font-size:1rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(83,83,83,1);
    line-height:1.2rem;
}
.content_li_right{
    width:3rem;
    height:3rem;
}
.grey_rectangular{
    width:100%;
    height:1rem;
    margin-top:1.45rem;
    background:rgba(245,245,245,1);
}
.grey_line{
    margin-top:1.4rem;
    width:100%;
    height:0.1rem;
    background:rgba(203,203,203,1);
}
</style>