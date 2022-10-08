<template>
  <el-input
    class="w-textarea"
    :style="{ width }"
    :value="value"
    type="textarea"
    v-on="inputListeners"
    v-bind="[$attrs]"
  >
  </el-input>
</template>

<script>
/**
 * WTextarea
 * @desc    处理输入的文本域(转大写，不能有中文空格等)
 */
export default {
  name: 'WTextarea',
  props: {
    width: {
      type: String,
      default: '180px'
    },
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
      return Object.assign(
        {},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: value => {
            this.$emit('input', this.toUpperCase ? value.toUpperCase() : value)
          },
          blur: e => {
            let value = e.target.value
              .trim()
              .replace(/\s/g, match =>
                match.charCodeAt(0) === 12288 ? String.fromCharCode(32) : match
              )

            // 失去焦点自动首位去空格
            this.$emit('input', value)
          }
        }
      )
    }
  },
  mounted() {
    console.warn(this.$route.name)
  }
}
</script>

<style lang="less" scoped></style>
