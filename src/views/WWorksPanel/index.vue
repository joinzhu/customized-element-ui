<template>
  <div>
    <WWorksPanel :header="header">
      <div>aaaa</div>
    </WWorksPanel>
    <div class="pt-20px">
      <doc></doc>
    </div>
  </div>
</template>

<script>
import { reactive, defineComponent } from '@vue/composition-api'
import doc from './doc.md'

export default defineComponent({
  name: 'WWorksPanelView',
  components: { doc },
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
