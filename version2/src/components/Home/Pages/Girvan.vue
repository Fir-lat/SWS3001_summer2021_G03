<template>
    <div class = "girvan">
        <div class = "girvan-top">
            <span>Girvan Newman</span>
        </div>
        <ul class = "girvan-list">
            <li class = "girvan-item" v-for='item in girvanList' :key='item.id'>
                <img :src="item.imgUrl" alt="">
                <p >GN with {{item.title}} iterations</p>
            </li>
        </ul>
        <div class = "girvan-result">
            <p><span class = "iconfont icon">
                &#xe608;
            </span>The whole graph is radiating, also containing small radiating clusters, but the graph isn’t divided obviously.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>Scholars have less frequent cooperation locates on the boundary.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>At the central part, the colors are confusing.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>The modularity shows a tendency of decreasing at the very begin(30 iterations)</p>
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
