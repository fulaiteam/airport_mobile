<template>
    <div class='content'>
        <div class="tab">
            <img src="../../assets/images/yunExhibitionhall/bar.png" alt="">
        </div>
        <div class="intrduce">
            <div class="intrduce_content">
                <img @click="todes(1)" src="../../assets/images/yunExhibitionhall/con1.png" alt="">
                <img @click="todes(2)" src="../../assets/images/yunExhibitionhall/con2.png" alt="">
                <img @click="todes(3)" src="../../assets/images/yunExhibitionhall/con3.png" alt="">
                <img @click="todes(4)" src="../../assets/images/yunExhibitionhall/con4.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                
            }
        },
        methods:{

            todes(val){
                if(val == 1){
                    this.$router.push({name: 'companyName'});
                }else if(val == 2){
                    this.$router.push({name: 'exhibitionConpanyname'});
                }else if(val == 3){
                    this.$router.push({name: 'sceneDemonstration'});
                }
            }
        }
    }
</script>

<style scoped>
/* tab开始 */
.content{
    width: 100%;
}
.tab{
    width: 100%;
}
/* tab结束 */
.intrduce{
    width: 100%;
    font-family: SourceHanSansCN-Medium;
    display: flex;
    justify-content: center;
    color: #535353;
    font-size: 18px;
}
.intrduce_content{
    width: 1200px;
    margin: 120px 0 210px 0;

}
.intrduce_content img:nth-child(2n+1){
    margin-right:30px;
}
.intrduce_content img{
    margin-top:30px;
}
</style>