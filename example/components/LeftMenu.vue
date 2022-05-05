<!--
 * @Description: 左侧导航菜单
 * @Author: panrui
 * @Date: 2021-05-24 14:55:57
 * @LastEditTime: 2022-01-21 11:27:51
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
    <a-menu-item key="1">
      <router-link to="/" tag="span">首页</router-link>
    </a-menu-item>
    <a-menu-item key="2">
      <router-link to="/start" tag="span">快速上手</router-link>
    </a-menu-item>
    <a-menu-item key="3">
      <router-link to="/changelog" tag="span">更新日志</router-link>
    </a-menu-item>
    <a-sub-menu key="4">
      <span slot="title"> <span>Components(11)</span></span>
      <a-menu-item key="4_1">
        <router-link to="/country" tag="span">下拉搜索带保存</router-link>
      </a-menu-item>
      <a-menu-item key="4_2">
        <router-link to="/select" tag="span">下拉带搜索</router-link>
      </a-menu-item>
      <a-menu-item key="4_3">
        <router-link to="/selectYear" tag="span">年度选择</router-link>
      </a-menu-item>
      <a-menu-item key="4_4">
        <router-link to="/cityPicker" tag="span">省市县联动</router-link>
      </a-menu-item>
      <a-menu-item key="4_5">
        <router-link to="/wangeditor" tag="span">富文本编辑器</router-link>
      </a-menu-item>
      <a-menu-item key="4_6">
        <router-link to="/dateSelect" tag="span">时间范围选择器</router-link>
      </a-menu-item>
      <a-menu-item key="4_7">
        <router-link to="/upload" tag="span">图片上传</router-link>
      </a-menu-item>
      <a-menu-item key="4_8">
        <router-link to="/selectcol" tag="span">表格指定列展示</router-link>
      </a-menu-item>
      <a-menu-item key="4_9">
        <router-link to="/preview" tag="span">图片预览</router-link>
      </a-menu-item>
      <a-menu-item key="4_10">
        <router-link to="/twitter" tag="span">Twitter</router-link>
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
