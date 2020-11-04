<template>
  <div class="detail">
    <detail-nav-bar @detailNavClick="scrollToItem" ref="navbar"/>
    <b-scroll class="detail-scroll"
              :probeType="3"
              @scrollPosition="scrolling"
              ref="scroll">
      <DetailSwiper :topimgList="good.topimgList"/>
      <detail-info :goodInfo="goodInfo" class="detail-info"/>
      <detail-params ref="params" :paramsInfo="goodInfo.params"/>
      <comment ref="comment" :comments="comments"/>
      <detail-img-show
        :img-list="good.imgList"
        @imgloadover="flashScroll"
      />
      <goods-list ref="tip" :goods="recommend"/>
    </b-scroll>
    <scroll-top @click.native="backTop" v-show="isShowBackTop" />
    <detail-tab-bar @carIsClick="myCarClick"/>
  </div>
</template>

<script>
  import DetailNavBar from "./detailChild/DetailNavBar";
  import DetailSwiper from "./detailChild/DetailSwiper";
  import DetailInfo from "./detailChild/DetailInfo";
  import DetailImgShow from "./detailChild/DetailImgShow";
  import DetailParams from "./detailChild/DetailParams";
  import DetailTabBar from "./detailChild/DetailTabBar";

  import BScroll from "components/common/scroll/BScroll";

  import GoodsList from "components/content/goodsList/GoodsList";
  import Comment from "components/content/comments/Comment";
  import {getDetail,getDetailGoods,Good,GoodInfo} from "network/detail";
  import {EventBus} from "common/Bus/bus"
  import {debunce} from "common/utils/debounce"
  // import {imgMixin} from "common/Mixin/imgLoadmixin";
  import {backTopMixin} from "common/Mixin/backTopMix";

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailInfo,
      DetailImgShow,
      DetailParams,
      DetailTabBar,
      GoodsList,

      Comment,
      BScroll,
    },
    data(){
      return {
        wid: null,
        good: {},
        goodInfo:{},
        comments:{},
        recommend:[],
        positionY:[],
        currentIndex:0
      }
    },
    created() {
      this.wid = this.$route.params.id;
      //获取数据
      getDetail(this.wid).then(res=>{
        this.good =new Good(res.base,res.topimg,res.img,res.color,res.server, res.size,res.params );
        this.goodInfo=new GoodInfo(res.base,res.color,res.server, res.size,res.params)
        this.comments=res.comments;
      })
      //获取推荐商品
      getDetailGoods(this.goodInfo.class,2).then(res=>{
        this.recommend=res.goods;
      })

    },
    mounted() {
      this.flreshScrollHeight()

    },
    // mixins:[imgMixin],
    mixins:[backTopMixin],
    methods:{
      flashScroll(){
        this.$refs.scroll.finishAll()
      },
      flreshScrollHeight(){
        this.$nextTick(()=>{
          const reflash=debunce(()=>{
            //刷新scroll高度和加载更多
            if (this.$refs.scroll){
              this.$refs.scroll.finishAll()
              this.scrollToItem(0)
            }
          },300)
          EventBus.$on("detailimgLoad",()=>{
            reflash();
          })
        })
      },
      scrollToItem(index){
        this.positionY=[]
        this.positionY.push(0)
        this.positionY.push(this.$refs.params.$el.offsetTop)
        this.positionY.push(this.$refs.comment.$el.offsetTop)
        this.positionY.push(this.$refs.tip.$el.offsetTop)
        this.positionY.push(Number.MAX_VALUE)
        this.$refs.scroll.scroll.scrollTo(0,-this.positionY[index])
      },
      scrolling(position){
        let y=-position.y
        for(let i=0;i<this.positionY.length-1;i++){
          if (i!==this.currentIndex&&y>=this.positionY[i]&&y<this.positionY[i+1]){
            this.currentIndex=i;
            this.$refs.navbar.currentIndex=this.currentIndex
          }
        }
        this.isShowBackTop = Math.abs(position.y)>1000
      },
      myCarClick(){
        const goodInfoForCar={}
        goodInfoForCar.id=this.wid;
        goodInfoForCar.img=this.good.topimgList[0];
        goodInfoForCar.title=this.good.title;
        goodInfoForCar.commit=this.good.commit;
        goodInfoForCar.price=this.good.newprice;
        this.$store.dispatch("addCar",goodInfoForCar).then(res=>{
          this.$tocast.show(res,2000)
        })
      }
    }

  }
</script>

<style scoped>
  .detail{
    height: 100vh;
  }
  .detail-info{
    position: relative;
    z-index: 5;
    background-color: #FFFFFF;
  }
  .detail-scroll{
    height: calc(100% - 93px);
    /*position: absolute;*/
    overflow: hidden;
    /*top: 44px;*/
    /*bottom: 49px;*/
    /*left: 0;*/
    /*right: 0;*/
  }
</style>
