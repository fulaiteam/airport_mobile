<template>
    <div class='content'>
        <div class="tab">
            <img src="../../assets/images/yunExhibitionhall/bar.png" alt="">
        </div>
        <div class="intrduce">
            <div class="intrduce_content">
                <img @click="todes(1)" src="../../assets/images/yunExhibitionhall/i1.png" alt="">
                <img @click="todes(2)" src="../../assets/images/yunExhibitionhall/i2.png" alt="">
                <img @click="todes(3)" src="../../assets/images/yunExhibitionhall/i3.png" alt="">
                <img @click="todes(4)" src="../../assets/images/yunExhibitionhall/i4.png" alt="">
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
    background: #fff;
}
.tab{
    width: 100%;
}
.tab img{
    height: 15.2rem;
    width:100%;
}
/* tab结束 */
.intrduce{
    width: 100%;
    font-family: SourceHanSansCN-Medium;
}
.intrduce_content{
    width: 100%;
    padding: 2rem 1.4rem;
}
.intrduce_content img:nth-child(2n+1){
    margin-right:1.1rem;
}
.intrduce_content img{
    height: 9.6rem;
    width: 16.8rem;
    margin-bottom:1rem;
}
</style>