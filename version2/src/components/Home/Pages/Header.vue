<template>
    <div class = "header">
        
            <div class = 'header-left'>
                <router-link to='/'>
                <span class = "iconfont icon" style="color:#fff" >
                    &#xe7f1;
                </span>
                </router-link>
            </div>
            
        
        
            <div class = "title" >
                <router-link to='/'>
                <span style="color:#fff">Academic Collaboration Analysis</span> 
                </router-link>
            </div>
        
            
            
        
        <div class = "header-search">
            <router-link to='/Scholar'>
                <span class = "iconfont icon">
                    &#xe631;
                </span>
                Input scholar's name
            </router-link>
            
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
    color: #fff;
}
.title {
    font-size: .52rem;
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #fff;
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
