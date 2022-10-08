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
<td>content</td>
<td>富文本里面的值</td>
<td>空</td>
<td>no</td>
</tr>
<tr>
<td>editConfig</td>
<td>富文本的配置</td>
<td>Object</td>
<td>no</td>
</tr>
</tbody>
</table>
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'{\n              &lt;span class=&quot;hljs-attr&quot;&gt;height&lt;/span&gt;: &lt;span class=&quot;hljs-number&quot;&gt;500&lt;/span&gt;, &lt;span class=&quot;hljs-comment&quot;&gt;//富文本高度&lt;/span&gt;\n              &lt;span class=&quot;hljs-attr&quot;&gt;language_url&lt;/span&gt;: &lt;span class=&quot;hljs-string&quot;&gt;\'\'&lt;/span&gt;, &lt;span class=&quot;hljs-comment&quot;&gt;//中文包&lt;/span&gt;\n              &lt;span class=&quot;hljs-attr&quot;&gt;language&lt;/span&gt;: &lt;span class=&quot;hljs-string&quot;&gt;\'zh_CN\'&lt;/span&gt;, &lt;span class=&quot;hljs-comment&quot;&gt;//中文&lt;/span&gt;\n              &lt;span class=&quot;hljs-attr&quot;&gt;browser_spellcheck&lt;/span&gt;: &lt;span class=&quot;hljs-literal&quot;&gt;true&lt;/span&gt;, &lt;span class=&quot;hljs-comment&quot;&gt;// 拼写检查&lt;/span&gt;\n              &lt;span class=&quot;hljs-attr&quot;&gt;branding&lt;/span&gt;: &lt;span class=&quot;hljs-literal&quot;&gt;false&lt;/span&gt;, &lt;span class=&quot;hljs-comment&quot;&gt;// 去水印&lt;/span&gt;\n              &lt;span class=&quot;hljs-attr&quot;&gt;elementpath&lt;/span&gt;: &lt;span class=&quot;hljs-literal&quot;&gt;true&lt;/span&gt;, &lt;span class=&quot;hljs-comment&quot;&gt;//禁用编辑器底部的状态栏&lt;/span&gt;\n              &lt;span class=&quot;hljs-attr&quot;&gt;statusbar&lt;/span&gt;: &lt;span class=&quot;hljs-literal&quot;&gt;true&lt;/span&gt;, &lt;span class=&quot;hljs-comment&quot;&gt;// 隐藏编辑器底部的状态栏&lt;/span&gt;\n              &lt;span class=&quot;hljs-attr&quot;&gt;paste_data_images&lt;/span&gt;: &lt;span class=&quot;hljs-literal&quot;&gt;true&lt;/span&gt;, &lt;span class=&quot;hljs-comment&quot;&gt;// 是否允许粘贴图像&lt;/span&gt;\n              &lt;span class=&quot;hljs-attr&quot;&gt;menubar&lt;/span&gt;: &lt;span class=&quot;hljs-literal&quot;&gt;true&lt;/span&gt;, &lt;span class=&quot;hljs-comment&quot;&gt;// 隐藏最上方menu&lt;/span&gt;\n              &lt;span class=&quot;hljs-attr&quot;&gt;fontsize_formats&lt;/span&gt;: &lt;span class=&quot;hljs-string&quot;&gt;\'12px 14px 16px 18px 20px 24px 26px 28px 30px 32px 36px\'&lt;/span&gt;, &lt;span class=&quot;hljs-comment&quot;&gt;//字体大小&lt;/span&gt;\n              &lt;span class=&quot;hljs-attr&quot;&gt;font_formats&lt;/span&gt;:&lt;span class=&quot;hljs-string&quot;&gt;\'微软雅黑=Microsoft YaHei,Helvetica Neue;PingFang SC;sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun;serifsans-serif;Terminal=terminal;monaco;Times New Roman=times new roman;times\'&lt;/span&gt;, &lt;span class=&quot;hljs-comment&quot;&gt;//字体&lt;/span&gt;\n              &lt;span class=&quot;hljs-attr&quot;&gt;file_picker_types&lt;/span&gt;: &lt;span class=&quot;hljs-string&quot;&gt;\'image\'&lt;/span&gt;,\n              &lt;span class=&quot;hljs-attr&quot;&gt;images_upload_credentials&lt;/span&gt;: &lt;span class=&quot;hljs-literal&quot;&gt;true&lt;/span&gt;,\n              &lt;span class=&quot;hljs-attr&quot;&gt;plugins&lt;/span&gt;: [\n                &lt;span class=&quot;hljs-string&quot;&gt;\'advlist autolink lists link image charmap print preview anchor\'&lt;/span&gt;,\n                &lt;span class=&quot;hljs-string&quot;&gt;\'searchreplace visualblocks code fullscreen\'&lt;/span&gt;,\n                &lt;span class=&quot;hljs-string&quot;&gt;\'insertdatetime media table paste code help wordcount\'&lt;/span&gt;,\n              ],\n              &lt;span class=&quot;hljs-attr&quot;&gt;toolbar&lt;/span&gt;: &lt;span class=&quot;hljs-string&quot;&gt;\'fontselect fontsizeselect link lineheight forecolor backcolor bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | image quicklink h2 h3 blockquote table numlist bullist preview fullscreen\'&lt;/span&gt;,\n              &lt;span class=&quot;hljs-comment&quot;&gt;// 图片上传三个参数，图片数据，成功时的回调函数，失败时的回调函数&lt;/span&gt;\n            &lt;span class=&quot;hljs-comment&quot;&gt;//   images_upload_handler: function(blobInfo, success, failure) {&lt;/span&gt;\n            &lt;span class=&quot;hljs-comment&quot;&gt;//     let formdata = new FormData();&lt;/span&gt;\n            &lt;span class=&quot;hljs-comment&quot;&gt;//     formdata.append(&quot;file&quot;, blobInfo.blob());&lt;/span&gt;\n            &lt;span class=&quot;hljs-comment&quot;&gt;//     // 上传图片接口，跟后端同事协调上传图片&lt;/span&gt;\n            &lt;span class=&quot;hljs-comment&quot;&gt;//     // http://hh.xxxx.cn/admin/upload为上传图片接口&lt;/span&gt;\n            &lt;span class=&quot;hljs-comment&quot;&gt;//     axios.post(\'http://hh.xxxx.cn/admin/upload\',formdata)&lt;/span&gt;\n            &lt;span class=&quot;hljs-comment&quot;&gt;//     .then(function(res) {&lt;/span&gt;\n            &lt;span class=&quot;hljs-comment&quot;&gt;//       success(res.data.data.src);&lt;/span&gt;\n            &lt;span class=&quot;hljs-comment&quot;&gt;//     }).catch(res =&amp;gt; {&lt;/span&gt;\n            &lt;span class=&quot;hljs-comment&quot;&gt;//        failure(&quot;error&quot;);&lt;/span&gt;\n            &lt;span class=&quot;hljs-comment&quot;&gt;//      });&lt;/span&gt;\n            &lt;span class=&quot;hljs-comment&quot;&gt;//   }&lt;/span&gt;\n          }\n'"></code></pre>
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'&amp;lt;template&amp;gt;\n  &amp;lt;div&amp;gt;\n    &amp;lt;WTinymce :content=&quot;content&quot;&amp;gt;&amp;lt;/WTinymce&amp;gt;\n  &amp;lt;/div&amp;gt;\n&amp;lt;/template&amp;gt;\n\n&amp;lt;script&amp;gt;\nexport default {\n  name: \'WTinymce\',\n  data() {\n    return {\n      content: \'\'\n    }\n  }\n}\n&amp;lt;/script&amp;gt;\n'"></code></pre>
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
