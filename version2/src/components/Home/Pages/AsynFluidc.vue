<template>
    <div class = "girvan">
        <div class = "girvan-top">
            <span>Asynchronous Fluid Communities</span>
        </div>
        <ul class = "girvan-list">
            <li class = "girvan-item" v-for='item in girvanList' :key='item.id'>
                <img :src="item.imgUrl" alt="">
                <p >Async-Fluidc given {{item.title}} communities</p>
            </li>
        </ul>
        <div class = "girvan-result">
            <p><span class = "iconfont icon">
                &#xe608;
            </span>This algorithm returns communities in G as detected by Fluid Communities algorithm.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>First each of the initial k communities is initialized in a random vertex in the graph. Then the algorithm iterates over all vertices in a random order, updating the community of each vertex based on its own community and the communities of its neighbours. This process is performed several times until convergence. At all times, each community has a total density of 1, which is equally distributed among the vertices it contains. If a vertex changes of community, vertex densities of affected communities are adjusted immediately. When a complete iteration over all vertices is done, such that no vertex changes the community it belongs to, the algorithm has converged and returns.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>This algorithm will be executed until the result converges, and the number of communities can be manually specified.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>The result obtained when it is known how many communities should be divided into is relatively good.</p>
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
                    imgUrl: require('../../../../img/asynfluidc4.png'),
                    title: "4",
                },
                {
                    id: "02",
                    imgUrl: require('../../../../img/asynfluidc9.png'),
                    title: "9",
                },
                {
                    id: "03",
                    imgUrl: require('../../../../img/asynfluidc15.png'),
                    title: "15",
                },
                {
                    id: "04",
                    imgUrl: require('../../../../img/asynfluidc21.png'),
                    title: "21",
                },
                {
                    id: "05",
                    imgUrl: require('../../../../img/asynfluidc29.png'),
                    title: "29",
                },
                {
                    id: "06",
                    imgUrl: require('../../../../img/asynfluidc38.png'),
                    title: "38",
                },
                {
                    id: "07",
                    imgUrl: require('../../../../img/asynfluidc46.png'),
                    title: "46",
                },
                {
                    id: "08",
                    imgUrl: require('../../../../img/asynfluidc64.png'),
                    title: "64",
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
