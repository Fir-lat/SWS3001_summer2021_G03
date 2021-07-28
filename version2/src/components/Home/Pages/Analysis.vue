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
                    imgUrl: require('../../../../img/field_cm3.jpg'),
                    analyze: "The result communities we obtained from the CD algorithm shows obvious correlations in research fields within communities. For example, the scholars in the field of computer vision often need the knowledge of image processing, signal processing and machine learning, which is reflected by the result of community 11. And the scholars in communities in community 3 mainly focused on energy.We don’t find overlapping of unrelated research fields within communities, and we think that research field is one of the most important reasons of why communities are divided."
                },
                {
                    id: "02",
                    imgUrl: require('../../../../img/field_cm9.jpg'),
                    analyze: "We find that although some communities have several different research fields, but their institutions are the same. For example, the scholars focused on CFD, Energy systems, International Combustion Engines and Lattice Boltzmann in community 9 mainly comes from Universita Niccolo Cusano. We think that the scholars in related fields and in the same institutions are more likely to cooperate with each other, and they may be teachers and students (need more information and time to prove). Institutions might also be a reason why some scholars of the similar research fields are divided into different communities. We have found that communities 19 to 20 show almost the same research fields, but their main institutions have no overlapping. Thus we conclude that institutions and fields are the two main factors reflected by  detected communities. "
                },
                {
                    id: "03",
                    imgUrl: require('../../../../img/JinHai.png'),
                    analyze: "We take a look at a researcher’s cooperators and their community interests.  we take prof. Jin from Huazhong University of Science and Technology as an example, we can find that his cooperators mainly in the same community, all the community members are interested in computer architecture and systems. He also has some connection with some aspects like computer vision, but still mainly in computer science. We can draw a conclusion that this researcher focus on traditional computer system, his community as well."
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
