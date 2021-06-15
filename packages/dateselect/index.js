/*
 * @Author: your name
 * @Date: 2021-06-04 11:14:14
 * @LastEditTime: 2021-06-15 17:54:17
 * @LastEditors: panrui
 * @Description: In User Settings Edit
 * @FilePath: \antprovue-mujoy-ui\packages\dateselect\index.js
 */
import MjDateSelect from "./src/DateSelect";
MjDateSelect.install = (Vue) => {
  Vue.component(MjDateSelect.name, MjDateSelect);
};
export default MjDateSelect;
