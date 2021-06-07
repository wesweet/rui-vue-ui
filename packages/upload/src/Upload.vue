<!--
 * @Description: 文件上传
 * @Author: panrui
 * @Date: 2021-06-04 18:15:00
 * @LastEditTime: 2021-06-07 11:54:32
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
      :remove="handRemove"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="fileList.length < maxNumber">
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
    filetype: {
      type: Array,
      default() {
        return ["image/png", "image/jpeg", "image/jpg"];
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
      fileList: [],
    };
  },
  created() {
    this.fileList = [].concat(this.list);
  },
  methods: {
    // 阻止文件自动上传
    handBeforeUpload() {
      return false;
    },
    // 限制文件上传格式及大小
    uploadLt(file) {
      if (file.thumbUrl) {
        return true
      }
      let isJpgOrPng = this.filetype.indexOf(file.type);
      if (isJpgOrPng == -1) {
        this.$message.error("文件上传格式不合法!");
        return false;
      } else {
        isJpgOrPng = true;
      }
      const isLt2M = file.size / 1024 <= this.maxSize;
      if (!isLt2M) {
        this.$message.error(`文件大小限制为${this.maxSize}kb`);
        return false;
      }
      return isJpgOrPng && isLt2M;
    },
    // 文件发生改变
    handleChange({ fileList }) {
      // console.log(fileList, '文件变更')
      if (
        fileList.every((item) => {
          return this.uploadLt(item);
        })
      ) {
        this.fileList = fileList;
        this.fnCallback([].concat(this.fileList));
      }
    },
    // 文件删除时回调
    handRemove() {
      // console.log(file, '删除文件')
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