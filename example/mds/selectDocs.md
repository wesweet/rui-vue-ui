<!--
 * @Description: select组件使用文档
 * @Author: panrui
 * @Date: 2021-06-03 12:09:11
 * @LastEditTime: 2021-06-08 14:47:17
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->

## 使用

```html
<mj-select
  :changeSelect="changeSelect"
  :defaultValue="5"
  :list="[{value: 5, name: '热血三国'}]"
  placeholder="请选择"
/>
```

## API

| 参数         | 说明          | 类型     | 默认值   | 必填  | 返回值             |
| ------------ | ------------- | -------- | -------- | ----- | ------------------ |
| list         | 下拉列表      | Array    | []       | true  | ------             |
| changeSelect | 下拉选择回调  | Function | function | false | 当前选择的游戏信息 |
| defaultValue | 默认选择项 id | Number   | -        | false | ------             |
| placeholder  | 默认值        | String   | -        | false | ------             |
