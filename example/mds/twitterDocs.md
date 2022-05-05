<!--
 * @Description: 推特小组件使用文档
 * @Author: panrui
 * @Date: 2021-12-30 17:32:05
 * @LastEditTime: 2022-01-21 11:29:47
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->

## 使用

```html
<mj-time-line :option="option"> </mj-time-line>
```

## API

| 参数       | 说明     | 类型     | 默认值                                                    | 必填  | 返回值 |
| ---------- | -------- | -------- | --------------------------------------------------------- | ----- | ------ |
| option     | 配置项   | Object   | {screenName: '用户名',height: '卡片高度', follow: true, } | false | -      |
| fnCallback | 状态回调 | Function | Function                                                  | false | -      |
