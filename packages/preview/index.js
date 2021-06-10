/*
 * @Description: 图片预览组件
 * @Author: panrui
 * @Date: 2021-06-09 17:53:38
 * @LastEditTime: 2021-06-09 17:56:40
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import MjPreview from './src/Preview'
MjPreview.install = Vue => {
  Vue.component(MjPreview.name, MjPreview)
}
export default MjPreview