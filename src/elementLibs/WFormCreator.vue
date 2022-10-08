<template>
  <el-form
    v-if="showForm"
    class="WFormCreator"
    ref="refForm"
    :model="formData"
    v-bind="[attrs]"
    inline
  >
    <template v-for="(item, itemIdx) in formConfigList">
      <template v-if="item.isShow !== false">
        <el-form-item
          :key="itemIdx"
          :label="item['label'] || ' '"
          :prop="item['key']"
          :rules="item['rules']"
        >
          <!--输入框-->
          <WInput
            v-if="item['type'] === 'input'"
            v-model="formData[item['key']]"
            :toUpperCase="!!item.toUpper"
            :placeholder="item['placeholder']"
            :width="item.width"
            :maxlength="item.maxlength"
            :minlength="item.minlength"
            :show-word-limit="!!item.maxlength"
            :filter="item.filter"
            clearable
          />
          <!--文本域-->
          <WTextarea
            v-if="item['type'] === 'textarea'"
            v-model="formData[item['key']]"
            :toUpperCase="!!item.toUpper"
            :placeholder="item['placeholder']"
            :width="item.width"
            :rows="item.rows"
            :maxlength="item.maxlength"
            :minlength="item.minlength"
            :show-word-limit="!!item.maxlength"
            clearable
          />
          <!--计数器-->
          <el-input-number
            v-if="item['type'] === 'inputNumber'"
            v-model="formData[item['key']]"
            :controls-position="item['controls-position'] || 'right'"
            :min="item['min']"
            :max="item['max']"
            :placeholder="item['placeholder']"
            :size="item['size']"
            clearable
          />
          <!--选择框-->
          <el-select
            v-else-if="item['type'] === 'select'"
            v-model="formData[item['key']]"
            clearable
            filterable
            :multiple="item['multiple']"
            :collapse-tags="item['collapse-tags']"
            :placeholder="item['placeholder']"
            :style="{ width: item.width }"
            @change="item['onChange']"
          >
            <slot
              :name="item['key']"
              v-bind="{ row: item, scopeForm: formData }"
            >
              <el-option
                v-for="(opt, oIdx) in item['selectOpts']"
                :key="oIdx"
                :label="opt.label"
                :value="opt.value"
              ></el-option>
            </slot>
          </el-select>
          <!--日期范围选择-->
          <WDatePicker
            v-else-if="item['type'] === 'daterange'"
            v-model="formData[item['key']]"
          ></WDatePicker>
          <!--数值范围-->
          <WNumberRange
            v-else-if="item['type'] === 'numberrange'"
            v-model="formData[item['key']]"
            range-separator="-"
          ></WNumberRange>
          <!--模糊搜索input-->
          <WAutoComplete
            v-else-if="item['type'] === 'autoComplete'"
            v-model="formData[item['key']]"
            :fetch-suggestions="item['queryAsync']"
            @select="handleAsyncInputSelect($event, item['key'])"
            :trigger-on-focus="false"
            :placeholder="item['placeholder']"
            :toUpperCase="!!item.toUpper"
            clearable
            :style="{ width: item.width }"
          ></WAutoComplete>
          <!--远程搜索select-->
          <WRemoteSelect
            v-else-if="item['type'] === 'remoteSelect'"
            v-model="formData[item['key']]"
            :remote-method="item['queryAsync']"
            :placeholder="item['placeholder']"
            :loading="item['loading']"
            :style="{ width: item.width }"
          ></WRemoteSelect>
          <!--空位插槽-->
          <slot
            v-else-if="item['slot']"
            :name="item['key']"
            v-bind="{ row: item, formData: formData }"
          ></slot>
        </el-form-item>
      </template>
    </template>
    <el-form-item v-if="!!options.fnSearch" :label="' '">
      <slot v-bind="formData" name="after">
        <el-button @click="handleSearch" type="primary">查询</el-button>
        <el-button @click="resetForm">重置</el-button>
      </slot>
    </el-form-item>
  </el-form>
</template>

<script>
import WInput from './WInput'
import WNumberRange from './WNumberRange.vue'
import WDatePicker from './WDatePicker.vue'
import WAutoComplete from './WAutoComplete.vue'
import dayjs from 'dayjs'
import cloneDeep from 'lodash/cloneDeep'
import { tryCatch, isArrayOrUndefined } from '@/utils/common'

