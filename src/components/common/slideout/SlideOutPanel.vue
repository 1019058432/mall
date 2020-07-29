<template>
  <div class="slideMain ">
    <!-- 触发按钮 -->
    <button id="toggle-button" @click="showView">模态框</button>
    <!-- 模态框 -->
    <div id="myModal" class="modal panel" ref="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>头部</h2>
          <span id="closeBtn" class="close" @click="showView">×</span>
        </div>
        <div class="modal-body">
          <p>这是一个模态框！</p>
          <p>喜欢就点个赞吧！</p>
        </div>
        <div class="modal-footer">
          <h3>尾部</h3>
        </div>
      </div>
    </div>
    <div class="menu" ref="menu"></div>
  </div>
</template>

<script>
  import Slideout from "./slideout.min"

  export default {
    name: "SlideOutPanel",
    components:{
    },
    data(){
      return {
        slideout:{}
      }
    },
    mounted() {
      this.$nextTick(()=>{
        this.slideout = new Slideout({
          'panel': this.$refs.modal,
          'menu': this.$refs.menu,
          'padding': '300',
          'tolerance': 70,
          'side' :"bottom"
        });
      })

    },
    methods: {
      showView(){
          this.slideout.toggle();
      }
    }
  }
</script>

<style scoped>
.slideMain{
  height: 60vh;
}
  .viewport{
    height: 40vh;
  }
.slideout-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 256px;
  min-height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 0;
  display: none;
}

.slideout-menu-left {
  left: 0;
}

.slideout-menu-right {
  right: 0;
}

.slideout-panel {
  position: relative;
  z-index: 1;
  will-change: transform;
  background-color: #FFF; /* A background-color is required */
  min-height: 100vh;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
}
</style>
