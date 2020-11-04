<template>
  <div class="car-bottom-bar">
    <div class="check-content">
      <check-button class="check-button"
                    @click.native="allSelect"
                    :isChecked="isCheckAll"/>
      <span>全选</span>
    </div>
    <div class="totalPrice">
      小计¥{{totalPrice}}
    </div>
    <div class="totalCount" @click="toPay">
      去结算({{totalCount}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/common/checkbutton/CheckButton";

  import {mapGetters} from 'vuex'
  export default {
    name: "CarBottomBar",
    components:{
      CheckButton
    },
    computed:{
      ...mapGetters(['carList']),
      totalPrice(){
        return this.carList.filter(item=>{
          return item.check
        }).reduce((prev,item)=>{
          return prev+(item.price*item.count)
        },0).toFixed(2)
      },
      totalCount(){
        return this.carList.filter(item=>{
          return item.check
        }).length
      },
      isCheckAll(){
        if (this.carList.length===0)return false;
        // return this.carList.every(item=>item.check)
        return !this.carList.find(item=>!item.check)
      }
    },
    methods:{
      allSelect(){
        if (this.isCheckAll){
          this.carList.forEach(item=>item.check=false)
        }else {
          this.carList.forEach(item=>item.check=true)
        }
      },
      toPay(){
        if (this.totalCount===0){
          this.$tocast.show("当前无选中商品")
        }
      }
    }
  }
</script>

<style scoped>
  .car-bottom-bar{
    display: flex;
    line-height: 40px;
    text-align: center;
  }
  .check-content{
    display: flex;
    width: 60px;
  }
  .check-button{
    position: relative;
    top: 10px;
  }
  .totalPrice{
    flex: 1;
  }
  .totalCount{
    width: 80px;
    background-color: #ff6827;
  }
</style>
