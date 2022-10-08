#### 使用

| 参数名      | 作用         | 默认值               | 是否必须 |
| ----------- | ------------ | -------------------- | -------- |
| text | 展示内容 | true                 | true       |

```javascript
<template>
  <div>
    <WMarquee :text="text"></WMarquee>
    <doc></doc>
  </div>
</template>

<script>
export default {
  name: 'WMarqueeView',
  data() {
    return {
      text: [
        '<span class="w-blue">提示</span>：单张发票金额上限777元，超出金额将会被拆分多张发票',
        '提示：单张发票金额上限9999.99元，超出金额将会被拆分多张发票',
        '提示：单张发票金额上限8888元，超出金额将会被拆分多张发票'
      ]
    }
  }
}
</script>
```
