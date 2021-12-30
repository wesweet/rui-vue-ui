<!--
 * @Description: 文件上传
 * @Author: panrui
 * @Date: 2021-06-04 18:10:36
 * @LastEditTime: 2021-12-30 17:57:35
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->

## 使用

```html
<mj-upload
  :list="fileList"
  :fnCallback="fnCallback"
  :fnRemove="fnRemove"
></mj-upload>
```

## API

| 参数       | 说明             | 类型          | 默认值                                 | 必填  | 返回值                      | 备注                               |
| ---------- | ---------------- | ------------- | -------------------------------------- | ----- | --------------------------- | ---------------------------------- |
| maxNumber  | 最大上传数量     | Number        | 5                                      | false | -                           | -                                  |
| ident      | 标识当前组件     | String,Number | -                                      | false | ------                      |
| maxSize    | 单个文件最大尺寸 | Number        | 200kb                                  | false | -                           | -                                  |
| list       | 默认文件数组     | Array         | []                                     | false | -                           | 格式为{uid:'',name:'',thumbUrl:''} |
| filetype   | 文件类型         | Array         | ['image/png','image/jpeg','image/jpg'] | false | -                           | -                                  |
| fnCallback | 选择文件回调     | Function      | function                               | false | 当前已选择文件 list, option | -                                  |
| fnRemove   | 删除文件回调     | Function      | function                               | false | 当前删除的文件 file, option | -                                  |

<!-- | actionUrl    | 自动上传 url     | String   | ''                                     | false | -                   | -                             |
| isAutoUpload | 是否自动上传     | Boolean  | false                                  | false | -                   | -                             | -->
