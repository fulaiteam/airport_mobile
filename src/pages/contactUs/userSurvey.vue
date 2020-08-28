<template>
    <div>
        <!--轮播图区域开始  -->
        <img src="../../assets/images/index/banner_1.gif" class='banner_img'>
        <!-- 轮播图区域结束 -->
        <!-- 版心区域开始 -->
        <div  class='content_area' >
            <div class='title' >
                用户调研
            </div>
            <div class='text_area'   v-for='i in 3'  >
工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事 1992.05－1993.07 北京市通县民政局干事 1993.07－1994.12 北京市通县政府办办事员 1994.12－1998.12 北京市通县（通州区）政府办信息科副科长 1998.12－2003.03 北京市通州区政府办督察室主任 2003.03－2005.06 北京市民政局副局长 2005.06－2006.05 北京市通州区民政局党委委员、副局长 2006.05－2010.08 北京市通州区宋庄镇党委委员、副书记、镇长 2010.08－2012.11 北京市通州区新城建设管理委员会调研员、新城运营公司董事长 2012.11－2013.11 北京市通州区人民政府国有资产监督管理委员会调研员 2013.11－2014.02 北京市通州区环境保护局书记 2014.02－2019.03 北京市通州区环境保护局书记、局长 2019.03－2019.09 北京市通州区交通局党委书记、局长 2019.09－至今 北京市通州区交通局党组书记、局长
            </div>
            <div  class='agree_area' >
               <img src="../../assets/images/contactUs/confirm_btn.png"   class='confirm'   >
            </div>
        </div>
        <!-- 版心区域结束 -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                checked:false
            }
        },
        methods:{
            changenowcheck(){
                this.checked = ! this.checked;
            }
        }
    }
</script>

<style  scoped>
.banner_img{
    width:100%;
    height:15.4rem;
}
.content_area{
    width:100%;
    box-sizing: border-box;
    padding-left:1.55rem;
    padding-right:1.5rem;
}
.title{
    margin-top:1.75rem;
    width: 100%;
    line-height: 1.2rem;
    font-size: 1.2rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #155BA5;
    display: flex;
    justify-content: center;
    align-items: center;
}
.text_area{
    width:100%;
    margin-top:1.75rem;
    height:7.5rem;
    font-size: 1rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #535353;
    line-height: 1.3rem;
    overflow: hidden;
}
.agree_area{
    width:100%;
    margin-top:2.6rem;
    margin-bottom:3.3rem;
    height:1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.confirm{
    width:6.3rem;
    height:1.5rem;
}
</style>