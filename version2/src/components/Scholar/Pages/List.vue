<template>
    <div class = "list">
        <h1 >Search Result</h1>
        <ul class = "list-scholar">
            <li class = "list-items" v-for="(item, index) in searchResult" :key="index">
                <div class = "profile">
                    <div class = "profile-left">
                        <span class = "iconfont icon">&#xe63b;</span>
                    </div>
                    <div class = "scholar">
                        <p class="name">{{item.name}}</p>
                        <p class="school">{{item.affiliation}}</p>
                        <p v-if="item.coauthors.length" class="number">CoAuthors: {{item.coauthors.length}}</p>
                    </div>
                </div>
                <ul class = "list-coauthors">
                    <li class = "list-item" v-for="(coauthor, index) in item.coauthors" :key="index">
                        <span class = "iconfont icon-small">&#xe60b;</span>
                        <div>
                            <p>{{index+1}}. {{coauthor.name}}</p>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchResult: [
                {
                    "name" : "An Pan",
                    "affiliation" : "Professor of Epidemiology, Huazhong University of Science and Technology",
                    "author_id" : "ZKByFqQAAAAJ",
                    "coauthors" : [
                        {
                            "name" : "Frank B. Hu",
                            "weight" : 1950
                        },
                        {
                            "name" : "Dr. JoAnn E. Manson",
                            "weight" : 950
                        },
                        {
                            "name" : "Woon-Puay Koh",
                            "weight" : 450
                        },
                        {
                            "name" : "Jian-Min Yuan",
                            "weight" : 1950
                        },
                        {
                            "name" : "Tangchun Wu",
                            "weight" : 1950
                        },
                        {
                            "name" : "Oscar H Franco",
                            "weight" : 1950
                        },
                        {
                            "name" : "Rob M. van Dam",
                            "weight" : 1950
                        },
                        {
                            "name" : "Olivia Okereke",
                            "weight" : 200
                        },
                        {
                            "name" : "Kathy Rexrode",
                            "weight" : 80
                        },
                        {
                            "name" : "Xiongfei Pan",
                            "weight" : 1950
                        },
                        {
                            "name" : "Yeli Wang",
                            "weight" : 1950
                        },
                        {
                            "name" : "Mohammad Talaei",
                            "weight" : 450
                        },
                        {
                            "name" : "Michel Lucas",
                            "weight" : 1950
                        },
                        {
                            "name" : "Eric Rimm",
                            "weight" : 1950
                        },
                        {
                            "name" : "Alberto Ascherio",
                            "weight" : 450
                        },
                        {
                            "name" : "Qibin Qi",
                            "weight" : 1950
                        },
                        {
                            "name" : "Dariush Mozaffarian",
                            "weight" : 450
                        },
                        {
                            "name" : "Jason HY Wu",
                            "weight" : 1950
                        },
                        {
                            "name" : "Shilpa Bhupathiraju",
                            "weight" : 180
                        },
                        {
                            "name" : "Deirdre K. Tobias",
                            "weight" : 950
                        }
                    ]
                },
                {
                    "name" : "Hai Jin",
                    "affiliation" : "Huazhong University of Science and Technology",
                    "author_id" : "o02W0aEAAAAJ",
                    "coauthors" : [
                        {
                            "name" : "Song Wu",
                            "weight" : 1950
                        },
                        {
                            "name" : "Xuanhua Shi",
                            "weight" : 1950
                        },
                        {
                            "name" : "Fangming Liu",
                            "weight" : 1950
                        },
                        {
                            "name" : "Haikun Liu",
                            "weight" : 1950
                        },
                        {
                            "name" : "Chen Yu",
                            "weight" : 1950
                        },
                        {
                            "name" : "Yun Yang",
                            "weight" : 1950
                        },
                        {
                            "name" : "Bingsheng He, 何丙胜",
                            "weight" : 1
                        },
                        {
                            "name" : "Qiang He",
                            "weight" : 1950
                        },
                        {
                            "name" : "Shadi Ibrahim",
                            "weight" : 450
                        },
                        {
                            "name" : "Wenbing Tao",
                            "weight" : 1950
                        },
                        {
                            "name" : "Bin Cheng",
                            "weight" : 1950
                        },
                        {
                            "name" : "Song Guo",
                            "weight" : 1950
                        },
                        {
                            "name" : "Ligang He",
                            "weight" : 1950
                        },
                        {
                            "name" : "Bo Li",
                            "weight" : 1950
                        },
                        {
                            "name" : "Lionel Ni",
                            "weight" : 1920
                        },
                        {
                            "name" : "Prof. Dr. Ali A. Yassin",
                            "weight" : 1950
                        },
                        {
                            "name" : "Xiaobai Liu",
                            "weight" : 1950
                        },
                        {
                            "name" : "Bing Bing Zhou",
                            "weight" : 1950
                        },
                        {
                            "name" : "Sheng Di",
                            "weight" : 1950
                        },
                        {
                            "name" : "Cheng-Zhong Xu, IEEE Fellow",
                            "weight" : 60
                        }
                    ]
                },
            ],

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>
<style scoped>
.list {
    margin: .5rem auto;
    width:90%;
    font-size: .5rem;
    align-items: center;
    
}

.list h1{
    font-weight: 1000;
    font-size: 1rem;
    color: #043a6d;
    display: block;
    padding: .2rem;
    border-bottom: 2px dotted #043a6d;
    margin-bottom: .5rem; 
}
.profile {
    display: inline-block;
    padding: 20px auto 0px 30px;
    margin-left: 30px;
    margin-top: 15px;
    font-weight: 100;
    position: relative;
    overflow: hidden;

}

.scholar {
    font-size: .64rem;
    display: block;
    margin: 20px 30px 20px 30px;
    left: 0;
    flex:0;
}
.name {
    font-weight: 100;
    font-size: 44px
}
.school {
    font-size: 20px;
    line-height: .5rem;
}
.number {
    margin-top: .5rem;
    padding-top: 10px;
    font-size: 25px;
    margin-bottom: .5rem;
}
.profile-left {
    float: left;
}  

.icon {
    font-size: 4rem;
    float: left;
    display: block;
    text-align: center;
}


.list-items {
    border: 0;
    border-radius: 30px;
    margin: 50px auto;
    background: #afd8ff;
    box-shadow: 2px 2px 5px 1px #ccc;
    padding-bottom: 2px;

}
.list-coauthors {
    background: #fff;
    margin: 5px 30px 30px 30px;
    padding: 20px;
    display: block;
    border: 2px  #fff;
    border-radius: 20px;
    box-shadow: 2px 2px 10px 2px #ccc inset;
}
.list-item {
    display:flex;
    margin: 20px;
}
.list-item span{
    font-size: 32px;
    margin-right:20px;
}
.list-item p{
    font-size: 32px;
    font-weight: 100;
}
</style>
