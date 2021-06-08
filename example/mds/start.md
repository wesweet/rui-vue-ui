<!--
 * @Description: 快速开始文档
 * @Author: panrui
 * @Date: 2021-05-26 11:06:53
 * @LastEditTime: 2021-06-08 09:38:31
 * @LastEditors: panrui
 * 不忘初心,不负梦想
-->

## 快速上手

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
import MjUI from "mujoy-ui";

Vue.use(MjUI);
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
