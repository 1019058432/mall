<template>
  <div class="swiperM">
    <div class="swiper" ref="sw"   @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" >
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div v-for="(item, index) in slideCount" class="indi-item" :class="{active: index === currentIndex}"
             :key="index"></div>
      </slot>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Swiper",
    props: {
      //多久滚动一张图片
      interval: {
        type: Number,
        default: 3000
      },
      //延迟多久开始轮播
      animDuration: {
        type: Number,
        default: 300
      },
      //移动到图片的多少比例换图
      moveRatio: {
        type: Number,
        default: 0.25
      },
      //是否显示轮播指示点
      showIndicator: {
        type : Boolean,
        default :true
      },
    },
    data() {
      return {
        slideCount: 0,//轮播元素个数
        swiperParent: [],//本组件dom元素
        currentIndex: 0,//轮播下标
        scrolling: false,//滚动状态
        timelock: null,//定时器
        distance: 0,//距离
        startX : 0,//起始位置
        currentX: 0,//滑动距离
        totalWidth:0//单个宽度
      }
    },
    mounted() {
        this.$parent.$nextTick(()=>{
          this.handDom();
          // Bus.$on('getItem',res =>this.itemList = res)
          setTimeout(this.setTimer,this.animDuration)

        })
    },
    methods: {
      //获取子标签
      handDom() {
        this.swiperParent = this.$refs.sw;
        let slidesEls = this.swiperParent.children;
        // this.swiperItemLenth=slidesEls.length
        this.slideCount=slidesEls.length;
        if (this.slideCount>1){
          this.totalWidth=slidesEls[this.currentIndex].clientWidth
        }
      },
      //定义轮播循环
      setTimer(){
        this.timelock = setInterval(this.currentImg, this.interval)
      },
      //轮播方法
      currentImg(){
        this.scrolling= true;
        if (this.slideCount<1){
          this.handDom()
        }else {
          let IndexChild=this.swiperParent.children[this.currentIndex];
          if (this.currentIndex+1<this.slideCount){
            this.swiperParent.scrollLeft+=IndexChild.clientWidth;
            this.currentIndex+=1;
          }else {
            this.swiperParent.scrollLeft=0;
            this.currentIndex=0;
          }
        }
        this.scrolling= false
      },
      // 拖动图片
      touchStart(e){
        // 1.如果正在滚动, 不可以拖动
        if (this.scrolling) return;

        // 2.停止定时器
        this.clearTimer();

        // 3.保存开始滚动的位置
        this.startX = e.touches[0].pageX;
      },
      touchMove(e){
        let prev_distance=this.distance;
        // 1.计算出用户拖动的距离
        this.currentX = e.touches[0].pageX;

        this.distance = this.startX - this.currentX;//结束位置-开始位置
        if (this.distance>0){
          this.swiperParent.scrollLeft+=this.distance-prev_distance;
        }else {
          this.swiperParent.scrollLeft-=-(this.distance-prev_distance)
        }
      },
      touchEnd(e){
        if (this.distance===0){
            this.startX = 0;
            this.currentX = 0;
            this.distance=0;
            this.setTimer();
            return
          }
        let litle= this.totalWidth*this.moveRatio;
        if (Math.abs(this.distance)>litle){
          if (this.distance>0){
            if (this.currentIndex===3){
              this.startX = 0;
              this.currentX = 0;
              this.distance=0;
              this.setTimer();
              return
            }
            this.swiperParent.scrollLeft+=this.totalWidth - this.distance;
            this.swiperParent.scrollLeft=this.totalWidth*(this.currentIndex+1);
            if (this.currentIndex+1<this.slideCount){
              this.currentIndex+=1
            }else {
              this.currentIndex=0
            }
          }else {
            if (this.currentIndex===0){
              this.startX = 0;
              this.currentX = 0;
              this.distance=0;
              this.setTimer();
              return
            }
            this.swiperParent.scrollLeft-=this.totalWidth + this.distance;
            // console.log(this.totalWidth + this.distance);
            this.swiperParent.scrollLeft=this.totalWidth*(this.currentIndex-1);
            if (this.currentIndex-1>0){
              this.currentIndex-=1
            }else {
              this.currentIndex=0
            }
          }
        }else {
          if (this.distance>0){
            this.swiperParent.scrollLeft-=this.distance;
          }else {
            this.swiperParent.scrollLeft-=this.distance;
          }
        }
        this.startX = 0;
        this.currentX = 0;
        this.distance=0
        this.setTimer()
      },
      // 清除定时器
      clearTimer(){
        clearInterval(this.timelock)
      }
    },
    watch:{
    }
  }
</script>

<style scoped>
  .swiperM{
    position: relative;
  }
  .swiper {
    display: flex;
    overflow: hidden;
  }
  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }
  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

  .indi-item.active {
    background-color: rgba(212,62,46,1.0);
  }
</style>
