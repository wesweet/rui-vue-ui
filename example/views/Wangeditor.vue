<!--
 * @Description: 富文本编辑器
 * @Author: panrui
 * @Date: 2021-06-04 15:25:20
 * @LastEditTime: 2021-06-15 17:53:07
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="wangeditor-box">
    <a-card title="Wangeditor组件使用展示" style="width: 1000px">
      <mj-wangeditor
        :option="option"
        :editCallback="editCallback"
      ></mj-wangeditor>
    </a-card>
    <a-row type="flex">
      <a-col :span="20" class="markdown-body">
        <wangeditorDocs></wangeditorDocs>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import wangeditorDocs from "@/mds/wangeditorDocs.md";
export default {
  name: "Wangeditor",
  components: {
    wangeditorDocs,
  },
  data() {
    return {
      option: {
        editorText: "", // 富文本初始化内容
        uploadFileName: "pic", // 上传的文件名称
        uploadImgServer: "/temple/uploadImage", // 上传的文件接口地址
      },
    };
  },
  methods: {
    editCallback(option) {
      console.log(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.wangeditor-box {
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>
