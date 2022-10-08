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
<td>product</td>
<td>产品名 如：VGM</td>
<td>''</td>
<td>yes</td>
</tr>
<tr>
<td>fileTemplate</td>
<td>模版文件</td>
<td>{name:'', url:''}</td>
<td>no</td>
</tr>
<tr>
<td>其他参数</td>
<td></td>
<td>与 el-upload 参数相同</td>
<td></td>
</tr>
</tbody>
</table>
<p><a href="https://element.eleme.cn/#/zh-CN/component/upload">https://element.eleme.cn/#/zh-CN/component/upload</a></p>
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'&amp;lt;template&amp;gt;\n  &amp;lt;div&amp;gt;\n    &amp;lt;el-button @click=&quot;open&quot;&amp;gt;打开导入文件dialog&amp;lt;/el-button&amp;gt;\n    &amp;lt;WUploadDialog\n      ref=&quot;refWUploadDialog&quot;\n      title=&quot;导入VGM&quot;\n      product=&quot;VGM&quot;\n      maxSize=&quot;3&quot;  // 文件最大：默认 5\n      :setupTxtArr=&quot;[\'2222222222\', \'333333333\']&quot; // 默认 [\'第二步：填入下载的{{ product }}模版信息，按模版\', \'第三步：上传已填写完整的模版\']\n      :fileTemplate=&quot;fileTemplate&quot;\n      action=&quot;/services/ams/drafts/upload&quot;\n      :headers=&quot;{\n        token: \'pn_99f146ecbec34166861a8b6cfad77dce\'\n      }&quot;\n      successTxt=&quot;共导入201条数据，成功129条，失败1&quot; // 默认为\'\',上传成功后会展示该文字\n      errorTxt=&quot;我错了&quot; // 默认为\'\',上传失败后会展示该文字\n      :on-success=&quot;handleSuccess&quot;\n      :on-error=&quot;handleError&quot;\n    &amp;gt;&amp;lt;/WUploadDialog&amp;gt;\n    &amp;lt;div class=&quot;pt-20px&quot;&amp;gt;\n      &amp;lt;doc&amp;gt;&amp;lt;/doc&amp;gt;\n    &amp;lt;/div&amp;gt;\n  &amp;lt;/div&amp;gt;\n&amp;lt;/template&amp;gt;\n&amp;lt;script&amp;gt;\nimport doc from \'./doc.md\'\nexport default {\n  name: \'WUploadDialogView\',\n  components: { doc },\n  data() {\n    return {\n      fileTemplate: {\n        name: \'VGM模版.xlsx\',\n        url: \'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/template/VGM%E6%95%B0%E6%8D%AE%E6%A8%A1%E6%9D%BF.xlsx\'\n      }\n    }\n  },\n  methods: {\n    handleSuccess(response, file, fileList) {\n      console.warn(\'WUploadDialogView\', response, file, fileList)\n    },\n    handleError(err, file, fileList) {\n      console.warn(\'WUploadDialogView\', err, file, fileList)\n    },\n    async open() {\n      let flag = await this.$refs.refWUploadDialog.open()\n      console.warn(flag)\n    }\n  }\n}\n&amp;lt;/script&amp;gt;\n\n&amp;lt;style lang=&quot;less&quot;&amp;gt;&amp;lt;/style&amp;gt;\n\n'"></code></pre>
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
