<template>
  <div class="views">
    <nav-bar class="login-nav">
      <template v-slot:left>
        <div @click="backProfile">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
    </nav-bar>
    <div class="content">
      <div class="login" ref="login">
        <div class="logo-ico">
          <img src="~assets/img/common/log.png" alt="">
        </div>
        <div class="form">
          <el-form :model="from">
            <table>
              <tr>
                <td>
                  <el-icon class="el-icon-message"></el-icon>
                </td>
                <td>
                  <el-form-item prop="email">
                    <el-input v-model="from.email" placeholder="邮箱"></el-input>
                  </el-form-item>
                </td>
              </tr>
              <tr>
                <td>
                  <el-icon class="el-icon-lock"></el-icon>
                </td>
                <td>
                  <el-form-item prop="password">
                    <el-input v-model="from.password"  placeholder="密码"></el-input>
                  </el-form-item>
                </td>
              </tr>
              <tr>
                <td colspan="2" class="middle-button">
                  <el-button circle  class="button"  @click="checkLogin">登录</el-button>
                </td>
              </tr>
            </table>
          </el-form>
        </div>
        <div class="outer">
          <div class="ignorePwd">忘记密码?</div>
          <div>-----------</div>
          <div class="newUser" @click="contentShow">建立新账号?注册</div>
        </div>
      </div>
      <div class="register hidden" ref="register">
        <div class="logo-ico">
          <img src="~assets/img/common/log.png" alt="">
        </div>
        <div class="form">
          <el-form :model="Regfrom">
            <table>
              <tr>
                <td>
                  <el-icon class="el-icon-message"></el-icon>
                </td>
                <td>
                  <el-form-item prop="email">
                    <el-input v-model="Regfrom.email" placeholder="邮箱"></el-input>
                  </el-form-item>
                </td>
              </tr>
              <tr>
                <td>
                  <el-icon class="el-icon-lock"></el-icon>
                </td>
                <td>
                  <el-form-item prop="password">
                    <el-input v-model="Regfrom.password"  placeholder="密码"></el-input>
                  </el-form-item>
                </td>
              </tr>
              <tr>
                <td>
                  <el-icon class="el-icon-lock"></el-icon>
                </td>
                <td>
                  <el-form-item prop="repassword">
                    <el-input v-model="Regfrom.repwd"  placeholder="确认密码"></el-input>
                  </el-form-item>
                </td>
              </tr>
              <tr>
                <td colspan="2" class="middle-button">
                  <el-button circle  class="button"  @click="checkLogin">注册</el-button>
                </td>
              </tr>
            </table>
          </el-form>
        </div>
        <div class="outer">
          <div>-----------</div>
          <div @click="contentShow" class="newUser">已有账号?登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from "../navbar/NavBar";

  import {Login} from "network/login";

  export default {
    name: "Login",
    components:{
      NavBar
    },
    data(){
      return{
        isShow:true,
        from:{
          email:'',
          password:''
        },
        Regfrom:{
          email:'',
          password:'',
          repwd:''
        }
      }
    },
    methods:{
      backProfile(){
        this.$router.back()
      },
      checkLogin(){
        Login(this.from.email,this.from.password).then(res=>{
          if (res){
            console.log(res);
            this.$store.commit("addUserInfo",res);
            this.$store.commit("addToken",res.password);
            this.from.email='';
            this.from.password='';
            this.$router.push("/profile")
          }
        })
      },
      contentShow(){
        this.isShow=!this.isShow;
        // this.$refs.login.style.hide;
        // this.$refs.register.style.show;
        if (this.isShow){
          this.$refs.login.style.removeClass='show';
          this.$refs.register.style.removeClass='index';
          this.$refs.login.style.className='index';
          this.$refs.register.style.className='show'
        }else {
          this.$refs.login.style.removeClass='index';
          this.$refs.register.style.removeClass='show';
          this.$refs.login.style.className='show';
          this.$refs.register.style.className='index'

        }
        this.from.password='';
        this.from.email='';
        this.Regfrom.email='';
        this.Regfrom.password='';
        this.Regfrom.repwd=''
      }
    }
  }
</script>

<style scoped>
  .views{
    height: 100vh;
    /*background:url("~assets/img/common/loginback.jpg") center no-repeat;*/
    background-color: #FF8E97;
    display: flex;
    flex-wrap: wrap;
    /*justify-content: center;*/
  }
  .login-nav{
    /*flex: 0 0 50%;*/
  }
  .content{
    width: 100vw;
    padding-left: 60px;
    height: calc(100% - 40px - 49px);
    position: relative;
  }
  .logo-ico{
    height: 80px;
    flex: 0 0 100%;
    text-align: center;
  }
  .logo-ico img{
    width: 80px;
    margin: 10px;
    text-align: center;
  }
  .form{
    flex: 0 0 100%;
  }
  .form table{
    /*margin: 0 auto;*/
    /*border-collapse: separate;*/
    /*border-spacing: 0 20px;*/
  }
  .el-icon-message , .el-icon-lock{
    transform: translate(0,-50%);
  }
  .middle-button{
    text-align: center;
  }
  .button{
    width: 50px;
    height: 50px;
    font-size: 14px;
    outline: none;
    margin: 0 auto;
    background-color: #FFE722;
  }
  .outer{
    text-align: center;
    font-size: 12px;
  }
  .register,.login{
    position: absolute;
    transition: transform 0.5s linear;
    backface-visibility: hidden;
  }
  .hidden{
    transform: rotateY(180deg);
  }
  .index{
    transform: rotateY(-180deg);
  }
  .show{
    transform: rotateY(0);
  }
</style>
