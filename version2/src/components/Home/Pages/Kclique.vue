<template>
    <div class = "girvan">
        <div class = "girvan-top">
            <span>K-Clique</span>
        </div>
        <ul class = "girvan-list">
            <li class = "girvan-item" v-for='item in girvanList' :key='item.id'>
                <img :src="item.imgUrl" alt="">
                <p >k = {{item.title}}</p>
            </li>
        </ul>
        <div class = "girvan-result">
            <p><span class = "iconfont icon">
                &#xe608;
            </span>This algorithm is used to find k-clique communities in graph using the percolation method.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>A k-clique community is the union of all cliques of size k that can be reached through adjacent (sharing k-1 nodes) k-cliques.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>The above is the result of a small batch of data sets.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>This algorithm does't force every node into a certain community, only to find some dense parts to cluster.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>The blue nodes are the ones that aren't clustered.</p>
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
                    imgUrl: require('../../../../img/k-clique3.png'),
                    title: "3",
                },
                {
                    id: "02",
                    imgUrl: require('../../../../img/k-clique4.png'),
                    title: "4",
                },
                {
                    id: "03",
                    imgUrl: require('../../../../img/k-clique5.png'),
                    title: "5",
                },
                {
                    id: "04",
                    imgUrl: require('../../../../img/k-clique6.png'),
                    title: "6",
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
