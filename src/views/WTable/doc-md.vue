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
<td>WTableOpts</td>
<td>WTable 的参数(具体见下面的例子)</td>
<td></td>
<td>true</td>
</tr>
<tr>
<td>data</td>
<td>表格的数据与 el-table 的 data 一样</td>
<td>[]</td>
<td></td>
</tr>
<tr>
<td>tableAttrs</td>
<td>表格参数</td>
<td>与 el-table 的 Table Attributes 一样</td>
<td></td>
</tr>
<tr>
<td>tableColAttrs</td>
<td>列参数</td>
<td>与 el-table 的 Table-column Attributes 一样</td>
<td></td>
</tr>
</tbody>
</table>
<p><a href="https://element.eleme.cn/#/zh-CN/component/table">https://element.eleme.cn/#/zh-CN/component/table</a></p>
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'&amp;lt;template&amp;gt;\n  &amp;lt;div&amp;gt;\n    &amp;lt;WTable :WTableOpts=&quot;WTableOpts&quot; @selection-change=&quot;handleSelect&quot;&amp;gt;\n      &amp;lt;template #sex=&quot;{ row, $index }&quot;&amp;gt;\n        &amp;lt;span :class=&quot;row.sex === \'male\' ? \'text-blue-500\' : \'text-red-500\'&quot;&amp;gt;{{\n          row.sex === \'male\' ? \'男\' : \'女\'\n        }}&amp;lt;/span&amp;gt;\n      &amp;lt;/template&amp;gt;\n      &amp;lt;template #age=&quot;{ row }&quot;&amp;gt; {{ row.age }} 岁 &amp;lt;/template&amp;gt;\n      &amp;lt;template #ageHeader=&quot;{ column, $index }&quot;&amp;gt; 年龄（岁）&amp;lt;/template&amp;gt;\n      &amp;lt;template #operation=&quot;{ row }&quot;&amp;gt;\n        &amp;lt;el-button type=&quot;text&quot; @click=&quot;handleClick(row)&quot;&amp;gt;淦&amp;lt;/el-button&amp;gt;\n      &amp;lt;/template&amp;gt;\n      &amp;lt;!-- &amp;lt;template #empty&amp;gt;无数据空态插槽&amp;lt;/template&amp;gt; --&amp;gt;\n    &amp;lt;/WTable&amp;gt;\n    &amp;lt;doc&amp;gt;&amp;lt;/doc&amp;gt;\n  &amp;lt;/div&amp;gt;\n&amp;lt;/template&amp;gt;\n\n&amp;lt;script&amp;gt;\nexport default {\n  name: \'WTableView\',\n  data() {\n    return {\n      WTableOpts: {\n        data: [\n          {\n            name: \'菜菜\',\n            sex: \'male\',\n            age: 18,\n            like: [\'下棋\', \'洗脚\']\n          },\n          {\n            name: \'鸭鸭\',\n            sex: \'female\',\n            age: 19,\n            like: [\'下棋\', \'洗脚\', \'麻将\']\n          }\n        ],\n        tableAttrs: {\n          emptyTxt: \'空态文字\'\n          // emptyImg: \'\'\n        },\n        tableColAttrs: [\n          { type: \'selection\' },\n          { prop: \'name\', label: \'姓名\', \'min-width\': \'100px\' },\n          { prop: \'\', label: \'性别\', slotName: \'sex\' },\n          { prop: \'\', label: \'年龄\', slotName: \'age\' },\n          {\n            prop: \'like\',\n            label: \'爱好\',\n            render: ({ like }) =&amp;gt; like.join(\'、\')\n          },\n          {\n            prop: \'\',\n            label: \'操作\',\n            width: \'165px\',\n            slotName: \'operation\',\n            fixed: \'right\'\n          }\n        ]\n      }\n    }\n  },\n  methods: {\n    handleClick(row) {\n      alert(\'AAA的值是\' + row.aaa)\n    },\n    handleSelect(rows) {\n      console.warn(\'handleSelect\', rows)\n    }\n  }\n}\n&amp;lt;/script&amp;gt;\n'"></code></pre>
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
