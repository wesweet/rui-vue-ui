/*
 * @Description: 富文本编辑器组件
 * @Author: panrui
 * @Date: 2021-06-04 15:30:27
 * @LastEditTime: 2021-06-04 18:16:15
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import MjWangeditor from './src/Wangeditor'
MjWangeditor.install = Vue => {
  Vue.component(MjWangeditor.name, MjWangeditor)
}
export default MjWangeditor