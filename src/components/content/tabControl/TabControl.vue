<template>
  <div class="tabControl">
    <div class="tabControl-item" v-for="(item,index) in title" @click="tabControlClick(index)"
    :class="{active:currentIndex===index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      title:  {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return  {
        currentIndex: 0
      }
    },
    methods: {
      tabControlClick(index){
        this.currentIndex=index
        this.$emit('tabControlClick',index)
      }
    }
  }
</script>

<style scoped>
  .tabControl{
    background-color: #FFFFFF;
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: var(--font-size);
    position: sticky;
    top: 44px;
  }
  .tabControl-item{
    flex: 1;
  }
  .active{
    color: #FF8E97;
  }
  .active span{
    padding: 5px;
    border-bottom: #FF8E97 solid 2px;
  }
</style>
