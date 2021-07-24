<template>
    <div>
        <scholar-header v-on:scholarSearch="inputSearch"></scholar-header>
        <scholar-list :result="result" :inputName="inputName"></scholar-list>
        <scholar-bottom></scholar-bottom>
    </div>
</template>
<script>
import ScholarHeader from './Pages/Header'
import ScholarList from './Pages/List'
import ScholarBottom from './Pages/Bottom'
export default {
    name: "scholar",
    components: {
        ScholarHeader,
        ScholarList,
        ScholarBottom,
    },
    data: {
        
    },
    data() {
        return {
            result: [],
            inputName: ""
        }
    },
    mounted() {
        
    },
    methods: {
        inputSearch(param) {
            this.inputName = param;
            this.$http.get("http://localhost:8080/static/mock/data.json")
            .then((res)=>{
                var scholarResult = res.data.data;
                
                for(var item = 0;item < scholarResult.length; item++) {
                    var str = scholarResult[item].name.toLowerCase();
                    if(str.indexOf(param.toLowerCase()) != -1) {
                        this.result.push(scholarResult[item]);
                    }
                }
                alert(scholarResult[1].name);
                console.log(this.result);   
            })  
        }
    }
}
</script>
<style scoped>

</style>
