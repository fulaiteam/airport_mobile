<template>
<div>
    <div  class='ind_allbg' >
        <!-- 圆点区域开始 -->
        <div  class='dot_area_line' >
        <div   class='dot_area' >
            <div   v-for='(item,index) in imglist'    :class="{ 'dot': true, 'dot_active': item.img == nowactive }"    :key='index'   @click='changenowactive(item.img)'  ></div>
       
        </div>
        </div>
        <!-- 圆点区域结束 -->
        <!-- 尾部区域开始 -->
        <div  class='bottom_area_sch' >
            <div  class='bottom_area_line' >

            </div>
            <div  class='bottom_area_text' >
                版权信息所有©2010-2020北京首都机场集团
            </div>
        </div>
        <!-- 尾部区域结束 -->
    </div>
</div>
</template>

<script>
    export default {
        data(){
            return{
                nowactive:'',
                imglist:[
                    {
                        img:'1'
                    },
                    {
                        img:'2'
                    },
                    {
                        img:'3'
                    },
                    {
                        img:'4'
                    },
                    {
                        img:'5'
                    },
                    {
                        img:'6'
                    },
                    {
                        img:'7'
                    },
                    {
                        img:'8'
                    }
                ]
            }
        },
        methods:{
            changenowactive(a){
                this.nowactive = a;


            }
        }
    }
</script>

<style  scoped>
.ind_allbg{
    width:100%;
    height:1008px;
    position: relative;
    background:darkblue;
}
.dot_area_line{
    width:12px;
    margin-left:32px;
    height:1008px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dot_area{
    width:12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.dot{
    width:12px;
    height:12px;
    margin-top:9px;
    border-radius: 50%;
    background:#666666;
    opacity: 0.4;
}
.dot_active{
    background:white;
    opacity: 1;
}
.bottom_area_sch{
    position:absolute;
    height:40px;
    bottom:50px;
    width:100%;
    z-index: 99999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.bottom_area_line{
    width:638px;
    height:2px;
    background:url('../../assets/images/index/line.png') no-repeat center; 
}
.bottom_area_text{
    height:22px;
    font-size:22px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:22px;
}
</style>