/*
 * @Description: Twitter TimeLine 组件
 * @Author: panrui
 * @Date: 2021-06-07 14:43:36
 * @LastEditTime: 2021-12-30 17:03:06
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import MjTimeLine from "./src/TimeLine";
MjTimeLine.install = (Vue) => {
  Vue.component(MjTimeLine.name, MjTimeLine);
};
export default MjTimeLine;
