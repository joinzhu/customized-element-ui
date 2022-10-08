#### 使用

| 参数名 | 作用           | 默认值             | 是否必须 |
| ------ | -------------- | ------------------ | -------- |
| header | 头部图片、标题 | {img: '', txt: ''} | yes      |

```javascript
// vue3写法

<template>
  <div>
    <WWorksPanel :header="header">
      <div>aaaa</div>
    </WWorksPanel>
  </div>
</template>

<script>
import { reactive, defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'WWorksPanelView',
  setup() {
    let header = reactive({
      img: 'https://rpastore.eline56.com/img/rpa-control.37653eaa.png',
      txt: '运行查询'
    })
    return {
      header
    }
  }
})
</script>

```
