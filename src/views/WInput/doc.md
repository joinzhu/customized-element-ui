#### 使用

| 参数名      | 作用         | 默认值               | 是否必须 |
| ----------- | ------------ | -------------------- | -------- |
| toUpperCase | 是否开启大写 | true                 | no       |
| width       | 宽度         | '180px'              | no       |
| 其他参数    |              | 与 el-input 参数相同 |

<https://element.eleme.cn/#/zh-CN/component/input>

```javascript
<template>
  <div>
    <WInput v-model="value" width="180px" placeholder="请输入"></WInput>
  </div>
</template>

<script>
export default {
  name: 'WInputView',
  data() {
    return {
      value: ''
    }
  }
}
</script>

```
