<template>
    <div>
        <scholar-header></scholar-header>
        <scholar-list></scholar-list>
        <scholar-bottom></scholar-bottom>
    </div>
</template>
<script>
import ScholarHeader from './Pages/Header'
import ScholarList from './Pages/List'
import ScholarBottom from './Pages/Bottom'
export default {
    components: {
        ScholarHeader,
        ScholarList,
        ScholarBottom,
    }
}
</script>
<style scoped>

</style>
