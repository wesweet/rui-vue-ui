<!--
 * @Description: 富文本编辑器
 * @Author: panrui
 * @Date: 2021-06-04 15:25:20
 * @LastEditTime: 2021-09-03 17:32:49
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="wangeditor-box">
    <a-card title="Wangeditor组件使用展示" style="width: 1000px">
      <mj-wangeditor
        :editCallback="editCallback"
        :option="option"
        :editorText="editorText"
      ></mj-wangeditor>
    </a-card>
    <!-- <a-button type="primary" @click="handClick"> 修改数据 </a-button> -->
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
      editorText: "", // 富文本初始化内容
      option: {
        // onchange(option) {
        // },
      },
    };
  },
  methods: {
    editCallback() {},
    handClick() {
      this.editorText += 1;
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
