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
    baseURL:'http://139.155.93.101:80',
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
