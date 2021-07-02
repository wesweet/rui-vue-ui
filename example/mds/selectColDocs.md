<!--
 * @Description: 表格展示列组件
 * @Author: panrui
 * @Date: 2021-06-07 14:52:07
 * @LastEditTime: 2021-07-02 17:43:48
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
  :fnOnchangeClick="fnOnchangeClick"
  :height="height"
  :hideLeft="hideLeft"
  :value="value"
></mj-select-col>
```

## API

| 参数            | 说明                   | 类型     | 默认值   | 必填  | 返回值         | 备注                                                         |
| --------------- | ---------------------- | -------- | -------- | ----- | -------------- | ------------------------------------------------------------ |
| plainOptions    | 表格列数据             | Array    | []       | true  | -              | 数据格式 [{name:'展示', value: 1},{name:'激活率', value: 2}] |
| colData         | 已保存的列数据         | Array    | []       | false | -              | 数据格式 [{name:'前三列', value: 1,list:[1]}]                |
| fnSureClick     | 保存新的一组列回调函数 | Function | function | false | -              | -                                                            |
| fnDelete        | 删除新的一组列回调函数 | Function | function | false | -              | -                                                            |
| fnOnchangeClick | 选择已保存组列回调     | Function | function | false | 当前组包含信息 | -                                                            |
| height          | 组件高度               | Number   | 343      | false | -              | 0.3.0 新增                                                   |
| hideLeft        | 隐藏左侧模块           | Boolean  | false    | false | -              | 0.3.0 新增                                                   |
| value           | 默认选中的值           | Number   | false    | false | -              | 0.3.1 新增                                                   |

<!-- | defaultValue | 默认选中的值           | String   | -        | false | ------ | -->
