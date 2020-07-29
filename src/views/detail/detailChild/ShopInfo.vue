<template>
  <div class="shopinfo">
    <div class="shoplog">
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopInfo",
    props:{
      shoplog:{
        type:String,
        default(){
          return ''
        }
      }

    }
  }
</script>

<style scoped>

</style>
