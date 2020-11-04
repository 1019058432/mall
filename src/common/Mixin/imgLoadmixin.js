import {EventBus} from "common/Bus/bus"
import {debunce} from "common/utils/debounce"
export const imgMixin={
  mounted() {
    this.$nextTick(()=>{
      const reflash=debunce(()=>{
        //刷新scroll高度和加载更多
        this.$refs.scroll.finishAll()
      },300)
      EventBus.$on("imgLoad",()=>{
        reflash();
      })
    })
  },
}
