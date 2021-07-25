<template>
    <div>
        <home-header></home-header>
        <home-introduction></home-introduction>
        <home-basis></home-basis>
        <home-swiper></home-swiper>
        <home-workflow></home-workflow>
        <home-girvan></home-girvan>
        <home-kclique></home-kclique>
        <home-asyn-lpa></home-asyn-lpa>
        <home-asyn-fluidc></home-asyn-fluidc>
        <home-greedy></home-greedy>
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
import HomeAsynFluidc from './pages/AsynFluidc'
import HomeAsynLpa from './pages/AsynLpa'
import HomeGreedy from './pages/Greedy'
import HomeKclique from './pages/Kclique'
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
        HomeBasis,
        HomeAsynFluidc,
        HomeAsynLpa,
        HomeGreedy,
        HomeKclique,
    },
    mounted() {
        this.getHttp();
        
    },
    methods: {
        getHttp:function() {
            
        }
    }
}
</script>
<style>

</style>
