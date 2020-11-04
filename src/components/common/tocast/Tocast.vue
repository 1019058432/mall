<template>
  <div class="tocast" v-show="isShow">{{message}}</div>
</template>

<script>
  export default {
    name: "Tocast",
    data(){
      return{
        message:'',
        isShow:false
      }
    },
    methods:{
      show(message,time=2000){
        this.isShow=true;
        this.message=message;
        setTimeout(()=>{
          this.isShow=false;
          this.message=''
        },time)
      }
    }
  }
</script>

<style scoped>
  .tocast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    color: #FFFFFF;
    background-color: rgba(0,0,0,.7);
    /*align-items: center;*/
    z-index: 999;
  }
</style>
