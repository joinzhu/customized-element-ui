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
<td>value</td>
<td>值</td>
<td>true</td>
<td>yes</td>
</tr>
<tr>
<td>remote-method</td>
<td>远程获取数据接口</td>
<td></td>
<td>yes</td>
</tr>
</tbody>
</table>
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'&amp;lt;template&amp;gt;\n  &amp;lt;div&amp;gt;\n    &amp;lt;WRemoteSelect\n      v-model=&quot;value&quot;\n      :remote-method=&quot;remoteMethod&quot;\n    &amp;gt;&amp;lt;/WRemoteSelect&amp;gt;\n  &amp;lt;/div&amp;gt;\n&amp;lt;/template&amp;gt;\n\n&amp;lt;script&amp;gt;\nconst options = [\n  { label: \'孙悟空\', value: \'孙悟空\' },\n  { label: \'猪八戒\', value: \'猪八戒\' },\n  { label: \'沙僧\', value: \'沙僧\' },\n  { label: \'小白龙\', value: \'小白龙\' }\n]\nexport default {\n  name: \'WRemoteSelectView\',\n  data() {\n    return {\n      value: \'\'\n    }\n  },\n  methods: {\n    remoteMethod(query) {\n      return new Promise(resolve =&amp;gt; {\n        let arr = options.filter(v =&amp;gt; {\n          return v.label.indexOf(query) &amp;gt; -1\n        })\n        resolve(arr)\n      })\n    }\n  }\n}\n&amp;lt;/script&amp;gt;\n'"></code></pre>
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
