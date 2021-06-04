<!--
 * @Description: select组件使用文档
 * @Author: panrui
 * @Date: 2021-06-03 12:09:11
 * @LastEditTime: 2021-06-04 17:14:24
 * @LastEditors: Please set LastEditors
 * 不忘初心,不负梦想
-->

## 使用

```html
<mj-date-select
  :fnSelectDate="fnSelectDate"
  :compareAllowClear="true"
  :currentDisabled="true"
  :defaultValue="[moment(), moment()]"
  :compareDefaultValue="[moment(), moment()]"
/>
```

## API

| 参数                | 说明               | 类型     | 默认值   | 必填  | 返回值 |
| ------------------- | ------------------ | -------- | -------- | ----- | ------ |
| fnSelectDate        | 选择日期时间后组件回调 | Function | function | false | {开始日期、结束日期、对比开始日期、对比结束日期}      |
| compareAllowClear   | 对比时间是否携带清空功能   | Boolean  | true     |  | -      |
| currentDisabled     | 当前时间选择是否禁用   | Boolean  | false    | false | -      |
| defaultValue        | 当前默认选择时间范围   | Array    | []       | true | -      |
| compareDefaultValue | 对比默认时间范围   | Array    | []       | false | -      |
