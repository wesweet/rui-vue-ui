<!--
 * @Description: 省市县联动组件文档
 * @Author: panrui
 * @Date: 2021-06-03 16:04:39
 * @LastEditTime: 2021-06-11 17:14:31
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->

## 使用

```html
<mj-city-picker
  :isLevel="3"
  province="河北省"
  city="唐山市"
  area="路南区"
  :fnCallback="fnCallback"
></mj-city-picker>
```

## API

| 参数       | 说明                | 类型     | 默认值   | 必填  | 返回值               |
| ---------- | ------------------- | -------- | -------- | ----- | -------------------- |
| isLevel    | 联动级别支持 1-3 级 | Number   | 1        | false | -                    |
| province   | 省份名称            | String   | -        | false | -                    |
| city       | 城市名称            | String   | -        | false | -                    |
| area       | 区县名称            | String   | -        | false | -                    |
| fnCallback | 省市区信息更改回调  | Function | function | false | 当前选择的省市区信息 |
