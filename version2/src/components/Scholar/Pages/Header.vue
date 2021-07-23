<template>
    <div class = "header">
            <div class = 'header-left'>
                <router-link to='/'>
                <span class = "iconfont icon" style="color:#fff" >
                    &#xe7f1;
                </span>
                </router-link>
            </div>
            
        
        
            <div class = "title">
                <router-link to='/'>
                <span style="color:#fff">Academic Collaboration Analysis</span> 
                </router-link>
            </div>
        
            
            
        
        <div id = "headerSearch" class = "header-search">
            
                <span class = "iconfont icon">
                    &#xe631;
                </span>
                <input  id = "search" type="text" placeholder="Input scholar's name">
                
            
            
        </div>
        <div class = "header-right">
            <router-link to='/Scholar'>
                search<span class = "iconfont icon">
                    &#xe761;
                </span>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    
    mounted() {
        this.sameWidth();
    },
    methods: {
        sameWidth: function() {
            var width = document.getElementById("headerSearch").offsetWidth; 
            document.getElementById("search").style.width = width-53+"px";
        }
    }
}
</script>
<style scoped lang='stylus'>
@import '~css/var.styl'
.icon {
    font-size: 32px;
}
.header {
    width: 100%;
    line-height: 1.2rem;
    background: $bgColor;
    color: $textColor;
    font-size: .42rem;
    display : flex
}
.header-left {
    width: 1rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
}
.title {
    font-size: .52rem;
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.header-search {
    flex: 1;
    background: #fff;
    height: 1rem;
    margin: .14rem;
    border-radius: .4rem;
    color: #e4e7ea;
    line-height: .9rem;
    font-size: .56rem;
    padding-left: .2rem;
    
}
.header-search input{
    background-color:transparent;
    position: absolute;
    border:0;
    outline: 0;
    
    height: .68rem;
    margin: .14rem auto;
    border-radius: .4rem;
    color: #122e49;
    line-height: .9rem;
    font-size: .56rem;
    padding-left: 9.5px;


    display: inline-block;
    *display: inline;
    width: px;
}
.header-search input::-webkit-input-placeholder{
    font-size: .56rem;
    font-family: "Microsoft YaHei";
    color: #e4e7ea;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

}
.header-search a{
    color: #e4e7ea;
}
.header-right {
    font-size: .56rem;
    padding: 0 .2rem;
}
.header-right a{
    color: #fff;
}
</style>

