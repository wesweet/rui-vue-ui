<!--
 * @Description: 图片预览组件
 * @Author: panrui
 * @Date: 2021-06-09 17:54:16
 * @LastEditTime: 2021-06-10 09:50:36
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div>
    <!-- <img style="width: 100%" :src="previewImage" @click="handClick" /> -->
    <a-modal
      :visible="previewVisible"
      :width="width"
      :footer="null"
      @cancel="handleCancel"
    >
      <img alt="example" ref="img" @load="handLoad" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
export default {
  name: "MjPreview",
  props: {
    // 图片的路径
    previewImage: {
      type: String,
      default: "",
    },
    // 弹层是否可见
    previewVisible: {
      type: Boolean,
      default: false,
    },
    // 取消弹窗回调
    previewCancel: {
      type: Function,
      default() {},
    },
  },
  created() {},
  data() {
    return {
      width: 0,
    };
  },
  methods: {
    handleCancel() {
      // this.previewVisible = false;
      this.previewCancel();
    },
    handLoad() {
      this.width = this.$refs.img.width + 48;
    },
  },
};
</script>