export default {
  name: 'WFormCreator',
  components: { WInput, WNumberRange, WDatePicker, WAutoComplete },
  props: {
    options: {
      type: Object,
      default: () => ({
        fnSearch: () => {},
        formAttrs: {},
        formItemAttrs: {}
      })
    }
  },
  data() {
    return {
      formConfigList: [],
      // 表单字段
      formData: {},
      dataFormat: {
        // 时间返回格式
        dateFormat: 'YYYY-MM-DD',
        // 补全字段开始标识
        start: 'Begin',
        // 补全字段结果标识
        end: 'End'
      }
    }
  },
  computed: {
    attrs() {
      let { formAttrs } = this.options
      let attrs = cloneDeep(formAttrs)
      attrs && Reflect.deleteProperty(attrs, 'rules')
      return { 'label-position': 'top', ...attrs }
    },
    rules() {
      return this.options.formAttrs?.rules || {}
    },
    showForm() {
      return this.formConfigList.length > 0
    }
  },
  mounted() {
    // 监听配置的变化，然后初始化
    this.unwatch = this.$watch(
      'options',
      newVal => {
        this.init(newVal)
      },
      {
        deep: true,
        immediate: true
      }
    )
    this.$once('hook:beforeDestroy', () => {
      this.unwatch()
    })
  },
  methods: {
    init(options = {}) {
      // 生成表单结构
      this.formInit(options)
    },
    // 根据配置，表单初始化
    formInit({ formItemAttrs }) {
      let { rules } = this
      // 恢复初始化
      Object.assign(this.formData, this.$options.data().formData)
      // 存放视图中的form渲染list
      const list = []
      const keys = Object.keys(formItemAttrs)
      keys.forEach(key => {
        // 处理默认值
        let { caicai, ...otherOpts } = formItemAttrs[key]
        // 补全 item 字段
        let item = Object.assign(
          // 默认字段
          {
            key, // 字段对应key
            label: '', // form label
            value: caicai, // 默认值
            type: '', // form 类型 [input|textarea|inputNumber|date|daterange|numberrange|asyncinput|asyncselect]
            selectOpts: [], // select 选择项
            queryAsync: null, // 远程搜索方法函数
            loading: false, // loading
            visible: true, // 是否可见
            slot: false // slot
          },
          otherOpts
        )
        // 处理计数器默认值
        const { type, multiple } = item
        if (type === 'inputNumber') {
          item.value = caicai || 1
        }
        // 处理多选下拉框
        if ('select' === type) {
          if (multiple) {
            item['collapse-tags'] ??= true
            isArrayOrUndefined(caicai, key)
            item.value = caicai || []
          }
          if (typeof item.onChange !== 'function') item.onChange = () => {}
        }
        // 处理range类型初始值是否为Array数组
        if (!item.value && ['daterange', 'numberrange'].includes(type)) {
          isArrayOrUndefined(caicai, key)
          item.value = caicai || []
        }
        // 处理input远程搜索，闭包回掉
        if ('asyncinput' === type) {
          item.queryAsync = this.createInputFetchSearchAsync(
            item.queryAsync,
            key
          )
        }
        // 为el-form-item设置rules
        rules[key] && (item.rules = rules[key])
        // 校验form字段是否缺失
        validFormType(item)
        if (item.visible) list.push(item)
        // 设置筛选字段
        this.$set(this.formData, key, item.value)
      })
      this.$set(this, 'formConfigList', list)
      // 此处是为了配合可拖拽布局前后的组件，dragIdx在一开始没有，只有在进行设置后才会有
      if (list.every(i => i.dragIdx !== undefined)) {
        list.sort(function (a, b) {
          return a.dragIdx - b.dragIdx
        })
        this.$set(this, 'formConfigList', list)
      }
    },
    // 设置表单字段数据
    setFormData(data, needValid = true) {
      let formData = cloneDeep(data)
      Reflect.deleteProperty(formData, 'pageNum')
      Reflect.deleteProperty(formData, 'pageSize')

      // 此处是为了确保 formInit 完成之后再设置数据，不然会出现重置后仍为缓存数据
      this.$nextTick(() => {
        Object.assign(this.formData, this.formatArrayFormData(formData, 'set'))
        needValid && this.validate()
      })
    },
    // 获取表单字段数据
    getFormData() {
      let formData = cloneDeep(this.formData)
      this.validate()
      return cloneDeep(this.formatArrayFormData(formData, 'get'))
    },
    // 获取表单字段数据，如果校验不过则返回错误
    async getFormDataOrError(outValidate = false) {
      let formData = cloneDeep(this.formData)
      let [err, res] = await tryCatch(this.validate)
      if (err) {
        return { status: 'error', err }
      }
      return {
        status: 'pass',
        data: cloneDeep(this.formatArrayFormData(formData, 'get'))
      }
    },
    handleSearch() {
      let query = this.getFormData()
      return this.options.fnSearch(query)
    },
    // 校验 表单
    validate() {
      return this.$refs.refForm.validate()
    },
    // 重置
    resetForm() {
      this.$refs['refForm'].resetFields()
    },
    /**
     * 创建input autocoplete 搜索函数
     * 对应的数据格式一定要是 数组里多个对象，对象是 value label的形式（label的键名可以随意）
     * @return {function(...[*]=)}
     */
    createInputFetchSearchAsync(fu, key) {
      return async (queryString, cb) => {
        try {
          if (queryString === '') return
          let res = await fu(queryString)
          res = res.filter(
            item => item.label.indexOf(queryString.toUpperCase()) > -1
          )
          cb(res)
        } catch (e) {
          console.error(e)
        }
      }
    },
    // 处理远端搜索
    handleAsyncInputSelect(item, key) {
      this.formData[key] = String(item.value)
    },

    // 分割表单中的数组数据
    formatArrayFormData(formData, type) {
      let tempData = cloneDeep(this.options.formItemAttrs)
      const keys = Object.keys(tempData)
      const { dateFormat, start, end } = this.dataFormat
      // 拆分对应数组的数据
      if (type === 'get') {
        const selectKeys = []
        // 日期范围keys
        const dateRangeKeys = []
        // 月份范围keys
        const settlementMonthSelect = []
        // 数值范围keys
        const numberRangeKeys = []
        keys.forEach(key => {
          if (tempData[key].type === 'daterange') {
            dateRangeKeys.push(key)
          } else if (tempData[key].type === 'settlementMonthSelect') {
            settlementMonthSelect.push(key)
          } else if (tempData[key].type === 'numberrange') {
            numberRangeKeys.push(key)
          }
        })

        // daterange 分割为两个字段
        dateRangeKeys.forEach(key => {
          if (Array.isArray(formData[key]) && formData[key].length === 2) {
            let startTime =
              formData[key][0] === ''
                ? ''
                : dayjs(formData[key][0]).format(dateFormat) + ' 00:00:00'
            let endTime =
              formData[key][1] === ''
                ? ''
                : dayjs(formData[key][1]).format(dateFormat) + ' 23:59:59'

            formData[`${key}${start}`] = startTime
            formData[`${key}.${start.toLowerCase()}`] = startTime
            formData[`${key}${end}`] = endTime
            formData[`${key}.${end.toLowerCase()}`] = endTime
          } else {
            formData[`${key}${start}`] = ''
            formData[`${key}.${start.toLowerCase()}`] = ''
            formData[`${key}${end}`] = ''
            formData[`${key}.${end.toLowerCase()}`] = ''
          }
          delete formData[key]
        })
        // settlementMonthSelect 分割为两个字
        settlementMonthSelect.forEach(key => {
          if (Array.isArray(formData[key]) && formData[key].length === 2) {
            formData[`${key}${start}`] = formData[key][0]
            formData[`${key}.${start.toLowerCase()}`] = formData[key][0]
            formData[`${key}${end}`] = formData[key][1]
            formData[`${key}.${end.toLowerCase()}`] = formData[key][1]
          } else {
            formData[`${key}${start}`] = ''
            formData[`${key}.${start.toLowerCase()}`] = ''
            formData[`${key}${end}`] = ''
            formData[`${key}.${end.toLowerCase()}`] = ''
          }
          delete formData[key]
        })

        // numberrange 分割为两个字段
        numberRangeKeys.forEach(key => {
          if (Array.isArray(formData[key]) && formData[key].length === 2) {
            formData[`${key}${start}`] = formData[key][0]
            formData[`${key}${end}`] = formData[key][1]
          } else {
            formData[`${key}${start}`] = ''
            formData[`${key}${end}`] = ''
          }
          delete formData[key]
        })
      } else if (type === 'set') {
        keys.forEach(key => {
          if (
            tempData[key].type === 'daterange' ||
            tempData[key].type === 'settlementMonthSelect' ||
            tempData[key].type === 'numberrange'
          ) {
            if (
              formData[`${key}${start}`] !== undefined &&
              formData[`${key}${end}`] !== undefined
            ) {
              formData[key] = [
                formData[`${key}${start}`],
                formData[`${key}${end}`]
              ]
              delete formData[`${key}${start}`]
              delete formData[`${key}${end}`]
            }
          }
        })
      }
      return formData
    }
  }
}

// 对传入数据做校验
function validFormType(form) {
  const { selectOpts, queryAsync, type, key, value } = form
  if (type.indexOf('select') > -1 && !Array.isArray(selectOpts)) {
    throw new Error(
      `ZTablePageCreator, ${key} selectOpts in Props must be Array, but selectOpts is ${typeof selectOpts}`
    )
  } else if (type.indexOf('range') > -1 && !Array.isArray(value)) {
    throw new Error(
      `ZTablePageCreator, ${key} value in Props must be Array, but value is ${typeof value}`
    )
  } else if (type.indexOf('async') > -1 && !(queryAsync instanceof Function)) {
    throw new Error(
      `ZTablePageCreator, ${key} queryAsync in Props must be Function, but queryAsync is ${typeof queryAsync}`
    )
  }
}
</script>

<style lang="less" scoped>
::v-deep.WFormCreator {
  .el-form();
  .el-input__inner {
    .el-input__inner();
  }
}
</style>
