import {request2} from "./request";

export function Login(username,password){
  return request2({
    url:"/index.php/APIData/API/login",
    params:{
      username,
      password
    }
  })
}
