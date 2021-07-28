<template>
    <div class="neo4j">
        <input class = "login-button" value="See dynamic visualization powered by neo4j" type="button" @click="neo4j">
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        neo4j: function() {
            alert("Please use the public account below to login:\nUsername: neo4j\nPassword: 8TNFb-yjZic9ADD7z1GvmuzPYBrbRufrTruwoIXvFb8\nIf you can't copy them, you can find them in the new page's url");
            window.open("https://bloom.neo4j.io/index.html?connectURL=neo4j%2Bs%3A//ba134405.databases.neo4j.io&_ga=2.151506878.686437464.1627115091-967027758.1626851498&Username=neo4j&Password=8TNFb-yjZic9ADD7z1GvmuzPYBrbRufrTruwoIXvFb8");
        }
    }
}
</script>
<style scoped>
.neo4j {
    width: 50%;
    margin: .8rem auto 1.6rem auto;
    height: 100px;


    border-radius: 10px;
    background: #b8d9f8;
    box-shadow: 2px 2px 5px 1px #ccc;
}


.login-button { /* 按钮美化 */

	width: 100%; /* 宽度 */
	height: 100%; /* 高度 */
	border-width: 0px; /* 边框宽度 */
	border-radius: 10px; /* 边框半径 */
	background: #b8d9f8; /* 背景颜色 */
	cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
	outline: none; /* 不显示轮廓线 */
	font-family: Microsoft YaHei; /* 设置字体 */
	color: white; /* 字体颜色 */
	font-size: 30px; /* 字体大小 */
    font-weight: 100
}
.login-button:hover { /* 鼠标移入按钮范围时改变颜色 */
	background: #2886df;
}

</style>
