<!--
 * @Description: 左侧导航菜单
 * @Author: panrui
 * @Date: 2021-05-24 14:55:57
 * @LastEditTime: 2021-06-07 14:56:47
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
        <span>Components(8)</span></span
      >
      <a-menu-item key="3">
        <router-link to="/country" tag="span">下拉搜索带保存</router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to="/select" tag="span">下拉带搜索</router-link>
      </a-menu-item>
      <a-menu-item key="5">
        <router-link to="/selectYear" tag="span">年度选择</router-link>
      </a-menu-item>
      <a-menu-item key="6">
        <router-link to="/cityPicker" tag="span">省市县联动</router-link>
      </a-menu-item>
      <a-menu-item key="7">
        <router-link to="/wangeditor" tag="span">富文本编辑器</router-link>
      </a-menu-item>
      <a-menu-item key="8">
        <router-link to="/dateSelect" tag="span">时间范围选择器</router-link>
      </a-menu-item>
      <a-menu-item key="9">
        <router-link to="/upload" tag="span">图片上传</router-link>
      </a-menu-item>
      <a-menu-item key="10">
        <router-link to="/selectcol" tag="span">表格指定列展示</router-link>
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
<style lang="less" scoped>
/deep/.ant-menu-item {
  padding-right: 0 !important;
  span {
    display: block;
    width: 100%;
  }
}
</style>
