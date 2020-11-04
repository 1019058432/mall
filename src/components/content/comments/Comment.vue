<template>
  <div class="comment">
    <div class="comment-head">
      <div>
        <span>买家评价 {{comments.talknum}}</span> |
        <span>销量 {{comments.sellnum}}</span>
      </div>
      <div><img width="15px" src="~assets/img/detail/rt.png" alt=""></div>
    </div>
    <div v-for="(user,index) in comments.users" :key="index" class="comment-user">
      <div class="user-info">
        <img width="25px" :src="user.avatar" alt="">
        <span>{{user.name}}</span>
      </div>
      <div>
        <p>{{user.evaluate}}</p>
      </div>
      <div>
        <span>{{user.time|formatTime}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatTimeToStr} from "common/utils/timeFormat";

  export default {
    name: "Comment",
    props:{
      comments:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      formatTime(value){
        let  date = new Date(value * 1000);
        return formatTimeToStr(date,'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .comment{
    padding-left: 10px;
    padding-right: 10px;
  }
  .comment-head{
    display: flex;
    line-height: 50px;
  }
  .comment-head div:first-child{
    flex: 0 0 95%;
  }
  .comment-user{
    border-bottom: silver solid 1px;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
</style>
