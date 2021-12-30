/*
 * @Description: 引入组件
 * @Author: panrui
 * @Date: 2021-05-21 18:23:19
 * @LastEditTime: 2021-12-30 17:02:33
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import MjCountry from "./country";
import MjSelect from "./select";
import MjSelectYear from "./selectyear";
import MjCityPicker from "./citypicker";
import MjWangeditor from "./wangeditor";
import MjDateSelect from "./dateselect";
import MjUpload from "./upload";
import MjSelectCol from "./selectcol";
import MjPreview from "./preview";
import MjTimeLine from "./timeline";

// 所有组件列表
const components = [
  MjCountry,
  MjSelect,
  MjSelectYear,
  MjCityPicker,
  MjWangeditor,
  MjDateSelect,
  MjUpload,
  MjSelectCol,
  MjPreview,
  MjTimeLine,
];

// 定义 install 方法，接收 Vue 作为参数
const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return;
  install.installed = true;
  // 遍历注册所有组件
  components.map((component) => Vue.component(component.name, component));
  // 下面这个写法也可以
  // components.map(component => Vue.use(component))
};

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export {
  MjCountry,
  MjSelect,
  MjSelectYear,
  MjCityPicker,
  MjWangeditor,
  MjDateSelect,
  MjUpload,
  MjSelectCol,
  MjPreview,
  MjTimeLine,
};

export default {
  install,
  // 所有组件，必须具有 install，才能使用 Vue.use()
  ...components,
};
