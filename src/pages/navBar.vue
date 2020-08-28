<template>
    <div  class='top_nav' >
       <img src="../assets/images/index/left_logo.png" class='left_logo_area'>
       <div  :class='{right_text_area:true, active_item:nowactive == item.name}'   v-for='(item,index)   in  navList'   :key='index'    @click='changenowactive(item.url,item.name)'  >
           {{item.name}}
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
                        name:'大会专题',
                        url:'congressTopics'
                    },
                    {
                        name:'大会嘉宾',
                        url:'conferenceGuests'
                    },
                    {
                        name:'合作伙伴'
                    },
                    {
                        name:'新闻资讯',
                        url:'newsInfo'
                    },
                ]
            }
        },
        methods:{
            changenowactive(a,b){
                this.$router.push({name:a});
                this.nowactive = b;

            }
        }
    }
</script>

<style  scoped>
.top_nav{
    width:100%;
    height:4.4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.left_logo_area{
    float:left;
    width:3.55rem;
    height:3.75rem;
    margin-left:2.75rem;
}
.right_text_area{
    box-sizing: border-box;
    float:left;
    height:1.9rem;
    margin-left:2.8rem;
    font-size:1.1rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(51,51,51,1);
}
.active_item{
    border-bottom:1px solid #155BA5;
    color: #155BA5;
}
</style>