<template>
  <div class="detail">
    <detail-nav-bar/>
    <img :src="good.w_id" alt="">
  </div>
</template>

<script>
  import DetailNavBar from "./detailChild/DetailNavBar";

  import {getDetail} from "network/detail";

  export default {
    name: "Detail",
    components:{
      DetailNavBar
    },
    data(){
      return {
        wid: null,
        good: {}
      }
    },
    created() {
      this.wid = this.$route.params.id;

      //获取数据
      getDetail(this.wid).then(res=>{
        this.good =res
      })
    },

  }
</script>

<style scoped>

</style>
