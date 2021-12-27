/*
 * @Description: 表格展示列组件
 * @Author: panrui
 * @Date: 2021-06-07 14:43:36
 * @LastEditTime: 2021-06-08 14:49:08
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import MjSelectCol from "./src/SelectCol";
MjSelectCol.install = (Vue) => {
  Vue.component(MjSelectCol.name, MjSelectCol);
};
export default MjSelectCol;
