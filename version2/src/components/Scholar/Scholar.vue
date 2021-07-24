<template>
    <div>
        <scholar-header v-on:scholarSearch="inputSearch"></scholar-header>
        <scholar-list :result="result" :inputName="inputName" :oops="oops"></scholar-list>
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
            inputName: "",
            oops: false,
        }
    },
    mounted() {
        
    },
    methods: {
        inputSearch(param) {
            this.inputName = param;
            this.clearResult();
            this.$http.get("http://localhost:8080/static/mock/data.json")
            .then((res)=>{
                var scholarResult = res.data.data;
                
                for(var item = 0;item < scholarResult.length; item++) {
                    var str = scholarResult[item].name.toLowerCase();
                    if(str.indexOf(param.toLowerCase()) != -1) {
                        this.result.push(scholarResult[item]);
                    }
                }
                if(this.result.length == 0) {
                    this.oops = true;
                }
                else this.oops = false;
                console.log(this.result); 
            })  
        },
        clearResult() {
            this.result=[];
        }
    }
}
</script>
<style scoped>

</style>
