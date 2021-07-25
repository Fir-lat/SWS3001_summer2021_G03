<template>
    <div class = "bottom-line">
        <div class = 'introduction'>
            <span class = "university">
                National University of Singapore
            </span>
            <br>
            <span class = "projectName">
                SOC SUMMER WORKSHOP 2021 SWS3001
            </span>
            <br>
            <span class = "teammates">
                <span>G03</span>
                <span>Huang Wenlve</span>
                <span>Li Hengzhuang</span>
                <span>Zhou Chenyu</span>
                <span>Zhou Yingquan</span>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            space: " _ "
        }
    }
}
</script>
<style scoped>
.bottom-line {
    width: 80%;
    margin: 0 auto;
	border-bottom: 2px solid #5e5d5d;
}
.introduction {
    text-align: center;
    display: block;
}
.university {
    color: #043a6d;
    font-weight: 300;
    margin-top: 100px;
    text-align: center;
    display: block;
}
.projectName {
    font-size: 30px;
    color: #9ba1a6;
    margin-top: 20px;
    margin-bottom: 50px;
    display: block;
}
.teammates {
    font-size: 15px;
    color: #9ba1a6;
    margin-top: -50px;
    margin-bottom: 50px;
    display: block;
}
.teammates span{
    padding-right: 10px;
}
</style>
