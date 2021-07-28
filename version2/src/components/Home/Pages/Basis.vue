<template>
<div class="container">
    <div class="basis">
        <div id="left" class="basis-left">
            <h2>
                Introduction
            </h2>
            <p><span class ="iconfont">&#xe6f6;</span>
                There have been research social network websites dedicated to scholars, such as Google Scholar.
            </p>
            <p><span class ="iconfont">&#xe6f6;</span>
                Collect the cooperation information of more than 3k scholars and 7k relations by SerpApi.
            </p>
            <p><span class ="iconfont">&#xe6f6;</span>
                Involve multiple algorithms to cluster the communities of scholars from multiple affilliations.
            </p>
        </div>
        <div id="mid" class="basis-mid">
            <h2>
                Objective
            </h2>
            <p><span class ="iconfont">&#xe6f6;</span>
                To identify and analyse communities in cooperation among scholars.
            </p>
            <p><span class ="iconfont">&#xe6f6;</span>
                To help people find scholars doing similar research and potential collaborators.
            </p>
        </div> 
        <div id="right" class="basis-right">
            <h2>
                Overview
            </h2>
            <p><span class ="iconfont">&#xe6f6;</span>
                We collected the collaboration information and build it into a natural graph. After the graph is formed, we adopted multiple algorithms to cluster the communities. What we expect to find out is that scholars are divided by specific fields or laboratories rather than affilliations.
            </p>
        </div>
        
    </div>
</div>
    
</template>
<script type="text/javascript">

export default {
    data () {
        return {
            
        }
    },
    mounted() {

        this.adjustWidth();
    },
    methods: {
        // sameHeight:function() {
            
        //     var height = Math.max(
        //         document.getElementById("left").offsetHeight,
        //         document.getElementById("mid").offsetHeight,
        //         document.getElementById("right").offsetHeight,
        //     );
        //     console.log(height);
        //     document.getElementById("left").style.height = height+"px";
        //     document.getElementById("mid").style.height = height+"px";
        //     document.getElementById("right").style.height = height+"px";
        // },
        adjustWidth:function() {
            var width = document.body.clientWidth;
            console.log(width);
            if( width > 760) {
                document.getElementById("left").style.width = width * 0.76*0.3333 +"px";
                document.getElementById("mid").style.width = width * 0.76*0.3333 +"px";
                document.getElementById("right").style.width = width * 0.76*0.3333 +"px";
                var height = Math.max(
                document.getElementById("left").offsetHeight,
                document.getElementById("mid").offsetHeight,
                document.getElementById("right").offsetHeight,
                );
                console.log(height);
                document.getElementById("left").style.height = height+"px";
                document.getElementById("mid").style.height = height+"px";
                document.getElementById("right").style.height = height+"px";
            }
            else {
                document.getElementById("left").style.width = width * 0.76 +"px";
                document.getElementById("mid").style.width = width * 0.76 +"px";
                document.getElementById("right").style.width = width * 0.76 +"px";
            }
        }
        
    }
    
}
</script>
<style scoped>
.container{
    margin: .5rem auto;
    margin-bottom: 35px;
    width: 80%;
    display: flex;

}
.basis {
    
    width:100%;
    font-size: .5rem;
    display: block;
    align-items: center;
    margin: 0 auto;
    justify-content: center;

}
.basis div{

    float:left;
    margin-right: 10px;
    margin-left:10px;
    margin-top: 25px;
    height: auto;
    overflow: initial;

    border-radius: 10px;
    background: #b8d9f8;
    box-shadow: 2px 2px 5px 1px #ccc;

}
.basis h2{
    margin: .3rem auto;
    font-weight: 1000;
    font-size: .44rem;
    text-align: center;
}
.basis p{
    padding-bottom: .4rem;;
    margin: 0 .3rem;
    font-weight: 100;
    font-size: .32rem;
    line-height: .56rem;
}
.basis-left {





}
.basis-mid {






}
.basis-right {





}

</style>
