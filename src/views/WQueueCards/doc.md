#### 使用

```javascript
<template>
  <div>
    <div :style="{ width: '100%', height: '100vh' }">
      // cardWidth: 卡片的宽度
      // cardHeight: 卡片的宽度
      // cardDate: 数据
      //
      <WQueueCards cardWidth="200" cardHeight="200" :cardDate="cardList" @resize="handleResize">
        <template #default="{ row, $index }">
          <div class="bg-blue-400">
            <p>{{ row.title }}</p>
            <p>{{ row.des }}</p>
            <p>{{ row.txt }}</p>
          </div>
        </template>
      </WQueueCards>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WQueueCardsView',
  data() {
    return {}
  },
  computed: {
    cardList() {
      let obj = {
        title: '预配舱单-上海',
        des: '发送接口',
        txt: '上海预配舱单原始数据发送接口。 为您提供'
      }
      let arr = []
      for (let i = 0; i < 30; i++) {
        arr.push(obj)
      }
      return arr
    }
  },
  methods: {
    handleResize(pageSize) {
      console.warn('pageSize', pageSize)
    }
  }
}
</script>
```
