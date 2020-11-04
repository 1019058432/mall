<template>
  <div class="goodsListItem" @click="goodClick">
    <img v-if="good.imgList"
         v-lazy="good.imgList[0]"
         @load="imgLoad"
         alt="">
      <p>{{good.g_name}}</p>
      <div>
        <span>￥{{good.g_newprice}}元</span>
        <span>人气：{{good.comments}}</span>
      </div>
  </div>
</template>

<script>
  import {EventBus} from "common/Bus/bus"
  export default {
    name: "GoodsListItem",
    props:  {
      good:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
      }
    },
    computed:{
    },
    methods:{
      goodClick(){
        this.$router.push('/detail/'+this.good.g_id)
      },
      imgLoad(){
        if (this.$route.path.indexOf("home")===1){
          EventBus.$emit('homeimgLoad')
        }
        if (this.$route.path.indexOf("detail")===1){
          EventBus.$emit('detailimgLoad')
        }

      }
    }
  }
</script>

<style scoped>
  .goodsListItem{
    font-size: var(--font-size);
    align-items: center;
    width: 50%;
    text-align: center;
    /*position: relative;*/
  }
  .goodsListItem img{
    width: 150px;
  }
  .goodsListItem p{
    display: block;

    overflow: hidden;

    white-space: nowrap;

    text-overflow: ellipsis;
  }
  .goodsListItem div{
    /*position: absolute;*/
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
