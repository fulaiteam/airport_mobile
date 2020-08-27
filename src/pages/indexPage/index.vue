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
.bottom_area_text{
    height:3rem;
    background:red;
    
}
</style>