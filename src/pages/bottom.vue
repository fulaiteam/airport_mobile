<template>
    <div class='bottom'>
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
            <div>
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
               ]
            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>
.bottom{
    width:100%;
    height:229px;
    box-sizing: border-box;
    background:url('../assets/images/bottom/bottom.png')  no-repeat center;
    display: flex;
    justify-content: center;

}
.bot_content{
    width: 1200px;
    height: 229px;
    padding-left: 32px;
    color: #FFFFFF;
    font-size: 16px;
    font-family: SourceHanSansCN-Regular;
    display: flex;
    flex-direction: column;
}
.title{
    margin-top: 62px;
}
.context_list{
    margin-top: 22px;
    width: 660px;
    display: flex;
    justify-content: flex-start;
}
.context_list li{
    list-style: none;
    margin-right:12px
}
.line{
    height: 2px;
    width: 657px;
    margin: 34px 0 19px 0;
    background:url('../assets/images/bottom/line.png')  no-repeat center;
}

</style>