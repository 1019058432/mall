<template>
  <div class="detail-tabbar">
    <tab-bar>
      <tab-bar-item path="/shop" class="tab-bar-item">
        <template v-slot:item-ico>
          <img src="~assets/img/detail/shop.png" alt="">
        </template>
        <template v-slot:item-text>
          <p>店铺</p>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/server" class="tab-bar-item">
        <template v-slot:item-ico>
          <img src="~assets/img/detail/talk.png" alt="">
        </template>
        <template v-slot:item-text>
          <p>客服</p>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/favorite" class="tab-bar-item">
        <template v-slot:item-ico>
          <img src="~assets/img/detail/fstar.png" alt="">
        </template>
        <template v-slot:item-text>
          <p>收藏</p>
        </template>
      </tab-bar-item>
      <div class="tab-bar-item text-item car" @click="carClick">
          <p>加入购物车</p>
      </div>
      <div  class="tab-bar-item text-item pay">
          <p>立即购买</p>
      </div>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "DetailTabBar",
    components:{
      TabBar,
      TabBarItem
    },
    methods:{
      carClick(){
        this.$emit("carIsClick")
      }
    }
  }
</script>

<style scoped>
  .detail-tabbar{

  }
  .tab-bar-item p{
    padding: 0;
    margin: 0;
    font-size: 12px;
  }
  .text-item {
    text-align: center;
    width: 25vw;
    padding-top: 15px;
  }
  .car{
    background-color: #FFE6E8;
  }
  .car p{
    color: #FF5777;
  }
  .pay{
    background-color: #FF5777;
  }
  .pay p{
    color: #FFFFFF;
  }
</style>
