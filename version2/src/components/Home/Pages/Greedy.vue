<template>
    <div class = "girvan">
        <div class = "girvan-top">
            <span>Greedy Algorithm Based on Modularity</span>
        </div>
        <ul class = "girvan-list">
            <li class = "girvan-item" v-for='item in girvanList' :key='item.id'>
                <img :src="item.imgUrl" alt="">
                <p >GN{{item.title}}</p>
            </li>
        </ul>
        <div class = "girvan-result">
            <p><span class = "iconfont icon">
                &#xe608;
            </span>We use this algorithm to find communities in graph using Clauset-Newman-Moore greedy modularity maximization.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>This method currently supports the Graph class and does not consider edge weights.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>Greedy modularity maximization begins with each node in its own community and joins the pair of communities that most increases modularity until no such pair exists.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>This algorithm runs very fast, but it cannot control the number of communities and will generate communities with a large number of points.</p>
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
                    imgUrl: require('../../../../img/gn12.png'),
                    title: "17",
                },
                {
                    id: "02",
                    imgUrl: require('../../../../img/gn12.png'),
                    title: "17",
                },
                {
                    id: "03",
                    imgUrl: require('../../../../img/gn12.png'),
                    title: "17",
                },
                {
                    id: "04",
                    imgUrl: require('../../../../img/gn12.png'),
                    title: "17",
                },
                {
                    id: "05",
                    imgUrl: require('../../../../img/gn12.png'),
                    title: "17",
                },
                {
                    id: "06",
                    imgUrl: require('../../../../img/gn12.png'),
                    title: "17",
                },
                {
                    id: "07",
                    imgUrl: require('../../../../img/gn12.png'),
                    title: "17",
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
    width: 7rem;
    height: 5rem;
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
