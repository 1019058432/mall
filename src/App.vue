<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-show="isShow"></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from "components/content/mainTabBar/MainTabBar"
export default {
  name: 'App',
  components: {
    mainTabBar
  },
  data(){
    return{
      isShow:true
    }
  },
  watch:{
    $route(to,from){
      if (to.path.indexOf("detail")===1){
        this.isShow=false
      }else {
        this.isShow=true
      }
    }
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
