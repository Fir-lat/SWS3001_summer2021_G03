<template>
    <div>
        <home-header></home-header>
        <home-introduction></home-introduction>
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
export default {
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIntroduction,
        HomeGirvan,
        HomeBottom,
        HomeAnalysis,
        HomeWorkflow,
        HomeThanks
    }
}
</script>
<style>

</style>
