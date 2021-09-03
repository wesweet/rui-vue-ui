<!--
 * @Description: 富文本组件
 * @Author: panrui
 * @Date: 2021-04-21 18:32:02
 * @LastEditTime: 2021-09-03 17:31:51
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
        return {};
      },
    },
    editorText: {
      type: [String, Number],
    },
    editCallback: {
      type: Function,
      default: function () {},
    },
  },
  watch: {
    editorText: {
      immediate: true,
      handler(n) {
        if (this.editor) {
          this.editor.txt.html.call(this, n);
        }
      },
    },
  },
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
        const editor = new E("#wangeditor");
        editor.config.onchangeTimeout = 500;
        editor.config.excludeMenus = ["fontName", "fontSize"];
        editor.config.placeholder = "";
        editor.config.showFullScreen = false;
        editor.config.uploadImgMaxLength = 1;
        editor.config.withCredentials = true;
        editor.config.uploadFileName = "pic"; // 上传的文件名称
        editor.config.uploadImgServer = "/temple/uploadImage"; // 上传的文件接口地址
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
            insertImgFn(result.res);
          },
        };
        editor.config = Object.assign({}, editor.config, this.option);
        editor.create();
        // 如果存在默认富文本
        editor.txt.html(this.editorText);
        this.editor = editor;
      });
    },
  },
};
</script>
<style lang=""></style>
