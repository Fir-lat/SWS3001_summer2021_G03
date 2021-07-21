<template>
    <div class = "header">
        <div class = 'header-left'>
            <span class = "iconfont">
                &#xe7f1;
            </span>
        </div>
        <div class = "header-search">
            <span class = "iconfont">
                &#xe631;
            </span>
            Input scholar's name
        </div>
        <div class = "header-right">
            search<span class = "iconfont">
                &#xe761;
            </span>
        </div>
    </div>
</template>
<script>

</script>
<style scoped lang='stylus'>
@import '~css/var.styl'

.header {
    width: 100%;
    line-height: .88rem;
    background: $bgColor;
    color: $textColor;
    font-size: .36rem;
    display : flex
}
.header-left {
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold
}
.header-search {
    flex: 1;
    background: #fff;
    height: .6rem;
    margin: .14rem;
    border-radius: .2rem;
    color: #e4e7ea;
    line-height: .6rem;
    font-size: .28rem;
    padding-left: .2rem;

}
.header-right {
    font-size: .28rem;
    padding: 0 .2rem;
}
</style>
