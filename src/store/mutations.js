import{
  ADD_COUNT,
  ADD_TO_CAR,
  ADD_TOKEN,
  REMOVE_TOKEN,
  ADD_USER_INFO,
  REMOVE_USER_INFO
} from "./mutations-type";

export default {
  // mutations唯一的目的就是修改state的状态
  //mutations中的方法完成的任务要尽可能单一，以方便查bug时好追踪操作
  [ADD_COUNT](state,payload){
  payload.count++
},
  [ADD_TO_CAR](state,payload){
    payload.check=true;
  state.carList.push(payload)
},
  [ADD_TOKEN](state,token){
    localStorage.setItem('token',token)
    state.token=token
  },
  [REMOVE_TOKEN](state){
    localStorage.removeItem('token')
    state.token=undefined
  }
  ,[ADD_USER_INFO](state,payload){
    state.userInfo=payload
  }

}
