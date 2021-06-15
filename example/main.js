/*
 * @Description: 项目入口文件
 * @Author: panrui
 * @Date: 2021-05-21 18:02:50
 * @LastEditTime: 2021-06-15 17:50:23
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import MjUI from "../packages";
// import MjUI from "mujoy-ui";
import "github-markdown-css";
import "ant-design-vue/dist/antd.css";
// import 'mujoy-ui/lib/mj-ui.css'
Vue.use(MjUI);
Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
