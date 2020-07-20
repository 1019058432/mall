<template>
<div class="sw">
  <swiper>
    <swiper-item v-for="(item,index) in banners " :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imagLoad">
      </a>
    </swiper-item>
  </swiper>
</div>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper"
  export default {
    name: "SwiperMain",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banners: {
        type:Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {
        isLoad: false
      }
    },
    methods: {
      imagLoad(){
        if (!this.isLoad){
          this.$emit("imgLoadOver")
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>
</style>
