<template>
    <div class = "header-swiper">
        <swiper  :options="swiperOptions" >
            <swiper-slide v-for='(item, index) in swiperList' :key="index">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination">

            </div>
        </swiper>
    </div>
</template>
<script type="text/javascript">
export default {
    data () {
        return {
            swiperList: [
                {
                    id: "01",
                    imgUrl: require('../../../../img/gn12.png')
                },
                {
                    id: "02",
                    imgUrl: require('../../../../img/gn17.png')
                },
                {
                    id: "03",
                    imgUrl: require('../../../../img/gn40.png')
                }
            ],
            swiperOptions : {
                pagination: {
                    el: '.swiper-pagination',
                    paginationClickable: true
                },
                loop:true
                
            }
        }
    }
}
</script>
<style scoped lang='stylus'>
.header-swiper {
    bakcground: #ccc;
    padding-bottom: 26.67%;
    margin: auto;
    width: 50%;
    height: 30%
}
.header-swiper img{
    width: 100%;
    height: 100%
}

</style>
