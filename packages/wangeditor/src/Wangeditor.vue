<!--
 * @Description: 富文本组件
 * @Author: panrui
 * @Date: 2021-04-21 18:32:02
 * @LastEditTime: 2021-06-09 14:23:40
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->
<template>
  <div>
    <div id="wangeditor"></div>
  </div>
</template>
<script>
import E from "wangeditor";
export default {
  name: "MjWangeditor",
  data() {
    return {
      content: "",
    };
  },
  props: {
    option: {
      type: Object,
      default: () => {
        return {
          editorText: "", // 富文本初始化内容
          uploadFileName: "pic", // 上传的文件名称
          uploadImgServer: "/temple/uploadImage", // 上传的文件接口地址
        };
      },
    },
    editCallback: {
      type: Function,
      default: function () {},
    },
  },
  watch: {},
  mounted() {
    // 初始化富文本插件
    this.setEditor();
  },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy();
    this.editor = null;
  },
  methods: {
    setEditor() {
      this.$nextTick(() => {
        console.log(this.option);
        const editor = new E("#wangeditor");
        editor.config.onchangeTimeout = 500;
        editor.config.excludeMenus = ["fontName", "fontSize"];
        editor.config.placeholder = "";
        editor.config.showFullScreen = false;
        editor.config.uploadImgMaxLength = 1;
        editor.config.withCredentials = true;
        editor.config.uploadFileName = this.option.uploadFileName;
        editor.config.uploadImgServer = this.option.uploadImgServer; // 上传地址
        // 富文本内容改变
        editor.config.onchange = (newHtml) => {
          this.content = newHtml.replaceAll(
            /color="([\w\d#]*)"/g,
            'style="color:$1"'
          ); // 替换字体颜色
          this.editCallback(this.content); // 组件回调
        };
        editor.config.uploadImgHooks = {
          // 上传图片之前
          before: function (xhr) {
            console.log(xhr);
            // 可阻止图片上传
            return {
              prevent: false,
              msg: "需要提示给用户的错误信息",
            };
          },
          // 图片上传并返回了结果，图片插入已成功
          success: function (xhr) {
            console.log("success", xhr);
          },
          // 图片上传并返回了结果，但图片插入时出错了
          fail: function (xhr, editor, resData) {
            console.log("fail", resData);
          },
          // 上传图片出错，一般为 http 请求的错误
          error: function (xhr, editor, resData) {
            console.log("error", xhr, resData);
          },
          // 上传图片超时
          timeout: function (xhr) {
            console.log("timeout", xhr);
          },
          // 图片上传并返回了结果，想要自己把图片插入到编辑器中
          // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
          customInsert: function (insertImgFn, result) {
            // result 即服务端返回的接口
            console.log("customInsert", result);
            // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
            insertImgFn(result.res);
          },
        };
        editor.create();
        // 如果存在默认富文本
        if (this.option.editorText) {
          editor.txt.html(this.option.editorText);
        }
        this.editor = editor;
      });
    },
  },
};
</script>
<style lang=""></style>
