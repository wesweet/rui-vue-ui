<!--
 * @Description: 文件上传
 * @Author: panrui
 * @Date: 2021-06-04 18:08:53
 * @LastEditTime: 2021-06-09 16:20:16
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="upload-box">
    <a-card title="upload组件使用展示" style="width: 500px">
      <mj-upload :list="fileList" :fnCallback="fnCallback"></mj-upload>
      <a-button @click="handClick">编辑</a-button>
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
    return {
      fileList: [
        // {
        //   uid: "-1",
        //   name: "image.png",
        //   // status: "done",
        //   thumbUrl:
        //     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        // },
        // {
        //   uid: "-5",
        //   name: "image.png",
        //   status: "error",
        // },
      ],
    };
  },
  methods: {
    fnCallback(option) {
      console.log(option);
    },
    handClick() {
      this.fileList = [
        {
          uid: "-1",
          name: "image.png",
          // status: "done",
          thumbUrl:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.upload-box {
  padding-left: 50px;
  padding-top: 20px;
  background-color: #fff;
}
</style>