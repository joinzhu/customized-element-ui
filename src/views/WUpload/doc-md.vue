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
<td>所有参数</td>
<td>与 el-upload 相同</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>slot 插槽</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>pending</td>
<td>未上传框内容</td>
</tr>
<tr>
<td>success</td>
<td>上传成功内容</td>
</tr>
<tr>
<td>error</td>
<td>上传失败内容</td>
</tr>
</tbody>
</table>
<p><a href="https://element.eleme.cn/#/zh-CN/component/upload">https://element.eleme.cn/#/zh-CN/component/upload</a></p>
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'&amp;lt;template&amp;gt;\n  &amp;lt;div&amp;gt;\n    &amp;lt;WUpload\n      action=&quot;/services/ams/drafts/upload&quot;  // 如果action不传，切auto-upload设置为false，则为手动上传模式\n      :headers=&quot;{\n        token: \'pn_99f146ecbec34166861a8b6cfad77dce\'\n      }&quot;\n      :on-success=&quot;handleSuccess&quot;\n      :on-error=&quot;handleError&quot;\n      successTxt=&quot;共导入201条数据，成功129条，失败1&quot;\n      errorTxt=&quot;我错了&quot; // 不传则为接口返回的 msg 或 \'\'\n    &amp;gt;&amp;lt;/WUpload&amp;gt;\n  &amp;lt;/div&amp;gt;\n&amp;lt;/template&amp;gt;\n\n&amp;lt;script&amp;gt;\nexport default {\n  name: \'WUploadView\',\n  methods: {\n    handleSuccess(...args) {\n      console.warn(args)\n    },\n    handleError(...args) {\n      console.warn(args)\n    }\n  }\n}\n&amp;lt;/script&amp;gt;\n\n'"></code></pre>
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
