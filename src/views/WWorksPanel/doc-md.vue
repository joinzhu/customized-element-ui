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
<td>header</td>
<td>头部图片、标题</td>
<td>{img: '', txt: ''}</td>
<td>yes</td>
</tr>
</tbody>
</table>
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'// vue3写法\n\n&amp;lt;template&amp;gt;\n  &amp;lt;div&amp;gt;\n    &amp;lt;WWorksPanel :header=&quot;header&quot;&amp;gt;\n      &amp;lt;div&amp;gt;aaaa&amp;lt;/div&amp;gt;\n    &amp;lt;/WWorksPanel&amp;gt;\n  &amp;lt;/div&amp;gt;\n&amp;lt;/template&amp;gt;\n\n&amp;lt;script&amp;gt;\nimport { reactive, defineComponent } from \'@vue/composition-api\'\n\nexport default defineComponent({\n  name: \'WWorksPanelView\',\n  setup() {\n    let header = reactive({\n      img: \'https://rpastore.eline56.com/img/rpa-control.37653eaa.png\',\n      txt: \'运行查询\'\n    })\n    return {\n      header\n    }\n  }\n})\n&amp;lt;/script&amp;gt;\n\n'"></code></pre>
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
