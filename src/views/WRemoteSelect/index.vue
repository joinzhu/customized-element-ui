<template>
  <div>
    <WRemoteSelect
      :remote-method="remoteMethod"
      v-model="value"
    ></WRemoteSelect>
    <div class="pt-20px">
      <doc></doc>
    </div>
  </div>
</template>

<script>
import doc from './doc.md'
const options = [
  { label: '孙悟空', value: '孙悟空' },
  { label: '猪八戒', value: '猪八戒' },
  { label: '沙僧', value: '沙僧' },
  { label: '小白龙', value: '小白龙' }
]
export default {
  name: 'WRemoteSelectView',
  components: { doc },
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

<style lang="scss" scoped></style>
