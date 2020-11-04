import ScrollTop from "components/common/scroll/ScrollTop";

export const backTopMixin={
  data(){
    return{
      isShowBackTop: false,
    }
  },
  components:{
    ScrollTop
  },
  methods:{
    //返回顶部
    backTop(){
      this.$refs.scroll.scrollTop(0,0)
    },
  }
}
