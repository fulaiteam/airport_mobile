<template>
    <div class='bottom'>
        <div class="bot_nav">
            <div class="nav_li" v-for="(item,index) in navList" @click='changenowactive(item.name,item.url,index)' :key="index">
                <img v-if="item.show" :src="item.img1" alt="">
                <img v-if="!item.show" :src="item.img" alt="">
            </div>
        </div>
        <div class="bot_content">
            <div class="title">
                首都机场集团四型机场会务部
            </div>
           
            <div class="context_list">
                <li v-for="(item,index) in contextList" :key='index'>
                    {{ item.name }}{{ item.con }}
                </li>
            </div>
            <div class="line"></div>
            <div class="banquan">
                版权信息所有©2010-2020北京首都机场集团
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
               contextList:[
                   {name:"电话:",con:"010-66666666"},
                   {name:"手机:",con:"15066666666"},
                   {name:"邮箱:",con:"6666666@66.com"},
                   {name:"传真:",con:"010-66666666"},
               ],
               navList:[
                   {show:false,url:'index',img:require("../assets/images/bottom/icon1.png"),img1:require("../assets/images/bottom/i1.png")},
                   //云展馆
                   {show:true,url:'yunExhibitionhall',img:require("../assets/images/bottom/icon2.png"),img1:require("../assets/images/bottom/i2.png")},
                   {show:true,url:'cooperative',img:require("../assets/images/bottom/icon3.png"),img1:require("../assets/images/bottom/i3.png")},
                   {show:true,url:'index',img:require("../assets/images/bottom/icon4.png"),img1:require("../assets/images/bottom/i4.png")},
                   {show:true,url:'index',img:require("../assets/images/bottom/icon5.png"),img1:require("../assets/images/bottom/i5.png")},
               ],
               
            }
        },
        methods:{
            changenowactive(a,b,i){
                this.nowactive = a;
                this.$router.push({name:b})
                this.navList.forEach(function(item,index){
                    item.show = true
                })
                this.navList[i].show = !this.navList[i].show

            }
        }
    }
</script>

<style scoped>
.bottom{
    width:100%;
    height:15rem;
    border-top:1px solid #DFDFDF;
}
.bot_nav{
    width: 100%;
    height: 4.9rem;
    display: flex;
    justify-content: flex-start;
    padding: 0 3.6rem;
}
.bot_nav .nav_li img{
    height: 3.5rem;
    width: 3.5rem;
    margin-right: 3.4rem;
    margin-top: 0.6rem;
}
.bot_nav .nav_li:last-child img{
    margin-right: 0;
}
.bot_content{
    width: 100%;
    height: 10.1rem;
    background:url('../assets/images/bottom/bottom.png')  no-repeat center;
    background-size: 100% 10.1rem;
    color: #fff;
    font-size: 0.9rem;
    position: relative;
}
.bot_content .title{
    position: absolute;
    top: 1.7rem;
    left: 1.5rem;

}
.context_list{
    width: 28rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    position: absolute;
    left:1.5rem;
    top:3.4rem
}
.context_list li{
    list-style: none;
    margin-right:12px
}
.banquan{
    position: absolute;
    left: 1.5rem;
    bottom: 1.1rem;
}
</style>