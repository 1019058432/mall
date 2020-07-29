<template>
  <div class="goodsListItem" @click="goodClick">
    <img v-if="good.imgList"  :src="good.imgList[0]" alt="~assets/img/home/loading.gif">
      <p>{{good.g_name}}</p>
      <div>
        <span>￥{{good.g_newprice}}元</span>
        <span>人气：{{good.comments}}</span>
      </div>
  </div>
</template>

<script>
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
      // loadOver(){
      //   return Object.keys(this.good).length !==0&&this.good.imgList!==undefined
      // }
    },
    methods:{
      goodClick(){
        this.$router.push('/detail/'+this.good.g_id)
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
