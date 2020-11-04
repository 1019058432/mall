<template>
  <div class="detail-img-list">
    <p class="img-list-title">图文详情</p>
    <ul class="img-list">
      <li v-for="(item,index) in imgList" :key="index">
        <img :src="item" alt="" class="li-img" @load="imgLoadOver">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ShopInfo",
    props:{
      imgList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        count: 0
      }
    },
    methods:{
      imgLoadOver(){
        // if (++this.count>this.imgList.length){
          this.$emit('imgloadover')
        // }
      }
    }
  }
</script>

<style scoped>
  .img-list{
    padding: 0;
  }
  .img-list-title{
    margin-left: 10px;
  }
  .img-list li{
    text-align: center;
    width: 100vw;
  }
  .li-img{
    width: 90vw;
  }
</style>
