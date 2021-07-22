<template>
    <div class = "analysis">
        <div>
            <div class = "analysis-top">Result Analysis</div>
        </div>
        <ul class = "analysis-list">
            <li class = "analysis-item" v-for="item in resultList" :key="item.id">
                <div class = "analysis-left">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class = "analysis-right">
                    <p>{{item.analyze}}</p>
                </div>
            </li>
        </ul>

    </div>
</template>
<script>
export default {
    data () {
        return {
            resultList: [
                {
                    id: "01",
                    imgUrl: require('../../../../img/gn12.png'),
                    analyze: "←Better perf dsakjclsd asdjlasdjl alksdjfasd alksdjflkasdj alsdjflkasjd alsdkjflkasdj asldjflaskj asldkjfliasdj la sdjlkjas asdljfals asdlkjfas,dkjfas dfasdjl akjcsnasdkjcmasdcasmdcklasdmcasdlkcmasdcmasldkcmasdlkcmasdc ajdsncmasldkcamdsormance on small dataset in small numbers of iterations, but the community just equals to the relationship of co-author"
                },
                {
                    id: "02",
                    imgUrl: require('../../../../img/gn12.png'),
                    analyze: "↑Betterkjdcasalkcmsladsmkmcas performance on small dataset in small numbers of iterations, but the community just equals to the relationship of co-author"
                },
                {
                    id: "03",
                    imgUrl: require('../../../../img/gn12.png'),
                    analyze: "↑Better perdsacjnasdcj,adscnasdkacsdkjncawkeneoiformance on small dataset in small numbers of iterations, but the community just equals to the relationship of co-author"
                },
            ]
        }
    }
}
</script>
<style scoped>
.analysis {
    padding: 1rem;

    background : #b8d9f8;

}
.analysis-top {
    font-weight: 1000;
    color: #043a6d;
    text-align: center;
    display: block;
    padding: .2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #043a6d;
}
.analysis-list {
    font-size: .36rem;
    font-weight: 100;
    line-height: .6rem;
}
.analysis-item {
    overflow:hidden;
    align-items: center;
    padding-top: .6rem;
    padding-bottom: .4rem;
    border-bottom: 2px dotted #043a6d;
}
.analysis-left {
    width: 48%;
    float: left;
    display: flex;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.analysis-left img{
    width: 100%;
    height: auto;
}
.analysis-right {
    width: 48%;
    float:right;

}
</style>
