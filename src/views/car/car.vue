<template>
  <div class="car">
    <car-nav-bar :length="length"/>
    <b-scroll class="scroll">
      <cart-list-item v-for="(item,index) in carList"
                     :key="index"
                     :product="item"/>
    </b-scroll>
    <car-bottom-bar class="bottom-bar"/>
  </div>
</template>

<script>
  import CarNavBar from "./carChild/CarNavBar";
  import CartListItem from "./carChild/CartListItem";
  import CarBottomBar from "./carChild/CarBottomBar";

  import BScroll from  "components/common/scroll/BScroll";

  //使用vuex的get映射方法
  import{mapGetters} from 'vuex'
  export default {
    name: "car",
    components:{
      CarNavBar,
      BScroll,
      CartListItem,
      CarBottomBar
    },
    computed:{
      ...mapGetters({
        length:'carLenght',
        carList:'carList',
      })
    }
  }
</script>

<style scoped>
  .car{
    height: 100vh;
    width: 100vw;
  }
  .scroll{
    width: 100%;
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
  .bottom-bar{
    position: fixed;
    left: 0;
    right: 0;
    height: 40px;
    bottom: 49px;
  }
</style>
