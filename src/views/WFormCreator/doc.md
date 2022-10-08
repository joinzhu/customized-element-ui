#### 使用

| 参数名        | 作用                               | 默认值 | 是否必须 |
| ------------- | ---------------------------------- | ------ | -------- |
| options       | 配置项（见下方例子）               |        | yes      |
| fnSearch      | 查询函数                           |        | no       |
| formAttrs     | 与 el-form 的 Form Attributes 一样。 <br />新增属性 caicai、filter，使用见下方例子 |        | no       |
| formItemAttrs | 见下方例子                         |        | no       |

| slot 插槽 | 作用               | 默认值 | 是否必须 |
| --------- | ------------------ | ------ | -------- |
| after     | 替换重置、查询按钮 |        | no       |

<https://element.eleme.cn/#/zh-CN/component/form>

```javascript
<template>
  <div>
    <WFormCreator ref="refWFormCreator" :options="options">
      <template #something="{ row, formData }">
        <el-button type="success" @click="handleClick1(row)"
          >通过插槽获取当前form-item配置</el-button
        >
        <el-button type="success" @click="handleClick2(formData)"
          >通过插槽获取表单数据</el-button
        >
      </template>
    </WFormCreator>
    <div>
      <el-button type="success" @click="getFormQuery">获取表单数据</el-button>
      <el-button type="success" @click="getFormQueryOrError"
        >获取表单数据,校验不过返回错误</el-button
      >
      <el-button type="success" @click="setFormQuery">设置表单数据</el-button>
    </div>
    <div class="mt-20px"><doc></doc></div>
  </div>
</template>

<script>
import doc from './doc.md'
export default {
  name: 'WFormCreatorView',
  components: { doc },
  data() {
    return {
      options: {
        fnSearch: this.fnSearch,
        formAttrs: {
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' }
            ],
            birthday: [
              {
                type: 'array',
                required: true,
                message: '请选择时间',
                trigger: 'change'
              }
            ]
          }
        },
        formItemAttrs: {
          name: {
            type: 'input',
            label: '名字',
            placeholder: '输入名字',
            width: '320px', // 不传则默认180px
            caicai: '菜菜' // 初始化的默认值
            filter: value => { // 修改输入的值，返回的就是最后的value
              return value
            }
          },
          sex: {
            type: 'select',
            label: '性别',
            multiple: true,
            selectOpts: [
              { label: '全部', value: '' },
              { label: '男', value: 'male' },
              { label: '女', value: 'female' }
            ],
            placeholder: '选择性别',
            width: '320px', // 不传则默认180px
            caicai: ['male', 'female'], // 初始化的默认值，多选必须传入数组
            onChange: this.handleSelectChange
          },
          birthday: {
            type: 'daterange',
            label: '出生日期',
            caicai: ['2022-07-01 00:00:00', '2022-07-01 00:00:00'] // 初始化的默认值，时间范围必须传入数组
          },
          like: {
            type: 'autoComplete',
            label: '爱好',
            queryAsync: this.asyncGetOpts,
            placeholder: '输入关键字',
            width: '320px' // 不传则默认180px
          },
          skill: {
            type: 'remoteSelect',
            label: '技能',
            queryAsync: this.remoteSelect,
            placeholder: '输入关键字',
            width: '320px' // 不传则默认180px
          },
          number: {
            type: 'inputNumber',
            label: '脚指个数',
            placeholder: '输入脚指个数',
            width: '320px' // 不传则默认180px
          },
          remark: {
            type: 'textarea',
            label: '备注',
            placeholder: '输入备注',
            rows: 5,
            width: '320px' // 不传则默认180px
          },
          something: {
            label: '插槽',
            slot: 'something'
          }
        }
      }
    }
  },
  methods: {
    asyncGetOpts(key, cb) {
      setTimeout(() => {
        let arr = [{ value: '麻将' }, { value: '斗地主' }, { value: '下棋' }]
        cb(arr)
      }, 500)
    },
    remoteSelect() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            { label: '麻将', value: 'mj' },
            { label: '斗地主', value: 'ddz' },
            { label: '下棋', value: 'xq' }
          ])
        }, 1000)
      })
    },
    fnSearch(query) {
      console.warn('点击查询', query)
    },
    // 如果options.formAttrs中包含rules，则会对表单进行校验
    getFormQuery() {
      console.warn('点击获取表单数据', this.$refs.refWFormCreator.getFormData())
    },
    async getFormQueryOrError() {
      console.warn(
        '获取表单字段数据，如果校验不过则返回错误',
        await this.$refs.refWFormCreator.getFormDataOrError()
      )
    },
    setFormQuery() {
      this.$refs.refWFormCreator.setFormData({
        birthday: ['2022-05-04 00:00:00', '2022-05-11 23:59:59']
      })
    },
    handleClick1(row) {
      console.warn('通过插槽获取当前form-item配置', row)
    },
    handleClick2(formData) {
      console.warn('通过插槽获取表单数据', formData)
    },
    handleSelectChange(value) {
      console.warn('select选中值发生变化时触发', value)
    }
  }
}
</script>

```
