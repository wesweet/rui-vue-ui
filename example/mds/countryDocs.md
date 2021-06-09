<!--
 * @Description: country组件使用文档
 * @Author: panrui
 * @Date: 2021-05-25 09:45:24
 * @LastEditTime: 2021-06-08 14:47:00
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->

## 使用

```html
<mj-country
  :plainOptions="[
        { name: '中国', value: 1 },
        { name: '日本', value: 2 },
        { name: '韩国', value: 3 }
      ]"
  :fnSureClick="fnSureClick"
  :isSave="true"
  :areaData="[{title: '中国',id: 1, list:[1]}]"
  :fnSave="fnSave"
  :fnDelete="fnDelete"
>
  <template v-slot> 渠道分包 </template>
</mj-country>
```

## API

| 参数         | 说明                                            | 类型     | 默认值   | 必填  | 返回值                                       |
| ------------ | ----------------------------------------------- | -------- | -------- | ----- | -------------------------------------------- |
| plainOptions | 选项数据数组                                    | Array    | []       | true  | -                                            |
| fnSureClick  | 确认按钮回调函数                                | Function | function | true  | 当前已选择 option 数组                       |
| isSave       | 是否需要保存列表功能                            | Boolean  | false    | false | -                                            |
| fnSave       | 如果 isSave 为 true 此项为必传 保存列表回调函数 | Function | function | false | 列表对象 包含 title 列表名称 、list 列表数组 |
| fnDelete     | 如果 isSave 为 true 此项为必传 删除列表回调函数 | Function | function | false | 当前选择列表 id                              |
| areaData     | 已保存区域数据数组                              | Array    | []       | false | -                                            |

## 插槽

| 插槽名称 |
| -------- |
| -        |
