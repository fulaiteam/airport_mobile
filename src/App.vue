<template>
    <div id="app" v-cloak>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
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
