<!--
 * @Description: 左侧导航菜单
 * @Author: panrui
 * @Date: 2021-05-24 14:55:57
 * @LastEditTime: 2021-05-25 10:59:45
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <a-menu theme="dark" :default-selected-keys="['3']" mode="inline">
    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="user" /><span>Components(1)</span></span>
      <a-menu-item key="3">
        <router-link to="/country" tag="span">下拉搜索带保存</router-link>
      </a-menu-item>
      <a-menu-item key="4"> Bill </a-menu-item>
      <a-menu-item key="5"> Alex </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title"><a-icon type="team" /><span>Team</span></span>
      <a-menu-item key="6"> Team 1 </a-menu-item>
      <a-menu-item key="8"> Team 2 </a-menu-item>
    </a-sub-menu>
    <a-menu-item key="9">
      <a-icon type="file" />
      <span>File</span>
    </a-menu-item>
  </a-menu>
</template>
<script>
export default {
  data() {
    return {
      current: ["mail"],
      openKeys: ["sub1"],
    };
  },
  watch: {
    openKeys(val) {
      console.log("openKeys", val);
    },
  },
  methods: {
    handleClick(e) {
      console.log("click", e);
    },
    titleClick(e) {
      console.log("titleClick", e);
    },
  },
};
</script>
<style lang="less" scoped></style>
