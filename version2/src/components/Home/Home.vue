<template>
    <div>
        <home-header></home-header>
        <home-introduction></home-introduction>
        <home-basis></home-basis>
        <home-swiper></home-swiper>
        <home-workflow></home-workflow>
        <home-girvan></home-girvan>
        <home-analysis></home-analysis>
        <home-thanks></home-thanks>
        <home-bottom></home-bottom>
        
    </div>
</template>
<script>
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIntroduction from './pages/Introduction'
import HomeGirvan from './pages/Girvan'
import HomeBottom from './pages/Bottom'
import HomeAnalysis from './pages/Analysis'
import HomeWorkflow from './pages/Workflow'
import HomeThanks from './pages/Thanks'
import HomeBasis from './pages/Basis'
export default {
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIntroduction,
        HomeGirvan,
        HomeBottom,
        HomeAnalysis,
        HomeWorkflow,
        HomeThanks,
        HomeBasis
    },
    mounted() {
        this.getHttp();
        this.$http.get("http://localhost:8080/static/mock/data.json")
        .then((res)=>{
            console.log(res);
        })
    },
    methods: {
        getHttp:function() {
            
        }
    }
}
</script>
<style>

</style>
