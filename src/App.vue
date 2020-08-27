<template>
    <div id="app" v-cloak>
        <router-view/>
    </div>
</template>

<script>
        window.onresize = function(){
            setHTMLFontSize();
        }
      function   setHTMLFontSize(){
        
           var cw = document.documentElement.clientWidth;
        if (cw > 1920) {
            cw = 1920;
        }
        document.getElementsByTagName("div")[0].style.fontSize = 20 * ( cw / 750) + 'px'
        console.log(document.getElementsByTagName("div")[0].style.fontSize)

        }
      
    export default {
        name: 'App',
          created(){
                         var cw = document.documentElement.clientWidth;
        if (cw > 1920) {
            cw = 1920;
        }
        document.getElementsByTagName("div")[0].style.fontSize = 20 * ( cw / 750) + 'px'
        console.log(document.getElementsByTagName("div")[0].style.fontSize)
  },
    }
</script>

<style>
.el-popup-parent--hidden{
    overflow: auto;
}
    [v-cloak]{ display:none}
    
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        width: 100%;
        height: 100%;
        color: #666;
        /*overflow: hidden;*/
    }

    #app {
        width: 100%;
        height: 100%;
    }

</style>
