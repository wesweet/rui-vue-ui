<!--
 * @Description: 预览组件使用文档
 * @Author: panrui
 * @Date: 2021-06-09 17:59:06
 * @LastEditTime: 2021-06-10 09:57:03
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->

## 使用

```html
<mj-preview
  :previewImage="previewImage"
  :previewVisible="previewVisible"
  :previewCancel="previewCancel"
></mj-preview>
```

## API

| 参数           | 说明             | 类型     | 默认值   | 必填 | 返回值 | 备注                                           |
| -------------- | ---------------- | -------- | -------- | ---- | ------ | ---------------------------------------------- |
| previewImage   | 预览图片地址     | String   | ''       | true | -      | -                                              |
| previewCancel  | 关闭预览弹窗     | Function | function | true | -      | 必须在取消回调当中设置 previewVisible 为 false |
| previewVisible | 预览弹窗打开状态 | Boolean  | false    | true | -      | -                                              |
