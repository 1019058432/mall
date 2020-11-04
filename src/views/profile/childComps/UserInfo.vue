<template>
  <div class="user-info">
    <img v-if="$store.state.token" :src="Avattarhave" alt="" class="avatar">
    <img v-else src="~assets/img/profile/avatar.svg" alt="" class="avatar">
    <div class="info">
      <div v-if="$store.state.token" class="login">{{user.username}}</div>
      <div v-else class="login" @click="toLogin">登录/注册</div>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="arrow">
      <img src="~assets/img/common/arrow-left.svg" alt="">
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name:'UserInfo',
    props:{
    },
    data(){
      return {
        user:{
          type:Object,
          default:{}
        }
      }
    },
    methods:{
      ...mapGetters(['userInfo']),
      toLogin(){
        this.$router.push('/login')
      }
    },
    computed:{
      Avattarhave(){
        this.user=this.userInfo();
        return this.user.avatar &&this.user.avatar.length? this.user.avatar
          :require("assets/img/profile/avatar.png")
      }
    }
  }

</script>
<style scoped>
.user-info{
  height: 85px;
  background-color: var(--color-tink);
  padding: 6px 15px;
  display: flex;
  color: #fff;
}
.user-info .avatar{
  width: 70px;
  height: 70px;
}

.info{
  padding-left: 15px;
  flex: 1;
}
.info .login{
  margin-top: 15px;
}
.phone img{
  width: 20px;
  height: 30px;
  vertical-align: middle;
  margin-left: -5px;
}
.phone span{
  font-size: 13px;
}
.arrow{
  width: 20px;
  line-height: 85px;

}
.arrow img{
  width: 20px;
}
</style>
