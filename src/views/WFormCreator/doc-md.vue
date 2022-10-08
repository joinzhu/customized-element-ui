<template>
<!-- eslint-disable -->
<div class="v-docs">
<div class="markdown-body"><h4>使用</h4>
<table>
<thead>
<tr>
<th>参数名</th>
<th>作用</th>
<th>默认值</th>
<th>是否必须</th>
</tr>
</thead>
<tbody>
<tr>
<td>options</td>
<td>配置项（见下方例子）</td>
<td></td>
<td>yes</td>
</tr>
<tr>
<td>fnSearch</td>
<td>查询函数</td>
<td></td>
<td>no</td>
</tr>
<tr>
<td>formAttrs</td>
<td>与 el-form 的 Form Attributes 一样。 <br />新增属性 caicai、filter，使用见下方例子</td>
<td></td>
<td>no</td>
</tr>
<tr>
<td>formItemAttrs</td>
<td>见下方例子</td>
<td></td>
<td>no</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>slot 插槽</th>
<th>作用</th>
<th>默认值</th>
<th>是否必须</th>
</tr>
</thead>
<tbody>
<tr>
<td>after</td>
<td>替换重置、查询按钮</td>
<td></td>
<td>no</td>
</tr>
</tbody>
</table>
<p><a href="https://element.eleme.cn/#/zh-CN/component/form">https://element.eleme.cn/#/zh-CN/component/form</a></p>
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'&amp;lt;template&amp;gt;\n  &amp;lt;div&amp;gt;\n    &amp;lt;WFormCreator ref=&quot;refWFormCreator&quot; :options=&quot;options&quot;&amp;gt;\n      &amp;lt;template #something=&quot;{ row, formData }&quot;&amp;gt;\n        &amp;lt;el-button type=&quot;success&quot; @click=&quot;handleClick1(row)&quot;\n          &amp;gt;通过插槽获取当前form-item配置&amp;lt;/el-button\n        &amp;gt;\n        &amp;lt;el-button type=&quot;success&quot; @click=&quot;handleClick2(formData)&quot;\n          &amp;gt;通过插槽获取表单数据&amp;lt;/el-button\n        &amp;gt;\n      &amp;lt;/template&amp;gt;\n    &amp;lt;/WFormCreator&amp;gt;\n    &amp;lt;div&amp;gt;\n      &amp;lt;el-button type=&quot;success&quot; @click=&quot;getFormQuery&quot;&amp;gt;获取表单数据&amp;lt;/el-button&amp;gt;\n      &amp;lt;el-button type=&quot;success&quot; @click=&quot;getFormQueryOrError&quot;\n        &amp;gt;获取表单数据,校验不过返回错误&amp;lt;/el-button\n      &amp;gt;\n      &amp;lt;el-button type=&quot;success&quot; @click=&quot;setFormQuery&quot;&amp;gt;设置表单数据&amp;lt;/el-button&amp;gt;\n    &amp;lt;/div&amp;gt;\n    &amp;lt;div class=&quot;mt-20px&quot;&amp;gt;&amp;lt;doc&amp;gt;&amp;lt;/doc&amp;gt;&amp;lt;/div&amp;gt;\n  &amp;lt;/div&amp;gt;\n&amp;lt;/template&amp;gt;\n\n&amp;lt;script&amp;gt;\nimport doc from \'./doc.md\'\nexport default {\n  name: \'WFormCreatorView\',\n  components: { doc },\n  data() {\n    return {\n      options: {\n        fnSearch: this.fnSearch,\n        formAttrs: {\n          rules: {\n            name: [\n              { required: true, message: \'请输入活动名称\', trigger: \'blur\' }\n            ],\n            birthday: [\n              {\n                type: \'array\',\n                required: true,\n                message: \'请选择时间\',\n                trigger: \'change\'\n              }\n            ]\n          }\n        },\n        formItemAttrs: {\n          name: {\n            type: \'input\',\n            label: \'名字\',\n            placeholder: \'输入名字\',\n            width: \'320px\', // 不传则默认180px\n            caicai: \'菜菜\' // 初始化的默认值\n            filter: value =&amp;gt; { // 修改输入的值，返回的就是最后的value\n              return value\n            }\n          },\n          sex: {\n            type: \'select\',\n            label: \'性别\',\n            multiple: true,\n            selectOpts: [\n              { label: \'全部\', value: \'\' },\n              { label: \'男\', value: \'male\' },\n              { label: \'女\', value: \'female\' }\n            ],\n            placeholder: \'选择性别\',\n            width: \'320px\', // 不传则默认180px\n            caicai: [\'male\', \'female\'], // 初始化的默认值，多选必须传入数组\n            onChange: this.handleSelectChange\n          },\n          birthday: {\n            type: \'daterange\',\n            label: \'出生日期\',\n            caicai: [\'2022-07-01 00:00:00\', \'2022-07-01 00:00:00\'] // 初始化的默认值，时间范围必须传入数组\n          },\n          like: {\n            type: \'autoComplete\',\n            label: \'爱好\',\n            queryAsync: this.asyncGetOpts,\n            placeholder: \'输入关键字\',\n            width: \'320px\' // 不传则默认180px\n          },\n          skill: {\n            type: \'remoteSelect\',\n            label: \'技能\',\n            queryAsync: this.remoteSelect,\n            placeholder: \'输入关键字\',\n            width: \'320px\' // 不传则默认180px\n          },\n          number: {\n            type: \'inputNumber\',\n            label: \'脚指个数\',\n            placeholder: \'输入脚指个数\',\n            width: \'320px\' // 不传则默认180px\n          },\n          remark: {\n            type: \'textarea\',\n            label: \'备注\',\n            placeholder: \'输入备注\',\n            rows: 5,\n            width: \'320px\' // 不传则默认180px\n          },\n          something: {\n            label: \'插槽\',\n            slot: \'something\'\n          }\n        }\n      }\n    }\n  },\n  methods: {\n    asyncGetOpts(key, cb) {\n      setTimeout(() =&amp;gt; {\n        let arr = [{ value: \'麻将\' }, { value: \'斗地主\' }, { value: \'下棋\' }]\n        cb(arr)\n      }, 500)\n    },\n    remoteSelect() {\n      return new Promise(resolve =&amp;gt; {\n        setTimeout(() =&amp;gt; {\n          resolve([\n            { label: \'麻将\', value: \'mj\' },\n            { label: \'斗地主\', value: \'ddz\' },\n            { label: \'下棋\', value: \'xq\' }\n          ])\n        }, 1000)\n      })\n    },\n    fnSearch(query) {\n      console.warn(\'点击查询\', query)\n    },\n    // 如果options.formAttrs中包含rules，则会对表单进行校验\n    getFormQuery() {\n      console.warn(\'点击获取表单数据\', this.$refs.refWFormCreator.getFormData())\n    },\n    async getFormQueryOrError() {\n      console.warn(\n        \'获取表单字段数据，如果校验不过则返回错误\',\n        await this.$refs.refWFormCreator.getFormDataOrError()\n      )\n    },\n    setFormQuery() {\n      this.$refs.refWFormCreator.setFormData({\n        birthday: [\'2022-05-04 00:00:00\', \'2022-05-11 23:59:59\']\n      })\n    },\n    handleClick1(row) {\n      console.warn(\'通过插槽获取当前form-item配置\', row)\n    },\n    handleClick2(formData) {\n      console.warn(\'通过插槽获取表单数据\', formData)\n    },\n    handleSelectChange(value) {\n      console.warn(\'select选中值发生变化时触发\', value)\n    }\n  }\n}\n&amp;lt;/script&amp;gt;\n\n'"></code></pre>
</div>
</div>
</template>

    <script>
      /** eslint-disable **/
      

      
      
      export default {
        components: {
          
        },
        mixins: [
          
        ]
      }
    </script>
