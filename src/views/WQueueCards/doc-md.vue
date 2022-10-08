<template>
<!-- eslint-disable -->
<div class="v-docs">
<div class="markdown-body"><h4>使用</h4>
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'&amp;lt;template&amp;gt;\n  &amp;lt;div&amp;gt;\n    &amp;lt;div :style=&quot;{ width: \'100%\', height: \'100vh\' }&quot;&amp;gt;\n      // cardWidth: 卡片的宽度\n      // cardHeight: 卡片的宽度\n      // cardDate: 数据\n      //\n      &amp;lt;WQueueCards cardWidth=&quot;200&quot; cardHeight=&quot;200&quot; :cardDate=&quot;cardList&quot; @resize=&quot;handleResize&quot;&amp;gt;\n        &amp;lt;template #default=&quot;{ row, $index }&quot;&amp;gt;\n          &amp;lt;div class=&quot;bg-blue-400&quot;&amp;gt;\n            &amp;lt;p&amp;gt;{{ row.title }}&amp;lt;/p&amp;gt;\n            &amp;lt;p&amp;gt;{{ row.des }}&amp;lt;/p&amp;gt;\n            &amp;lt;p&amp;gt;{{ row.txt }}&amp;lt;/p&amp;gt;\n          &amp;lt;/div&amp;gt;\n        &amp;lt;/template&amp;gt;\n      &amp;lt;/WQueueCards&amp;gt;\n    &amp;lt;/div&amp;gt;\n  &amp;lt;/div&amp;gt;\n&amp;lt;/template&amp;gt;\n\n&amp;lt;script&amp;gt;\nexport default {\n  name: \'WQueueCardsView\',\n  data() {\n    return {}\n  },\n  computed: {\n    cardList() {\n      let obj = {\n        title: \'预配舱单-上海\',\n        des: \'发送接口\',\n        txt: \'上海预配舱单原始数据发送接口。 为您提供\'\n      }\n      let arr = []\n      for (let i = 0; i &amp;lt; 30; i++) {\n        arr.push(obj)\n      }\n      return arr\n    }\n  },\n  methods: {\n    handleResize(pageSize) {\n      console.warn(\'pageSize\', pageSize)\n    }\n  }\n}\n&amp;lt;/script&amp;gt;\n'"></code></pre>
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
