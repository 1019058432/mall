<template>
    <div id="home">
      <nav-bar class="navBar" >
        <template v-slot:center>
          <span>购物街</span>
        </template>
      </nav-bar>
      <TabControl :title="['流行','新款','精选']"
                  @tabControlClick="tabContrlE"
                  ref="tabControl1"
                  class="tabControl1"
                  v-show="isTabFixed"
      />
      <b-scroll class="scroll"
                ref="scroll"
                :probe-type="3"
                @scrollPosition="scrollPosition"
                :pull-up-load="true"
                @scrollUp="loadMore"
      >
        <swiper-main :banners="banners" @imgLoadOver="imgLoadOver"/>
        <recommend :recommend="recommend"/>
        <feature-view/>
        <TabControl :title="['流行','新款','精选']"
                    @tabControlClick="tabContrlE"
                    ref="tabControl2"
        />
        <GoodsList   :goods="goods[tabControlDataIndex].list"/>
      </b-scroll>
      <scroll-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
  import SwiperMain from "./homeChild/SwiperMain";
  import Recommend from "./homeChild/Recommend";
  import FeatureView from "./homeChild/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goodsList/GoodsList";
  import BScroll from "components/common/scroll/BScroll";
  import ScrollTop from "components/common/scroll/ScrollTop";

  import {getMultipleData,getHomeGoods} from "network/home";

  export default {
    name: "home",
    data(){
      return{
        banners:[],
        recommend:[],
        goods: {
          '0': {page: 0, list:[]},
          '1': {page: 0, list:[]},
          '2': {page: 0, list:[]},
        },
        tabControlDataIndex: '0',
        isShowBackTop: false,
        tabControlTop: 0, //距离父亲顶部距离
        isTabFixed: false
      }
    },
    components:{
      NavBar,
      SwiperMain,
      Recommend,
      FeatureView,
      TabControl,
      GoodsList,
      BScroll,
      ScrollTop
    },
    created() {
      document.title="首页";
      // 获取多数据
      this.getMultipleData();
      this.getHomeGoods('0');
      this.getHomeGoods('1');
      this.getHomeGoods('2')
    },
    mounted() {

    },
    methods: {
      getMultipleData(){
        getMultipleData().then(result =>{
          this.banners = result.data.banner.list;
          this.recommend = result.data.recommend.list
        })
      },
      getHomeGoods(type){
        let page=this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
          //获取分类（未使用）
          let class_list=res.s_class_list;
          //获取商品信息
          let wares=res.goods;
          this.goods[type].list.push(...wares);
          this.goods[type].page+=1;

          //刷新scroll高度和加载更多
          this.$refs.scroll.finishAll()
        });

      },
      tabContrlE(index){
        switch (index) {
          case 0:
            this.tabControlDataIndex='0';
            break;
          case  1:
            this.tabControlDataIndex='1';
            break;
          case  2:
            this.tabControlDataIndex='2';
            break
        }
        this.$refs.tabControl1.currentIndex =index;
        this.$refs.tabControl2.currentIndex =index;
        //刷新scroll高度和加载更多
        this.$refs.scroll.finishAll()
      },
      //scroll
        //返回顶部
      backTop(){
        this.$refs.scroll.scrollTop(0,0)
      },
        //监听位置并显示隐藏返回顶部按钮
      scrollPosition(position){
        this.isShowBackTop = Math.abs(position.y)>1000
        if (this.tabControlTop < Math.abs(position.y)){
          this.isTabFixed = true
        }else {
          this.isTabFixed =false
        }
      },
        //加载更多
      loadMore(){
        this.getHomeGoods(this.tabControlDataIndex);
      },
      //获取tabcontrol到父元素的距离
      imgLoadOver(){
        this.tabControlTop = this.$refs.tabControl2.$el.offsetTop
      }
    }
  }
</script>
<style scoped>
  #home{
    height: 100vh;
    overflow: hidden;
    position: relative;
      /*padding-top: 44px;*/
      /*padding-bottom: 49px;*/
  }
  .navBar{
    background-color: var(--color-tink);
    color: #FFFFFF;

    /*更换为better-scroll后已经可以实现局部滚动，故可以丢弃这部分代码*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }
  .scroll{
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tabControl1{
    position : relative;
    right: 0;
    left: 0;
    top: 0;
    z-index: 9;
  }
</style>
