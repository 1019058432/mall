<template>
  <div id="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props: {
      recommend:{
        type : Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  #recommend{
    display: flex;
    text-align: center;
    padding: 20px 0;
    border-bottom: 10px solid #E6E3FF;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 70px;
  }
</style>
