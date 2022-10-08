<template>
<!-- eslint-disable -->
<div class="v-docs">
<div class="markdown-body"><h4>使用</h4>
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'&amp;lt;template&amp;gt;\n  &amp;lt;div&amp;gt;\n    // 异步的情况下需要设置key\n    &amp;lt;WMarquee :text=&quot;text&quot; :key=&quot;text.length&quot;&amp;gt;&amp;lt;/WMarquee&amp;gt;\n    &amp;lt;doc&amp;gt;&amp;lt;/doc&amp;gt;\n  &amp;lt;/div&amp;gt;\n&amp;lt;/template&amp;gt;\n\n&amp;lt;script&amp;gt;\nimport doc from \'./doc.md\'\nexport default {\n  name: \'WMarqueeView\',\n  components: { doc },\n  data() {\n    return {\n      text: []\n    }\n  },\n  mounted() {\n    setTimeout(() =&amp;gt; {\n      this.text = [\'1111\', \'2222\', \'33333\', \'4444\', \'5555\']\n    }, 3000)\n  }\n}\n&amp;lt;/script&amp;gt;\n\n&amp;lt;style lang=&quot;less&quot; scoped&amp;gt;&amp;lt;/style&amp;gt;\n\n'"></code></pre>
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
