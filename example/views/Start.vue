<!--
 * @Description: 快速上手
 * @Author: panrui
 * @Date: 2021-05-26 11:03:16
 * @LastEditTime: 2021-06-04 13:57:08
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="start-box">
    <a-row type="flex">
      <a-col :span="20" class="markdown-body">
        <start></start>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import start from "@/mds/start.md";
export default {
  name: "Start",
  components: {
    start,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.start-box {
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>
