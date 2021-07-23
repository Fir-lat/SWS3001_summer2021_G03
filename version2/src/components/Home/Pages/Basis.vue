<template>
    <div class="basis">
        <div id="left" class="basis-left">
            <h2>
                Introduction
            </h2>
            <p><span class ="iconfont">&#xe6f6;</span>
                There have been research social network websites dedicated to scholars, such as Google Scholar.
            </p>
        </div>
        <div id="mid" class="basis-mid">
            <h2>
                Objective
            </h2>
            <p><span class ="iconfont">&#xe6f6;</span>
                There have been research social network websites dedicated to scholars, such as Google Scholar.
            </p>
        </div> 
        <div id="right" class="basis-right">
            <h2>
                Overview
            </h2>
            <p><span class ="iconfont">&#xe6f6;</span>
                There have been research social network websites dedicated to scholars, such as Google Scholar.
            </p>
            <p><span class ="iconfont">&#xe6f6;</span>
                There have been research social network websites dedicated to scholars, such as Google Scholar.
            </p>
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
        //window.addEventListener('mousedown', this.sameHeight);
        this.sameHeight();
        
    },
    methods: {
        sameHeight:function() {
            var height = Math.max(
                document.getElementById("left").offsetHeight,
                document.getElementById("mid").offsetHeight,
                document.getElementById("right").offsetHeight,
            );
            document.getElementById("left").style.height = height+"px";
            document.getElementById("mid").style.height = height+"px";
            document.getElementById("right").style.height = height+"px";
        }
    }
    
}
</script>
<style scoped>
.basis {
    margin: .5rem auto;
    width:90%;
    font-size: .5rem;
    display: flex;
    align-items: center;


}
.basis div{
    display: table-cell;
    height: auto;
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
    background: #b8d9f8;
    margin: 0 .3rem;

    border-radius: 3%;
    width: 33%;
    float: left

}
.basis-mid {
    background: #b8d9f8;
    margin: 0 .3rem;

    border-radius: 3%;
    width: 33%;
    margin: auto;

}
.basis-right {
    background: #b8d9f8;
    margin: 0 .3rem;

    border-radius: 3%;
    width: 33%;
    float:right;

}
.basis-title {
    font-weight: 100;
    font-size: .64rem;
}
.basis-content {
    font-weight: 100;
    font-size: .42rem;
}
</style>
