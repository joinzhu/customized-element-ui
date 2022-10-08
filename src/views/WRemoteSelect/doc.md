#### 使用

| 参数名        | 作用             | 默认值 | 是否必须 |
| ------------- | ---------------- | ------ | -------- |
| value         | 值               | true   | yes      |
| remote-method | 远程获取数据接口 |        | yes      |

```javascript
<template>
  <div>
    <WRemoteSelect
      v-model="value"
      :remote-method="remoteMethod"
    ></WRemoteSelect>
  </div>
</template>

<script>
const options = [
  { label: '孙悟空', value: '孙悟空' },
  { label: '猪八戒', value: '猪八戒' },
  { label: '沙僧', value: '沙僧' },
  { label: '小白龙', value: '小白龙' }
]
export default {
  name: 'WRemoteSelectView',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    remoteMethod(query) {
      return new Promise(resolve => {
        let arr = options.filter(v => {
          return v.label.indexOf(query) > -1
        })
        resolve(arr)
      })
    }
  }
}
</script>
```
