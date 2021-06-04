/*
 * @Description: 三级联动
 * @Author: panrui
 * @Date: 2021-06-03 15:45:51
 * @LastEditTime: 2021-06-03 16:09:00
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import MjCityPicker from './src/CityPicker'
MjCityPicker.install = Vue => {
  Vue.component(MjCityPicker.name, MjCityPicker)
}
export default MjCityPicker