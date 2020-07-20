import {request,request2} from "./request";
export function getMultipleData() {
  return request({
    url:'/home/multidata'
  })
}
export function getHomeGoods(type,page) {
  return request2({
    url: '/index.php/Admin/Public/shell',
    params:{
      type,
      page
    }
  }
  )
}
