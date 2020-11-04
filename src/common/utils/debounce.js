//防抖函数 ---阻止频繁触发的函数并保证尽量少地触发
// export function debunce(func,wait) {
//   let timer= null
//   return function (...args) {
//     if (timer){
//       clearTimeout(timer);
//       timer =setTimeout(()=>{func.apply(this,...args)},wait)
//     }else {
//       timer =setTimeout(()=>{func.apply(this,...args)},wait)
//     }
//   }
//}//如不以函数包含func.apply(this,...args)则不能实现
// // 封装一个防抖函数debounce，为了防止refresh执行太多次
export function debunce(func,delay=500)
{
  let timer=null;
  return function (...args)
  {
    if (timer) clearTimeout(timer)
    timer=setTimeout(() =>
    {
      try {
        func.apply(this,args)
      }catch (e) {
        console.log(e)
      }
    },delay)
  }
}
