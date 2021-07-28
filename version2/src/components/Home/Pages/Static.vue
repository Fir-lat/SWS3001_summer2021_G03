<template>
    <div class="neo4j1">
    <a href="https://nus2021-sw3001-g03.top/files/name.html"><input class = "login-button1" value="See static visualization labeled by name" type="button"></a>
        <a href="https://nus2021-sw3001-g03.top/files/affilliation.html"><input class = "login-button1" value="See static visualization labeled by affilliation" type="button"></a>
            <a href="https://nus2021-sw3001-g03.top/files/interests.html"><input class = "login-button1" value="See static visualization labeled by interests" type="button"></a>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.neo4j1 {
    width: 50%;
    margin: .8rem auto 1.6rem auto;
    height: 100px;
}

.login-button1 { /* 按钮美化 */

	width: 32%; /* 宽度 */
	height: 100%; /* 高度 */
	border-width: 0px; /* 边框宽度 */
	border-radius: 10px; /* 边框半径 */
	background: #b8d9f8; /* 背景颜色 */
	cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
	outline: none; /* 不显示轮廓线 */
	font-family: Microsoft YaHei; /* 设置字体 */
	color: white; /* 字体颜色 */
	font-size: 15px; /* 字体大小 */
    font-weight: 100;
    box-shadow: 2px 2px 5px 1px #ccc;
}
.login-button1:hover { /* 鼠标移入按钮范围时改变颜色 */
	background: #2886df;
}

</style>
