<!--
 * @Description: 图片预览组件
 * @Author: panrui
 * @Date: 2021-06-09 17:57:45
 * @LastEditTime: 2021-06-10 09:54:05
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="preview-box">
    <a-card title="preview组件使用展示" style="width: 500px">
      <div style="width: 300px">
        <mj-preview
          :previewImage="previewImage"
          :previewVisible="previewVisible"
          :previewCancel="previewCancel"
        ></mj-preview>
        <a-button @click="preview">预览图片</a-button>
      </div>
    </a-card>
    <a-row type="flex">
      <a-col :span="20" class="markdown-body">
        <previewDocs></previewDocs>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import previewDocs from "@/mds/previewDocs.md";
export default {
  name: "Preview",
  components: {
    previewDocs,
  },
  data() {
    return {
      previewImage: "",
      previewVisible: false,
    };
  },
  methods: {
    preview() {
      this.previewImage =
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png";
      this.previewVisible = true;
    },
    previewCancel() {
      this.previewVisible = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.preview-box {
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>