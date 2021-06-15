## 快速上手
[使用文档](http://antprovue.components.miaoju.cn/start)
### 使用组件

```js
// 首次安装
npm install mujoy-ui -S

// 版本更新
npm update mujoy-ui
```

#### 完整引入

在 mian.js 中写入以下内容

```js
import MjUI from 'mujoy-ui'
import 'mujoy-ui/lib/mj-ui.css'

Vue.use(MjUI)
```

#### 按需引入

在具体组件中使用

```js
import { MjUpload } from "mujoy-ui"
exoprt default {
  components:{
    MjUpload
  }
}
```

#### 组件名列表

```js
MjCountry: 多选带搜索保存插件

MjSelect：下拉带搜索

MjSelectYear：年度选择

MjCityPicker：省市县三级联动

MjWangeditor：富文本编辑

MjDateSelect：时间选择对比

MjUpload：图片上传

MjSelectCol：表格展示指定列

MjPreview：图片预览

```
