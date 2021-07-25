<template>
    <div class = "girvan">
        <div class = "girvan-top">
            <span>Asynchronous Label Propagation</span>
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
            </span>This algorithm returns communities in G as detected by asynchronous label propagation.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>The algorithm proceeds as follows. After initializing each node with a unique label, the algorithm repeatedly sets the label of a node to be the label that appears most frequently among that nodes neighbors. The algorithm halts when each node has the label that appears most frequently among its neighbors. The algorithm is asynchronous because each node is updated without waiting for updates on the remaining nodes.</p>
            <p><span class = "iconfont icon">
                &#xe608;
            </span>The results obtained each time may be useless and the number of communities obtained cannot be controlled while the resulting graphs are not good.</p>
            
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
