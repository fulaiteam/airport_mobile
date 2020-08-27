<template>
    <div  class='top_nav' >
        <div  class='middle_area_content' >
            <div class='logo_area' >
                <div  class='nav_ima' >

                </div>
            </div>
            <!-- 导航ul开始 -->
            <ul  class='nav_ul'  >
                <li  :class="{ 'nav_li': true, 'nav_li_active': item.name == nowactive }"   v-for="(item,index)  in  navList"     @click='changenowactive(item.name,item.url)'  :key='index' >
                    {{item.name}}
                </li>
            </ul>
            <!-- 导航ul结束 -->

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                nowactive:'',
                navList:[
                    {
                        name:'首页',
                        url:'index'
                    },
                    {
                        name:'大会专题',
                        url:'congressTopics'
                    },
                    {
                        name:'大会嘉宾',
                        url:'conferenceGuests'
                    },
                    {
                        name:'云展厅',
                        url:'yunExhibitionhall'
                    },
                    {
                        name:'云体验',
                        url:'cloudExperience'
                    },
                    {
                        name:'云会谈'
                    },
                    {
                        name:'新闻资讯',
                        url:'newsInfo'
                    },
                    {
                        name:'合作伙伴'
                    },
                    {
                        name:'联系我们',
                        url:'contactUs'
                    },
                    {
                        name:'注册/登录'
                    },
                ]
            }
        },
        methods:{
            changenowactive(a,b){
                this.nowactive = a;
                this.$router.push({name:b})

            }
        }
    }
</script>

<style  scoped>
.top_nav{
    width:100%;
    height:72px;
    box-sizing: border-box;
  background:linear-gradient(180deg,rgba(203,203,203,1) 0%,rgba(255,255,255,1) 100%);
}
.middle_area_content{
    width:1200px;
    margin:0 auto;
    height:72px;
}
.logo_area{
    float: left;
    height:72px;
    margin-right:43px;
    width:213px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav_ima{
    width:213px;
    height:61px;
    background:url('../assets/images/nav/logo.png')  no-repeat center;
}
.nav_ul{
    float: left;
    height:72px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.nav_li{
    height:72px;
    padding-left:15px;
    padding-right:15px;
    font-size:18px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(51,51,51,1);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav_li_active{
    color:white;
    background:linear-gradient(180deg,rgba(29,127,249,1),rgba(0,72,153,1));
}

</style>