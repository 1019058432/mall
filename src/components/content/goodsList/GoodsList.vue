<template>
  <div class="goodsList">
    <GoodsItem v-if="goods.length===40"
               v-for="(item) in goods"
               :goods-item="item"
    />
    <goods-list-item v-if="goods.length===30"
      v-for="(item) in goods"
      v-bind:good="item"

    />

  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  import GoodsItem from "./GoodsItem";
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem,
      GoodsItem
    },
    data(){
      return{
        isCategory:false
      }
    },
    props:{
      goods:null
    },
    activated() {
      this.isCategory = this.goods.length === 40;
    },
    created() {

      console.log(this.isCategory);
    }
  }
</script>

<style scoped>
  .goodsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
