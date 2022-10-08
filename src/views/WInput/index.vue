<template>
  <div>
    <WInput v-model="value" width="180px" placeholder="请输入"></WInput>
    <div class="pt-20px">
      <doc></doc>
    </div>
  </div>
</template>

<script>
import doc from './doc.md'
export default {
  name: 'WInputView',
  components: { doc },
  data() {
    return {
      value: ''
    }
  }
}
</script>
