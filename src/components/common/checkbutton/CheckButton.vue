<template>
  <div class="check-button" :class="{active:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isChecked:{
        type:Boolean,
        default(){
          return false
        }
      }
    }
  }
</script>

<style scoped>
  .check-button{
    display: flex;
    justify-content: center;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #ccc;
    cursor: pointer;
    background-color: #fff;
  }
  .check-button img{

    width: 15px;
  }
  .active{
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>
