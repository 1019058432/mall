<template>
  <div class="detail-params" v-if="Object.keys(paramsInfo).length>0">
    <p>产品参数</p>
    <table>
      <tr v-for="(item,index) in paramsInfo" :key="index">
        <td class="table-left">{{title(item)}}</td>
        <td class="table-right">{{content(item)}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props:{
      paramsInfo:{
        type:Array,
        default(){
          return []
        }
      }
    },
    computed:{
      title(){
        return(text)=>{
          let result=text.match(/[^:]+/);
          return result? result[0]:''
        }
      },
      content(){
        return (text)=> {
          // console.log(text)
          let result=text.match(/\s.+/);
          return result? result[0]:''
        }
      }
    }
  }
</script>

<style scoped>
  tr{
    border: #666666 solid 1px;
  }
  .table-left{
    width: 30vw;
  }
  .table-right{
    width: 70vw;
  }
</style>
