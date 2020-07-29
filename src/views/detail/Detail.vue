<template>
  <div class="detail">
    <detail-nav-bar/>
    <DetailSwiper :topimgList="good.topimgList"/>
    <detail-info :goodInfo="goodInfo"></detail-info>
  </div>
</template>

<script>
  import DetailNavBar from "./detailChild/DetailNavBar";
  import DetailSwiper from "./detailChild/DetailSwiper";
  import DetailInfo from "./detailChild/DetailInfo";
  import {getDetail,Good,GoodInfo} from "network/detail";
  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailInfo
    },
    data(){
      return {
        wid: null,
        good: {},
        goodInfo:{}
      }
    },
    created() {
      this.wid = this.$route.params.id;
      //获取数据
      getDetail(this.wid).then(res=>{
        this.good =new Good(res.base,res.topimg,res.img,res.color,res.server, res.size,res.params );
        this.goodInfo=new GoodInfo(res.base,res.color,res.server, res.size,res.params)
      })

    },

  }
</script>

<style scoped>

</style>
