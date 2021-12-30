/*
 * @Description: Twitter TimeLine 组件
 * @Author: panrui
 * @Date: 2021-06-07 14:43:36
 * @LastEditTime: 2021-12-30 10:27:33
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import TimeLine from "./src/TimeLine";
TimeLine.install = (Vue) => {
  Vue.component(TimeLine.name, TimeLine);
};
export default TimeLine;
