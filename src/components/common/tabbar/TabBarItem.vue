<template>
  <div class="tab-bar-item" @click="itemClick" >
    <div v-if="!isActive">
      <slot name="item-ico"></slot>
    </div>
    <div v-else>
      <slot name="item-ico-active"></slot>
    </div>
    <div :style="activeColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return {
        // isActive: false
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !==-1
      },
      activeColor(){
        return this.isActive ? {color: this.ActiveColor} : {}
      }
    },
    props:{
      path:String,
      ActiveColor:{
        type:String,
        default:"red"
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>
