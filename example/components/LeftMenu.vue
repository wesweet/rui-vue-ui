<!--
 * @Description: 左侧导航菜单
 * @Author: panrui
 * @Date: 2021-05-24 14:55:57
 * @LastEditTime: 2021-06-03 13:39:13
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
    <a-menu-item key="1">
      <!-- <a-icon type="home" /> -->
      <router-link to="/" tag="span">首页</router-link>
    </a-menu-item>
    <a-menu-item key="2">
      <!-- <a-icon type="home" /> -->
      <router-link to="/start" tag="span">快速上手</router-link>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <span slot="title">
        <!-- <a-icon type="user" /> -->
        <span>Components(2)</span></span
      >
      <a-menu-item key="3">
        <router-link to="/country" tag="span">下拉搜索带保存</router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to="/select" tag="span">下拉选择搜索组件</router-link>
      </a-menu-item>
    </a-sub-menu>
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
