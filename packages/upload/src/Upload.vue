<!--
 * @Description: 文件上传
 * @Author: panrui
 * @Date: 2021-06-04 18:15:00
 * @LastEditTime: 2021-06-07 10:12:04
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div class="clearfix">
    <a-upload
      :action="actionUrl"
      list-type="picture-card"
      :file-list="fileList"
      :beforeUpload="handBeforeUpload"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="fileList.length < 8">
        <a-icon type="plus" />
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  name: "MjUpload",
  props: {
    isAutoUpload: {
      type: Boolean,
      default: false,
    },
    maxNumber: {
      type: Number,
      default: 5,
    },
    maxSize: {
      type: Number,
      default: 200,
    },
    actionUrl: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    fnCallback: {
      type: Function,
      default: function () {},
    },
  },
  data() {
    return {
      previewVisible: false,
      previewImage: "",
      // fileList: [
      //   {
      //     uid: "-1",
      //     name: "image.png",
      //     status: "done",
      //     url:
      //       "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      //   },
      //   {
      //     uid: "-2",
      //     name: "image.png",
      //     status: "done",
      //     url:
      //       "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      //   },
      //   {
      //     uid: "-3",
      //     name: "image.png",
      //     status: "done",
      //     url:
      //       "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      //   },
      //   {
      //     uid: "-4",
      //     name: "image.png",
      //     status: "done",
      //     url:
      //       "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      //   },
      //   {
      //     uid: "-5",
      //     name: "image.png",
      //     status: "error",
      //   },
      // ],
    };
  },
  methods: {
    // 文件上传
    handBeforeUpload(file, fileList) {
      console.log("上传检测", file, fileList);
      return false
    },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
  },
};
</script>
<style lang="scss" scoped>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>