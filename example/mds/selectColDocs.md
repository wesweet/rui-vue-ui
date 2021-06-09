<!--
 * @Description: 表格展示列组件
 * @Author: panrui
 * @Date: 2021-06-07 14:52:07
 * @LastEditTime: 2021-06-09 14:21:54
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->

## 使用

```html
<mj-select-col
  :plainOptions="plainOptions"
  :colData="colData"
  :fnSureClick="fnSureClick"
  :fnDelete="fnDelete"
></mj-select-col>
```

## API

| 参数         | 说明                   | 类型     | 默认值   | 必填  | 返回值 | 备注                               |
| ------------ | ---------------------- | -------- | -------- | ----- | ------ | ---------------------------------- |
| plainOptions | 表格列数据             | Array    | []       | true  | -      | {name:'展示', value: 1}            |
| colData      | 已保存的列数据         | Array    | []       | false | -      | {name:'前三列', value: 1,list:[1]} |
| fnSureClick  | 保存新的一组列回调函数 | Function | function | false | -      | -                                  |
| fnDelete     | 删除新的一组列回调函数 | Function | function | false | -      | -                                  |

<!-- | defaultValue | 默认选中的值           | String   | -        | false | ------ | -->
