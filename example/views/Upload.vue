<!--
 * @Description: 文件上传
 * @Author: panrui
 * @Date: 2021-06-04 18:08:53
 * @LastEditTime: 2021-06-04 18:18:43
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="upload-box">
    <a-card title="upload组件使用展示" style="width: 500px">
      <mj-upload></mj-upload>
    </a-card>
    <a-row type="flex">
      <a-col :span="20" class="markdown-body">
        <uploadDocs></uploadDocs>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import uploadDocs from "@/mds/uploadDocs.md";
export default {
  name: "Upload",
  components: {
    uploadDocs,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.upload-box {
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>