

//防抖函数 ---阻止频繁触发的函数并保证尽量少地触发
function debunce(func,wait) {
  let timer= null
  return function (...args) {
    if (timer){
      clearTimeout(timer);
      timer =setTimeout(func.apply(this,...args),wait)
    }else {
      timer =setTimeout(func.apply(this,...args),wait)
    }
  }
}
