/*
 * @Description: 为组件提供 install 方法，供组件对外按需引入
 * @Author: panrui
 * @Date: 2021-05-21 18:19:48
 * @LastEditTime: 2021-05-21 18:23:00
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import PrCountry from './src/Country'
PrCountry.install = Vue => {
  Vue.component(PrCountry.name, PrCountry)
}
export default PrCountry