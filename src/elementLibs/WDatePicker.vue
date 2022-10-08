<template>
  <el-date-picker
    class="w-date-picker-range"
    v-model="dateArr"
    v-bind="config"
    @change="dataChange"
  />
</template>

<script>
/**
 * WDatePicker 时间选择器
 */
import isEmpty from 'lodash/isEmpty'

export default {
  name: 'WDatePicker',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dateArr: ['', '']
    }
  },
  computed: {
    config() {
      return {
        format: 'yyyy/MM/dd',
        'value-format': 'yyyy-MM-dd',
        type: 'daterange',
        'start-placeholder': '开始日期',
        'end-placeholder': '结束日期',
        ...this.$attrs
      }
    }
  },
  watch: {
    value: {
      handler(newVal) {
        if (!Array.isArray(newVal)) {
          throw new Error('WDatePicker date请传入数组')
        }

        let [date1, date2] = newVal
        if (!this.dateArr) {
          this.dateArr = [date1 || '', date2 || '']
          return
        }
        this.$set(this.dateArr, 0, date1 || '')
        this.$set(this.dateArr, 1, date2 || '')
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    dataChange(val) {
      let date1 = ''
      let date2 = ''

      if (!isEmpty(val) && val.length === 2 && val[0] && val[1]) {
        date1 = `${val[0]} 00:00:00`
        date2 = `${val[1]} 23:59:59`
      }
      this.$emit('input', [date1, date2])
    }
  }
}
</script>

<style lang="less" scoped>
::v-deep.w-date-picker-range {
  .el-date-editor();
}
</style>
