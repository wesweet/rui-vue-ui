/*
 * @Description: 为组件提供 install 方法，供组件对外按需引入
 * @Author: panrui
 * @Date: 2021-05-21 18:19:48
 * @LastEditTime: 2021-06-15 17:53:58
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import MjCountry from "./src/Country";
MjCountry.install = (Vue) => {
  Vue.component(MjCountry.name, MjCountry);
};
export default MjCountry;
