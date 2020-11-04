
import Tocast from "./Tocast";

const obj={};
obj.install=function (Vue) {
  const Tocastconstruct=Vue.extend(Tocast);
  const tocast=new Tocastconstruct;
  tocast.$mount(document.createElement('div'))
  document.body.appendChild(tocast.$el);
  Vue.prototype.$tocast=tocast
};
export default obj
