<!--
 * @Description: select组件使用文档
 * @Author: panrui
 * @Date: 2021-06-03 12:09:11
 * @LastEditTime: 2021-09-30 11:45:29
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

| 参数         | 说明         | 类型          | 默认值   | 必填  | 返回值                         |
| ------------ | ------------ | ------------- | -------- | ----- | ------------------------------ |
| list         | 下拉列表     | Array         | []       | true  | ------                         |
| changeSelect | 下拉选择回调 | Function      | function | false | 当前选择项、组件创建时传入参数 |
| defaultValue | 默认选择项   | String,Number | -        | false | ------                         |
| width        | 组件宽度     | Number        | 150      | false | ------                         |
| placeholder  | 默认值       | String,Number | -        | false | ------                         |
| ident        | 标识当前组件 | String,Number | -        | false | ------                         |
| mode         | select 模式  | String        | default  | false | ------                         |

## 备注

> 默认最多显示 100 条、超过的内容使用搜索查询

> mode 支持 'default' | 'multiple' 模式
