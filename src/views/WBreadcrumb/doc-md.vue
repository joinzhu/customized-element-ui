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
<td>data</td>
<td>面包屑数据</td>
<td></td>
<td>yes</td>
</tr>
</tbody>
</table>
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'&amp;lt;template&amp;gt;\n  &amp;lt;div&amp;gt;\n    &amp;lt;div class=&quot;pt-10px&quot;&amp;gt;\n      &amp;lt;WBreadcrumb :data=&quot;list1&quot;&amp;gt;&amp;lt;/WBreadcrumb&amp;gt; // data为,号分开的字符串\n    &amp;lt;/div&amp;gt;\n    &amp;lt;div class=&quot;pt-10px&quot;&amp;gt;\n      &amp;lt;WBreadcrumb :data=&quot;list2&quot;&amp;gt;&amp;lt;/WBreadcrumb&amp;gt; // data为数组\n    &amp;lt;/div&amp;gt;\n    &amp;lt;div class=&quot;pt-20px&quot;&amp;gt;\n      &amp;lt;doc&amp;gt;&amp;lt;/doc&amp;gt;\n    &amp;lt;/div&amp;gt;\n  &amp;lt;/div&amp;gt;\n&amp;lt;/template&amp;gt;\n\n&amp;lt;script&amp;gt;\nexport default {\n  name: \'WBreadcrumbView\',\n  data() {\n    return {\n      list1: \'首页,数据发送数据发送数据发送数据发送数据发送数据发送,舱单,AMS\',\n      list2: [\n        { txt: \'首页\', to: { path: \'/a\' } },\n        {\n          txt: \'数据发送数据发送数据发送数据发送数据发送数据发送\',\n          to: { path: \'/b\' }\n        },\n        { txt: \'舱单\', to: { path: \'/c\' } },\n        { txt: \'AMS\', to: { path: \'/d\' } }\n      ]\n    }\n  }\n}\n&amp;lt;/script&amp;gt;\n'"></code></pre>
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
