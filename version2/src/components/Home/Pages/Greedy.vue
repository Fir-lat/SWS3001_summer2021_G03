<template>
    <div class = "girvan">
        <div class = "girvan-top">
            <span>Greedy Algorithm Based on Modularity</span>
        </div>
        <ul class = "girvan-list">
            <li class = "girvan-item" v-for='item in girvanList' :key='item.id'>
                <img :src="item.imgUrl" alt="">
                <p >{{item.title}}</p>
            </li>
        </ul>
        <div class = "girvan-result">
            <p><span class = "iconfont icon">
                &#xe608;
            </span>We use this algorithm, Clauset-Newman-Moore greedy modularity maximization, to find communities in graph.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>This method currently supports the Graph class and does not consider edge weights.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>Greedy modularity maximization begins with each node in its own community and joins the pair of communities that most increases modularity until no such pair exists.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>This algorithm runs very fast, but it cannot control the number of communities and will generate communities with a large number of points.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>To avoid gaint communities, we can set a max number of nodes in a community, if any community has a number of nodes more than the max number, we will use this algorithm to this subgraph again. The Third picture shows the result.</p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            girvanList: [
                {
                    id: "01",
                    imgUrl: require('../../../../img/greedy1.png'),
                    title: "Small dataset",
                },
                {
                    id: "02",
                    imgUrl: require('../../../../img/greedy2.png'),
                    title: "Big dataset",
                },
                {
                    id: "03",
                    imgUrl: require('../../../../img/greedy3.png'),
                    title: "\"Divide Conquer\"",
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
