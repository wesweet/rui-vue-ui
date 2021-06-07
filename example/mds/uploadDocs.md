<!--
 * @Description: 文件上传
 * @Author: panrui
 * @Date: 2021-06-04 18:10:36
 * @LastEditTime: 2021-06-07 10:12:14
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->

## 使用

## API

| 参数         | 说明             | 类型     | 默认值   | 必填  | 返回值         |
| ------------ | ---------------- | -------- | -------- | ----- | -------------- |
| isAutoUpload | 是否自动上传     | Boolean  | false    | false | -              |
| maxNumber    | 最大上传数量     | Number   | 5        | false | -              |
| maxSize      | 单个文件最大尺寸 | Number   | 200kb    | false | -              |
| actionUrl    | 自动上传 url     | String   | ''       | false | -              |
| list         | 图片数组         | Array    | []       | false | -              |
| fnCallback   | 选择文件回调     | Function | function | false | 当前已选择文件 |
