<!--
 * @Description: 富文本编辑器文档
 * @Author: panrui
 * @Date: 2021-06-04 15:27:20
 * @LastEditTime: 2021-09-01 15:38:49
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->

## 使用

```html
<mj-wangeditor
  :editCallback="editCallback"
  :option="option"
  :editorText="editorText"
></mj-wangeditor>
```

## 组件参数
```js
data() {
  editorText: '',
  option: {
    onchange(){},
    uploadImgHooks: {
      customInsert() {
        // 图片上传成功后回调
      }
    }
  },
},
methods:{
  editCallback: function(){}
}
```

## 官方文档

[wangeditor](https://www.wangeditor.com/ ":target=_blank")

## API

| 参数         | 说明               | 类型           | 默认值 | 必填  | 返回值 | 备注                       |
| ------------ | ------------------ | -------------- | ------ | ----- | ------ | -------------------------- |
| option       | 插件配置           | Object         | -      | false | -      | editor config 对象相关属性 |
| editorText   | 富文本默认值       | String、Number | -      | false | -      |
| editCallback | 组件内容改变时回调 | Function       | -      | false | -      |
