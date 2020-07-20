<template>
  <TabBar>
    <TabBarItem path="/home" ActiveColor="green">
      <img slot="item-ico" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-ico-active" src="~assets/img/tabbar/home_active.png" alt="">
      <div slot="item-text" >首页</div>
    </TabBarItem>
    <TabBarItem path="/category">
      <img slot="item-ico" src="~assets/img/tabbar/category.png" alt="">
      <img slot="item-ico-active" src="~assets/img/tabbar/category_active.png" alt="">
      <div slot="item-text" >分类</div>
    </TabBarItem>
    <TabBarItem path="/car">
      <img slot="item-ico" src="~assets/img/tabbar/car.png" alt="">
      <img slot="item-ico-active" src="~assets/img/tabbar/car_active.png" alt="">
      <div slot="item-text" >购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile">
      <img slot="item-ico" src="~assets/img/tabbar/profile.png" alt="">
      <img slot="item-ico-active" src="~assets/img/tabbar/profile_active.png" alt="">
      <div slot="item-text" >个人</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
