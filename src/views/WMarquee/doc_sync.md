#### 使用

```javascript
<template>
  <div>
    // 异步的情况下需要设置key
    <WMarquee :text="text" :key="text.length"></WMarquee>
    <doc></doc>
  </div>
</template>

<script>
import doc from './doc.md'
export default {
  name: 'WMarqueeView',
  components: { doc },
  data() {
    return {
      text: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.text = ['1111', '2222', '33333', '4444', '5555']
    }, 3000)
  }
}
</script>

<style lang="less" scoped></style>

```
