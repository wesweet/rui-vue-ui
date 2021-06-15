/*
 * @Description: 年度选择插件
 * @Author: panrui
 * @Date: 2021-06-03 13:51:14
 * @LastEditTime: 2021-06-08 14:49:16
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import MjSelectYear from "./src/SelectYear";
MjSelectYear.install = (Vue) => {
  Vue.component(MjSelectYear.name, MjSelectYear);
};
export default MjSelectYear;
