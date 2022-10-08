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
<td>v-model</td>
<td>时间范围的值</td>
<td>[]</td>
<td>yes</td>
</tr>
<tr>
<td>其他参数</td>
<td></td>
<td>与 el-date-picker 参数相同</td>
<td></td>
</tr>
</tbody>
</table>
<p><a href="https://element.eleme.cn/#/zh-CN/component/date-picker">https://element.eleme.cn/#/zh-CN/component/date-picker</a></p>
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'&amp;lt;template&amp;gt;\n  &amp;lt;div&amp;gt;\n    &amp;lt;WDatePicker v-model=&quot;date&quot;&amp;gt;&amp;lt;/WDatePicker&amp;gt;\n    &amp;lt;span class=&quot;pl-20px&quot;&amp;gt;当前date的值： {{ date[0] }} - {{ date[1] }}&amp;lt;/span&amp;gt;\n  &amp;lt;/div&amp;gt;\n&amp;lt;/template&amp;gt;\n\n&amp;lt;script&amp;gt;\nexport default {\n  name: \'WDatePickerView\',\n  data() {\n    return {\n      date: []\n    }\n  }\n}\n&amp;lt;/script&amp;gt;\n\n\n\n'"></code></pre>
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
