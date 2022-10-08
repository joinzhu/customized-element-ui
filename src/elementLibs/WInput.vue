<template>
  <el-input
    class="w-input"
    :style="{ width }"
    :value="value"
    v-on="inputListeners"
    v-bind="[$attrs]"
  >
    <slot name="append" slot="append" />
    <slot name="prefix" slot="prefix" />
    <slot name="suffix" slot="suffix" />
    <slot name="prepend" slot="prepend" />
  </el-input>
</template>

<script lang="js">
/**
 * WInput
 * @desc    处理输入的输入框(转大写，不能有中文空格等)
 */
export default {
  name: 'WInput',
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
    },
    filter: {
      type: Function
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
          input: (value) => {
            let newVal = value
            if (typeof this.filter === 'function') {
              newVal = this.filter(newVal)
            }
            if (this.toUpperCase) {
              if(newVal === undefined) throw new Error('filter 返回的是undefined')
              newVal = newVal.toString().toUpperCase()
            }
            this.$emit('input', newVal)
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

<style lang="less" scoped>
::v-deep.w-input {
  .el-input__inner {
    .el-input__inner();
  }
}
</style>
