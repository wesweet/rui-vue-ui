/*
 * @Description: 文件上传
 * @Author: panrui
 * @Date: 2021-06-04 18:14:36
 * @LastEditTime: 2021-06-08 14:49:25
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import MjUpload from './src/Upload'
MjUpload.install = Vue => {
  Vue.component(MjUpload.name, MjUpload)
}
export default MjUpload