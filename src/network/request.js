import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  instance.interceptors.request.use(config => {
    return config
  },error => {

  })
  instance.interceptors.response.use(result =>{
    return result.data
  },error => {
    console.log(error);
  })


  return instance(config)
}
// http://139.155.93.101/index.php/Admin/Public/shell
export function request2(config) {
  const instance = axios.create({
    baseURL:'http://47.107.168.27:80',
    timeout:5000
  })
  instance.interceptors.request.use(config => {
    return config
  },error => {

  })
  instance.interceptors.response.use(result =>{
    // console.log(result);
    return result.data
  },error => {
    console.log(error);
  })


  return instance(config)
}
export function request3(config) {
  //1.创建axios的实例
  const instance = axios.create({
    //baseURL:"http://123.207.32.32:8000",
    baseURL: 'http://152.136.185.210:8000/api/w6',
    //baseURL:'接口请向codewhy老师购买',
    timeout: 5000
  })
  //axios拦截器
  //请求
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    //console.log(err)
  })
  //响应
  instance.interceptors.response.use(res => {
    //console.log(res)
    return res.data
  }, err => {
    //console.log(err)
  })
  //发送真正的网络请求
  return instance(config)
}
