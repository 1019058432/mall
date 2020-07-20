<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
  }
</script>

<style scoped>
  .tab-bar{
    display: flex;
    background: #E6E6E6;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 3px rgba(100,100,100,.5);
    font-size: 14px;

  }
</style>
