<template>
    <div class="hj-home">
            <NavBar></NavBar>

                <router-view/>


            <Bottom></Bottom>

    </div>
</template>

<script>
    import   NavBar  from './navBar.vue';
    import   Bottom  from './bottom.vue';
    export default {
        name: "home",
        data() {
            return{
                
            }
        },
        filters: {

        },
        watch: {

        },
        created() {

        },
        methods: {

        },
        components:{
            NavBar,
            Bottom
        }

    }
</script>

<style scoped>
   
</style>
