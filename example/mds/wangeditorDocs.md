<!--
 * @Description: 富文本编辑器文档
 * @Author: panrui
 * @Date: 2021-06-04 15:27:20
 * @LastEditTime: 2021-06-08 14:47:34
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->

## 使用

```html
<mj-wangeditor :editCallback="editCallback" :option="option"></mj-wangeditor>
```
```js
option: {
  editorText: '123',
  uploadFileName: 'pic',
  uploadImgServer: 'https://temple/uploadImage'
}
```

## API

| 参数         | 说明                   | 类型     | 默认值                                                                                                | 必填  | 返回值     |
| ------------ | ---------------------- | -------- | ----------------------------------------------------------------------------------------------------- | ----- | ---------- |
| option       | 富文本配置             | object   | {editorText: '初始化富文本', uploadFileName: '图片上传的字段', uploadImgServer: '图片上传服务器地址'} | true  | -          |
| editCallback | 富文本内容改变回调函数 | Function | -                                                                                                     | false | 富文本内容 |
