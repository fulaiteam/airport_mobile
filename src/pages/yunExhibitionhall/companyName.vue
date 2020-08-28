<template>
    <div class='content'>
        <div class="content_con">
            <div class="center_box">
                <div class="title">企业名称</div>
                <div class="list">
                    <div class="subtitle">
                        <img src="../../assets/images/yunExhibitionhall/icon1.png" alt="">
                        <span>企业简介</span>
                    </div>
                    <div class="con">
                        工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事 1992.05－1993.07 北京市通县民政局干事 1993.07－1994.12 北京市通县政府办办事员 1994.12－1998.12 北京市通县（通州区）政府办信息科副科长 1998.12－2003.03 北京市通州区政府办督察室主任
                    </div>
                </div>
                <div class="list list2">
                    <div class="subtitle">
                        <img src="../../assets/images/yunExhibitionhall/icon2.png" alt="">
                        <span>主营产品</span>
                    </div>
                    <div class="con_li">
                        <div class="li_box" v-for="(item,index) in productList" :key="index">
                            <div class="pro_title">{{ item.name }}</div>
                            <div class="line"></div>
                            <div class="pro_con">{{ item.con }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                productList:[
                    {name:'产品名称  产品名称',con:'工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事'},
                    {name:'产品名称  产品名称',con:'工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事'},
                    {name:'产品名称  产品名称',con:'工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事'},
                    {name:'产品名称  产品名称',con:'工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事'},
                    {name:'产品名称  产品名称',con:'工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事'},
                    {name:'产品名称  产品名称',con:'工作履历：1991.07－1992.05 北京市通县胡各庄乡人民政府干事'},
                ]
            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>
/* tab开始 */
.content{
    width: 100%;
    background: #F5F5F5;
}
.center_box{
    width: 100%;
}
/* 企业名称 */
.content_con .title{
    background:url('../../assets/images/yunExhibitionhall/cname.png')  no-repeat center;
    background-size: 100% 4.8rem;
    width: 100%;
    height: 4.8rem;
    line-height: 4.8rem;
    text-align: center;
    font-size:1.4rem;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
}
/* list公共样式开始 */
.list{
    padding: 2rem 1.5rem;
    background: #fff;
}
.list2{
    margin-top: 1rem;
}
.list .subtitle{
    width: 11.1rem;
    height: 2.4rem;
    line-height: 2.4rem;
    font-size:1.2rem;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color: #155BA5;
    border-bottom: 1px solid #CBCBCB;
}
.list .subtitle img{
    height: 1.6rem;
    width: 1.4rem;
}
/* list公共样式结束 */
/* 企业简介开始 */
.list .con{
    background:rgba(255,255,255,1);
    border-radius:10px;
    padding:1.5rem;
    color: #535353;
    font-size: 1rem;
}
/* 企业简介结束 */
/* 主营产品开始 */
.list .con_li{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 0.3rem;
    margin-bottom:1.5rem;
}
.list .con_li .li_box{
    width:14.3rem;
    height:7rem;
    background:#F5F5F5;
    border-radius:10px;
    padding: 1.4rem 1.1rem;
    margin-top: 0.8rem;

}
.list .con_li .li_box:nth-child(2n+1){
    margin-right:1.4rem;
}
.list .con_li .li_box .pro_title{
    font-size:1.2rem;
    font-family:Source Han Sans CN;
    font-weight:500;
    color: #333333;
}
.list .con_li .li_box .line{
    height: 1px;
    width: 2.1rem;
    background: #616161;
    margin-top: 0.7rem;
}
.list .con_li .li_box .pro_con{
    font-size:0.8rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    color: #535353;
    margin-top: 0.9rem;
}
/* 主营产品结束 */
</style>