<template>
  <nav-bar class="car-nav-bar">
    <template v-slot:center>
      <div class="title">
        <p>购物车({{length}})</p>
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "CarNavBar",
    components:{
      NavBar
    },
    props:{
      length:{
        type:Number,
        default(){
          return 0
        }
      }
    }
  }
</script>

<style scoped>
  .car-nav-bar{
    background-color: var(--color-tink);
  }
  .title p{
    padding: 0;
    margin: 0;
    color: #FFFFFF;
    font-weight: bold;
  }
</style>
