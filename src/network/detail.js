import {request2} from "./request";

export function getDetail(wid) {
  return request2({
    url: '/index.php/Admin/Public/detail',
    params:{
      wid
    }
  })

}
