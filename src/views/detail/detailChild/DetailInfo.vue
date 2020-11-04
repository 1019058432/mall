<template>
  <div class="detail-info ">
<!--    商品描述-->
    <div class="detail-title plr10">
      <p>{{goodInfo.commit}}</p>
    </div>
<!--    商品价格-->
    <div class="detail-price plr10">
      <span>{{goodInfo.newprice}}</span>
      <div class="small-font-size">
        <del>{{goodInfo.olprice}}</del>
        <div>热卖促销</div>
      </div>
    </div>
<!--    商品服务-->
    <div class="detail-server small-font-size mtb10 plr10" @click="showViewServer">
      <span v-for="(item,index) in goodInfo.serverList" v-if="index<3" :key="index">
        <img src="~assets/img/detail/right.png" alt="">
        {{item}}
      </span>
      <span>
        <img src="~assets/img/detail/rt.png" alt="">
      </span>
    </div>
    <modal :is-show="isShowServer"
           @on-close="showViewServer"
           ref="serverModal"
    >
      <div>
        <p align="center">服务说明</p>
        <ul>
          <li v-for="(item,index) in goodInfo.serverList" :key="index">
            {{item}}
          </li>
        </ul>
      </div>
    </modal>
<!--    商品颜色尺码-->
    <div class="detail-color-size plr10" @click="showViewColorSize">
      <p>请选择: 颜色 尺码</p>
      <span>
          <img src="~assets/img/detail/rt.png" alt="">
        </span>
    </div>
    <modal :is-show="isShowColorSize"
           @on-close="showViewColorSize"
           ref="ColorSizeModal"
    >
      <div class="color-size-show">
        <p>颜色</p>
        <ul>
          <li v-for="(item,index) in goodInfo.colorList" :key="index">
            {{item}}
          </li>
        </ul>
        <p>尺码</p>
        <ul>
          <li v-for="(item,index) in goodInfo.sizeList" :key="index">
            {{item}}
          </li>
        </ul>
      </div>
    </modal>
<!--    店家信息-->
    <div class="shopinfo">
      <div class="shopimg">
        <img :src="goodInfo.log" alt="">
      </div>
      <div class="shop-info-detail">
        <p class="shop-name">{{goodInfo.name}}</p>
        <div class="star-info">
          <span>
            <img src="~assets/img/detail/star.png" v-for="(item,index) in starNumb" class="star" alt="">
          </span>|
          <span>{{goodInfo.stock}}</span>
        </div>
        <div class="shop-tip">
          <span>{{goodInfo.follow ? goodInfo.follow : "9999+人关注"}}</span>
          <span>累计销量{{goodInfo.sellnum}}+</span>
          <span>{{starCommit}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Modal from "components/common/modal/Modal";
  export default {
    name: "DetailInfo",
    components:{
      Modal
    },
    props:{
      goodInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        isShowServer:false,
        isShowColorSize:false,
      }
    },
    mounted() {
    },
    computed:{
      starNumb(){
        if (this.goodInfo.star ===null || this.goodInfo.star ===undefined){
          return 5
        }else {
          return this.goodInfo.star
        }
      },
      starCommit(){
        switch (this.goodInfo.star) {
          case 0:
            return "零星新店";
          case 1:
            return "一星新店";
          case 2:
            return "二星新店";
          case 3:
            return "三星新店";
          case 4:
            return "四星好店";
          default:
            return "五星好店"

        }
      }
    },
    methods:{
      showViewServer(){
        let serverModal=this.$refs.serverModal;
        this.isShowServer=!this.isShowServer;
        serverModal.showModal();
      },
      showViewColorSize(){
        let ColorSizeModal=this.$refs.ColorSizeModal;
        this.isShowColorSize=!this.isShowColorSize;
        ColorSizeModal.showModal();
      },
    }
  }
</script>

<style scoped>

  .color-size-show{
    font-size: 12px;
  }
  .color-size-show ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
  }
  .color-size-show p{

  }
  .color-size-show ul li{
    flex: 0 0 50%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .modal-content p,.modal-content span{
    color: deeppink;
  }
  .detail-info{
    overflow: hidden;
  }
  .detail-title{
    font-size: var(--font-size);
  }
  .detail-price{
    display: flex;
  }
  .detail-server{
    display: flex;
    justify-content: space-between;
    line-height: 35px;
  }
  .detail-server img{
    vertical-align: middle;
    width: 15px;
  }
  .detail-color-size{
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    line-height: 20px;
    border-bottom: #E9E9E9 10px solid;
    color: var(--color-text);
  }
  .detail-color-size img{
    margin-top: 12px;
    vertical-align: middle;
    width: 15px;
  }
  .shopinfo{
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .shopimg{
    margin: 0 10px;
  }
  .shopimg img{
    width: 57px;
    margin: auto 0;
    position: relative;
    bottom: -4px;
  }
  .shop-info-detail div{
    font-size: 10px;
  }
  .shop-name{
    margin-top: 15px;
    margin-bottom: 5px;
  }
  .star-info{
    color: var(--color-text);
  }
  .star-info span{
    margin-right: 10px;
  }
  .star-info span:nth-child(n+2){
    margin-left: 5px;
  }
  .shop-tip{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .shop-tip span{
    border-radius: 5px ;
    padding: 0 3px;
    margin-right: 5px;
    color: #FF396A;
    border: #A0A0A0A0 solid 1px;
  }
  .star{
    width: 10px;
  }
  .small-font-size{
    font-size: var(--small-font-size);
  }
  .plr10{
    padding: 0 10px;
  }
  .mtb10{
    /*margin: 10px 0;*/
    border-top: #E9E9E9 10px solid;
    border-bottom: #E9E9E9 10px solid;
  }
</style>
