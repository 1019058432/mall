import{ADD_COUNT,ADD_TO_CAR} from "./mutations-type";
export  default {
  addCar(context,payload){
    return new Promise((resolve, reject)=>{
      //查找列表中是否已经存在相同商品
      let oldgood=context.state.carList.find(item=> item.id===payload.id)
      //添加到列表中或数量加一
      if(oldgood){
        context.commit(ADD_COUNT,oldgood)
        resolve("商品数量成功+1")
      }else {
        payload.count=1
        context.commit(ADD_TO_CAR,payload)
        // store.carList.push(payload)
        resolve("商品成功加入购物车")
      }
    })
  }

}
