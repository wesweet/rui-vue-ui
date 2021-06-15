<!--
 * @Description: 更新日志
 * @Author: panrui
 * @Date: 2021-06-09 16:12:29
 * @LastEditTime: 2021-06-15 17:51:52
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="change-log-box">
    <a-row type="flex">
      <a-col :span="20" class="markdown-body">
        <changeLogDocs></changeLogDocs>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import changeLogDocs from "@/mds/changeLogDocs.md";
export default {
  name: "ChangeLog",
  components: {
    changeLogDocs,
  },
};
</script>
<style lang="scss" scoped>
.change-log-box {
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>
