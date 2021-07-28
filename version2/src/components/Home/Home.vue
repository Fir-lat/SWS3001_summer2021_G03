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
        <home-static></home-static>
        <home-dynamic></home-dynamic>
        <home-analysis></home-analysis>
        <home-thanks></home-thanks>
        <home-bottom></home-bottom>
        
    </div>
</template>
<script>
import HomeHeader from './Pages/Header'
import HomeSwiper from './Pages/Swiper'
import HomeIntroduction from './Pages/Introduction'
import HomeGirvan from './Pages/Girvan'
import HomeBottom from './Pages/Bottom'
import HomeAnalysis from './Pages/Analysis'
import HomeWorkflow from './Pages/Workflow'
import HomeThanks from './Pages/Thanks'
import HomeBasis from './Pages/Basis'
import HomeAsynFluidc from './Pages/AsynFluidc'
import HomeAsynLpa from './Pages/AsynLpa'
import HomeGreedy from './Pages/Greedy'
import HomeKclique from './Pages/Kclique'
import HomeDynamic from './Pages/Dynamic'
import HomeStatic from './Pages/Static'
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
        HomeDynamic,
        HomeStatic,
    },
    mounted() {
        document.title="NUS2021-SWS3001-G03"
        
    },
    methods: {
    }
}
</script>
<style>

</style>
