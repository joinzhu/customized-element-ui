<template>
  <el-select
    v-model="model"
    v-bind="attrs"
    :remote-method="removeMethod"
    :loading="loading"
    @change="handleChange"
  >
    <el-option
      v-for="(opt, oIdx) in options"
      :key="oIdx"
      :label="opt.label"
      :value="opt.value"
    ></el-option>
  </el-select>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'WRemoteSelect',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      model: '',
      options: [],
      loading: false
    }
  },
  computed: {
    attrs() {
      let obj = cloneDeep(this.$attrs)
      Reflect.deleteProperty(obj, 'remote-method')
      return { clearable: true, filterable: true, remote: true, ...obj }
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newVal) {
        this.removeMethod(newVal)
        this.model = newVal
      }
    }
  },
  methods: {
    async removeMethod(keywords) {
      if (keywords === this.model) return
      this.loading = true
      let opts = await this.$attrs['remote-method'](keywords)
      this.loading = false
      this.options = opts
    },
    handleChange(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
