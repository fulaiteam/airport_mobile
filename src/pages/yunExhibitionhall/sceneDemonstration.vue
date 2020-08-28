<template>
    <div class='content'>
        <div class="center_box">
            <div class="sence">
                <div class="sence_title">场景演示</div>
                <div class="sence_box">
                    <div class="video_box">
                        <video src="../../assets/images/congressTopics/test123.mp4"></video>
                    </div>
                </div>
                <div class="others">
                    <div class="pro_name">
                        <div class="pro_title">产品名称</div>
                        <div class="pro_con">在这片从直布罗陀到达达尼尔，从突尼斯到威尼斯的浩瀚无垠的大海上，一艘整洁、漂亮、轻捷的游艇正在黄昏的轻雾中穿行。犹如一只迎风展翅的天鹅，平稳地在水面上滑行。</div>
                    </div>
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
    background: #F5F5F5;
}
.center_box{
    width:100%;
    display: flex;
    justify-content: center;
}
/* 场景演示开始 */
.content .center_box .sence{
    width: 100%;
}
/* 场景演示标题 */
.content .center_box .sence .sence_title{
    padding-top: 0.5rem;
    height: 4.3rem;
    line-height: 4.3rem;
    font-size: 1.4rem;
    color: #333333;
    font-weight: bold;
    text-align: center;
    background: #fff;
}
.content .center_box .sence .sence_box{
    height: 21.1rem;
    width: 100%;
    background: #fff;
}
.content .center_box .sence .sence_box .video_box video{
    height: 21.1rem;
    width: 100%;
    object-fit: fill;
}
/* 场景演示右侧产品名称 */
.pro_name{
   padding: 0.9rem 2.4rem 1.4rem 2.4rem;
   height: 7.8rem;
   background: #fff;
}
.pro_name .pro_title{
    height: 2.8rem;
    color: #155BA5;
    font-weight: bold;
    background: #fff;
}
.pro_name .pro_con{
    font-size: 0.9rem;
    color: #535353;
}
/* 场景演示结束 */
/* 其他产品展示开始 */
.others{
    background: #F5F5F5;
}
.others .otherspro_title{
    margin-top: 1rem;
    color: #1577C9;
    height: 3.4rem;
    line-height: 3.4rem;
    font-size: 1.2rem;
    font-weight: bold;
    background: #fff;
    padding: 1.1rem 2.6rem;
}
.others .other_pro{
    display: flex;
    flex-direction: column;
    background: #fff;
}
.others .other_pro .other_pro_li{
    display: flex;
    justify-content: flex-start;
    padding: 2.2rem 0;
    border-bottom: 1px solid #CBCBCB;
}
.others .other_pro .other_pro_li:last-child{
    border: 0;
}
.others .other_pro .other_pro_li img{
    height: 6.5rem;
    width: 10rem;
    border-radius: 5px;
    margin-left: 4.4rem;
}
.others .other_pro .other_pro_li .pro_con{
    width: 17.7rem;
    height: 6.5rem;
    margin-left: 1.5rem;
    margin-right: 3.8rem;
}
.others .other_pro .other_pro_li .pro_con .pro_title{
    color:#333333;
    font-size: 1.1rem;
    font-weight: bold;
}
.others .other_pro .other_pro_li .pro_con .pro_content{
    color:#535353;
    font-size:0.8rem;
    margin-top: 0.8rem;
    height: 3.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
/* 其他产品展示结束 */
</style>