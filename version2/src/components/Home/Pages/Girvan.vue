<template>
    <div class = "girvan">
        <div class = "girvan-top">
            <span>Girvan Newman</span>
        </div>
        <ul class = "girvan-list">
            <li class = "girvan-item" v-for='item in girvanList' :key='item.id'>
                <img :src="item.imgUrl" alt="">
                <p >GN with spring_layout {{item.title}} iterations</p>
            </li>
        </ul>
        <div class = "girvan-result">
            <p><span class = "iconfont icon">
                &#xe608;
            </span>This algorithm detects communities by progressively removing edges from the original graph. The algorithm removes the “most valuable” edge, traditionally the edge with the highest betweenness centrality, at each step.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>It has a stable and excellent performance, but you are supposed to fix the number of communities before running the algorithm, so you hace to try many times to find a good division.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>And as the scale of the graph becomes large, this algorithm gets slow quickly due to its high complexity.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>There is also a big problem that this algorithm removes edges from the original graph, so after the community detection, some edges would lose which would be difficult to handle.</p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            girvanList: [
                
                {
                    id: "02",
                    imgUrl: require('../../../../img/gn12.png'),
                    title: "12",
                },
                {
                    id: "03",
                    imgUrl: require('../../../../img/gn17.png'),
                    title: "17",
                },
                {
                    id: "04",
                    imgUrl: require('../../../../img/gn100.png'),
                    title: "100",
                },
                
            ]
        }
    }
}
</script>
<style scoped>
.icon {
    font-size: 23px;
}
.girvan {
    margin-top: .2rem;
    background: #fff;
    padding-bottom: 1rem;
    padding-top: .5rem;
}
.girvan-top {
    font-weight: 1000;
    color: #043a6d;
    text-align: center;
    display: block;
    padding: .2rem;
    padding-bottom: 1rem;

}
.girvan-list {
    width: 80%;
    margin: 0 auto;
    overflow-x: scroll;
    white-space: nowrap;
    overflow-y: hidden;
}
.girvan-item {
    padding: 0 .2rem;
    width: 14rem;
    height: 9rem;
    display: inline-block;
}
.girvan-item img {
    width: 100%;

}
.girvan-item p {
    color: #474747;
    margin-top: .2rem;
    font-size: .56rem;
    text-align: center;
}
.girvan-result {
    padding-top: 10px;
    width: 80%;
    margin: 0 auto;
    font-size: .64rem;
    border-bottom: 2px solid #5e5d5d;
}
.girvan-result p{
    font-weight: 100;
    font-size: .42rem;
    line-height: .6rem;
    padding-bottom: .3rem;
}
</style>
