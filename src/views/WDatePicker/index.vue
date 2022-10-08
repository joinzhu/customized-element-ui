<template>
  <div>
    <WDatePicker v-model="date"></WDatePicker>
    <span class="pl-20px">当前date的值： {{ date[0] }} - {{ date[1] }}</span>
    <doc class="mt-20px"></doc>
  </div>
</template>

<script>
import doc from './doc.md'
export default {
  name: 'WDatePickerView',
  components: { doc },
  data() {
    return {
      date: []
    }
  }
}
</script>

<style lang="less" scoped></style>
