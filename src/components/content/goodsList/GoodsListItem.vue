<template>
  <div class="goodsListItem" @click="goodClick">
    <img :src="good.w_img" alt="">
      <p>{{good.w_name}}</p>
      <div>
        <span>￥{{good.w_price}}元</span>
        <span>人气：{{good.w_talk}}</span>
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
    methods:{
      goodClick(){
        this.$router.push('/detail/'+this.good.w_id)
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
