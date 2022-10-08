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
<td>toUpperCase</td>
<td>是否开启大写</td>
<td>true</td>
<td>no</td>
</tr>
<tr>
<td>width</td>
<td>宽度</td>
<td>'180px'</td>
<td>no</td>
</tr>
<tr>
<td>其他参数</td>
<td></td>
<td>与 el-input 参数相同</td>
<td></td>
</tr>
</tbody>
</table>
<p><a href="https://element.eleme.cn/#/zh-CN/component/input">https://element.eleme.cn/#/zh-CN/component/input</a></p>
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'&amp;lt;template&amp;gt;\n  &amp;lt;div&amp;gt;\n    &amp;lt;WInput v-model=&quot;value&quot; width=&quot;180px&quot; placeholder=&quot;请输入&quot;&amp;gt;&amp;lt;/WInput&amp;gt;\n  &amp;lt;/div&amp;gt;\n&amp;lt;/template&amp;gt;\n\n&amp;lt;script&amp;gt;\nexport default {\n  name: \'WInputView\',\n  data() {\n    return {\n      value: \'\'\n    }\n  }\n}\n&amp;lt;/script&amp;gt;\n\n'"></code></pre>
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
