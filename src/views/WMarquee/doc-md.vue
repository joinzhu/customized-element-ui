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
<td>text</td>
<td>展示内容</td>
<td>true</td>
<td>true</td>
</tr>
</tbody>
</table>
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'&amp;lt;template&amp;gt;\n  &amp;lt;div&amp;gt;\n    &amp;lt;WMarquee :text=&quot;text&quot;&amp;gt;&amp;lt;/WMarquee&amp;gt;\n    &amp;lt;doc&amp;gt;&amp;lt;/doc&amp;gt;\n  &amp;lt;/div&amp;gt;\n&amp;lt;/template&amp;gt;\n\n&amp;lt;script&amp;gt;\nexport default {\n  name: \'WMarqueeView\',\n  data() {\n    return {\n      text: [\n        \'&amp;lt;span class=&quot;w-blue&quot;&amp;gt;提示&amp;lt;/span&amp;gt;：单张发票金额上限777元，超出金额将会被拆分多张发票\',\n        \'提示：单张发票金额上限9999.99元，超出金额将会被拆分多张发票\',\n        \'提示：单张发票金额上限8888元，超出金额将会被拆分多张发票\'\n      ]\n    }\n  }\n}\n&amp;lt;/script&amp;gt;\n'"></code></pre>
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
