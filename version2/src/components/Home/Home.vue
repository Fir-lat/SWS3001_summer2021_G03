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
        <home-neo4j></home-neo4j>
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
import HomeNeo4j from './pages/Visualization'
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
        HomeNeo4j,
    },
    mounted() {
        document.title="SWS3001 G03"
        
    },
    methods: {
    }
}
</script>
<style>

</style>
