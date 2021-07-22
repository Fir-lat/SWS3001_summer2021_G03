<template>
    <div class = "header">
        <div class = 'header-left'>
            <span class = "iconfont icon">
                &#xe7f1;
            </span>
        </div>
        <div class = "title">
            <span>Academic Collaboration Analysis</span> 
        </div>
        <div class = "header-search">
            <span class = "iconfont icon">
                &#xe631;
            </span>
            Input scholar's name
        </div>
        <div class = "header-right">
            search<span class = "iconfont icon">
                &#xe761;
            </span>
        </div>
    </div>
</template>
<script>

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
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

}
.header-right {
    font-size: .56rem;
    padding: 0 .2rem;
}
</style>
