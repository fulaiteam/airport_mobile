<template>
    <div class='content'>
        <div class="center_box">
            <div class="sence">
                <div class="sence_title">场景演示</div>
                <div class="sence_box">
                    <div class="video_box">
                        <video src="../../assets/images/congressTopics/test123.mp4"></video>
                    </div>
                    <div class="pro_name">
                        <div class="pro_title">产品名称</div>
                        <div class="pro_con">在这片从直布罗陀到达达尼尔，从突尼斯到威尼斯的浩瀚无垠的大海上，一艘整洁、漂亮、轻捷的游艇正在黄昏的轻雾中穿行。犹如一只迎风展翅的天鹅，平稳地在水面上滑行。</div>
                        <div class="subtitle pro_con">小标题</div>
                        <div class="pro_con">在这片从直布罗陀到达达尼尔，从突尼斯到威尼斯的浩瀚无垠的大海上。</div>
                        <div class="subtitle pro_con">小标题</div>
                        <div class="pro_con">在这片从直布罗陀到达达尼尔，从突尼斯到威尼斯的浩瀚无垠的大海上。</div>
                    </div>
                </div>
                <div class="others">
                    <div class="otherspro_title">其他产品展示</div>
                    <div class="other_pro">
                        <div class="other_pro_li" v-for="(item,index) in productList" :key="index">
                            <img :src="item.img" alt="">
                            <div class="pro_con">
                                <div class="pro_title">{{ item.name }}</div>
                                <div class="pro_content">{{ item.con }}</div>
                            </div>
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
                    {img:require('../../assets/images/yunExhibitionhall/pro1.png'),name:'产品名称',con:'在这片从直布罗陀到达达尼尔，从突尼斯到威尼斯的浩瀚无垠的大海上，一艘整洁、漂亮、轻捷的游艇正在黄昏的轻雾中穿行。'},
                    {img:require('../../assets/images/yunExhibitionhall/pro1.png'),name:'产品名称',con:'在这片从直布罗陀到达达尼尔，从突尼斯到威尼斯的浩瀚无垠的大海上，一艘整洁、漂亮、轻捷的游艇正在黄昏的轻雾中穿行。'},
                    {img:require('../../assets/images/yunExhibitionhall/pro1.png'),name:'产品名称',con:'在这片从直布罗陀到达达尼尔，从突尼斯到威尼斯的浩瀚无垠的大海上，一艘整洁、漂亮、轻捷的游艇正在黄昏的轻雾中穿行。'}
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
    font-family: SourceHanSansCN-Medium;
}
.center_box{
    width:100%;
    display: flex;
    justify-content: center;
}
/* 场景演示开始 */
.content .center_box .sence{
    width: 1200px;
    margin-bottom: 168px;
}
/* 场景演示标题 */
.content .center_box .sence .sence_title{
    height: 140px;
    line-height: 140px;
    font-size: 40px;
    color: #333333;
    font-weight: 500;
    text-align: center;
}
.content .center_box .sence .sence_box{
    display: flex;
    justify-content: flex-start;
}
.content .center_box .sence .sence_box .video_box video{
    height: 450px;
    width: 800px;
    object-fit: fill;
}
/* 场景演示右侧产品名称 */
.content .center_box .sence .sence_box .pro_name{
    margin-left: 30px;
    background: #F5F5F5;
    height: 400px;
    width: 310px;
    padding: 25px 30px;
    color: #535353;
}
.content .center_box .sence .sence_box .pro_name .pro_title{
    font-size: 22px;
    color: #333;
}
.content .center_box .sence .sence_box .pro_name .pro_con{
    font-size: 14px;
    line-height: 20px;
    margin-top: 25px;
    font-weight: 400;
}
.content .center_box .sence .sence_box .pro_name .subtitle{
    font-weight: 500;
}
/* 场景演示结束 */
/* 其他产品展示开始 */
.others{
    margin-top: 8px;
}
.others .otherspro_title{
    text-align: center;
    color: #1577C9;
    height: 218px;
    line-height: 218px;
    font-size: 30px;
}
.others .other_pro{
    display: flex;
    justify-content: flex-start;
}
.others .other_pro .other_pro_li{
    width: 380px;
    margin-right: 22px;
}
.others .other_pro .other_pro_li:last-child{
    margin-right: 0;
}
.others .other_pro .other_pro_li img{
    height: 180px;
    width: 380px;
}
.others .other_pro .other_pro_li .pro_con{
    padding: 15px 30px;
}
.others .other_pro .other_pro_li .pro_con .pro_title{
    color:#1577C9;
    font-size: 18px;
    font-weight: 500;
}
.others .other_pro .other_pro_li .pro_con .pro_content{
    color:#535353;
    font-size:14px;
    margin-top: 13px;
    line-height: 20px;
}
/* 其他产品展示结束 */
</style>