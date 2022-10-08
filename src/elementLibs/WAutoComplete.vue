<template>
  <el-autocomplete
    class="WAutoComplete"
    :value="value"
    v-bind="$attrs"
    clearable
    v-on="inputListeners"
  >
    <slot slot="append" name="append" />
    <slot slot="prefix" name="prefix" />
    <slot slot="suffix" name="suffix" />
    <slot slot="prepend" name="prepend" />
  </el-autocomplete>
</template>

<script>
/**
 * WAutoComplete
 * @desc    处理输入的输入框(转大写，不能有中文空格等)
 */
export default {
  name: 'ZAutoComplete',

  props: {
    value: {
      type: String,
      default: ''
    },
    toUpperCase: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    // 所有父级事件
    inputListeners() {
      const vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign(
        {},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: value => {
            vm.$emit('input', this.toUpperCase ? value.toUpperCase() : value)
          },
          blur: e => {
            const value = e.target.value
              .trim()
              .replace(/\s/g, match =>
                match.charCodeAt(0) === 12288 ? String.fromCharCode(32) : match
              )
            // 失去焦点自动首位去空格
            vm.$emit('input', value)
          }
        }
      )
    }
  }
}
</script>
<style lang="less" scoped>
.WAutoComplete {
  width: 180px;
}
</style>
