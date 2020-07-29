<template>
  <div class="detail-swiper">
    <swiper>
      <swiper-item v-for="(item,index) in topimgList" :key="index">
        <div class="detail-swiper-img"><img :src="item" alt="" ></div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper2";
  export default {
    name: "DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      topimgList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .detail-swiper-img{
    height: 30vh;
    overflow: hidden;
  }
</style>
