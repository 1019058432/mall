<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'
  export default {
    name: "BScroll",
    props:{
      probeType:{
        type: Number,
        default(){
          return 0
        }
      },
      pullUpLoad:{
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    data(){
      return{
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
        // pullUpLoad:{
        //   threshold: -30, // 负值是当上拉到超过低部 30px；正值是距离底部距离时，
        // }

      });
      if (this.probeType===2||this.probeType ===3){
        this.scroll.on('scroll',(position)=>{
          this.$emit('scrollPosition',position)
        })
      }
      if (this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
          this.$emit('scrollUp')
        })
      }
    },
    methods:{
      scrollTop(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      finishAll(){
        this.scroll.finishPullUp()
        this.scroll.refresh()
      },
      getScrollY(){
        return this.scroll ? this.scroll.y:0
      }
    }
  }
</script>

<style scoped>

</style>
