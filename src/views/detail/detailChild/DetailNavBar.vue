<template>
  <div class="nav-bar">
    <nav-bar>
      <template v-slot:left>
        <div class="backimg" @click="backLastView">
          <img src="~assets/img/detail/back.png" alt="">
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div v-for="(item,index) of title"
               class="title-item"
               @click="titleClick(index)"
               :class="{active:index===currentIndex}"
          >
            {{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return {
        title: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    mounted() {
      this.$nextTick(()=>{
        this.titleClick(0)
      })
    },
    methods:{
      titleClick(index){
        this.currentIndex= index
        this.$emit('detailNavClick',index)
      },
      backLastView(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .backimg{
    overflow: hidden;
    height: 44px;
  }
  .backimg img{
    width: 20px;
    margin-top: 12px;
  }
  .title{
    display: flex;
    font-size: var(--font-size);
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: var(--color-tink);
  }
</style>
