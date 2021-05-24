<!--
 * @Description: 
 * @Author: panrui
 * @Date: 2021-05-21 18:02:50
 * @LastEditTime: 2021-05-24 15:30:39
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="home">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout>
        <a-layout-sider>
          <LeftMenu></LeftMenu>
        </a-layout-sider>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftMenu from "@/components/LeftMenu.vue";

export default {
  name: "Home",
  components: {
    LeftMenu,
  },
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  /deep/ .ant-layout {
    height: 100%;
    overflow: hidden;
    .ant-layout-sider {
      background-color: #fff;
    }
  }
}
</style>
