<template>
  <div>
    <div>
      <el-input class="w-180px mr-10px" v-model="value" clearable />
      <el-input class="w-180px" disabled />
    </div>
    <div>
      <doc></doc>
    </div>
  </div>
</template>

<script>
import doc from './doc.md'
export default {
  name: 'WControl',
  components: { doc },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped></style>
