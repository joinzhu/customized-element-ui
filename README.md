# wise-element-ui

基于 element-ui 二次封装的组件库

文档：<https://joinzhu.github.io/customized-element-ui/>

### 安装

npm i @wise/element-ui -S  
yarn add @wise/element-ui

### 快速上手

#####完整引入
在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import WiseUI from '@wise/element-ui';
import '@wise/element-ui/lib/ui.css';
// 如果需要使用 @wise/element-ui 中所有对element-ui的样式覆盖，则再引入 global-and-cover.css
import '@wise/element-ui/lib/global-and-cover.css;
import App from './App.vue';

Vue.use(ElementUI);
Vue.use(WiseUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

###### 组件使用

```javascript
<template>
  <组件名><组件名/>
</template>
```

### script 命令

| 命令   | 作用                |
| ------ | ------------------- |
| serve  | 本地调试            |
| lib    | 打包公共组件        |
| push   | 推送到 npm 库       |
| online | 打包并推送到 npm 库 |

### 新增组件

1. 到目录 src/elementLibs
2. 增加组件.vue 文件
3. 打包、发布
4. 结束

⚠️ 组件会自动注册，不用操心
