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
<td>routeItems</td>
<td>导航栏数据（格式与 vue-route 的格式相同，图标和标题配置在 meta 中）</td>
<td>[]</td>
<td>yes</td>
</tr>
</tbody>
</table>
<p><a href="https://element.eleme.cn/#/zh-CN/component/input">https://element.eleme.cn/#/zh-CN/component/input</a></p>
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'&amp;lt;template&amp;gt;\n  &amp;lt;div&amp;gt;\n    &amp;lt;WNavMenu\n      :routeItems=&quot;routeItems&quot;\n      :defaultActive=&quot;defaultActive&quot;\n      @select=&quot;handleSelect&quot;\n    &amp;gt;&amp;lt;/WNavMenu&amp;gt;\n  &amp;lt;/div&amp;gt;\n&amp;lt;/template&amp;gt;\n\n&amp;lt;script&amp;gt;\nexport default {\n  name: \'WNavMenuView\',\n  data() {\n    return {\n      defaultActive: \'\',\n      routeItems: [\n        {\n          path: \'page0\',\n          name: \'page0\',\n          component: { render: e =&amp;gt; e(\'router-view\') },\n          meta: {\n            name: \'默认图标\'\n          }\n        },\n        {\n          path: \'page1\',\n          name: \'page1\',\n          component: { render: e =&amp;gt; e(\'router-view\') },\n          meta: {\n            name: \'element图标\',\n            icon: \'el-icon-s-tools\'\n          }\n        },\n        {\n          path: \'page2\',\n          name: \'page2\',\n          component: { render: e =&amp;gt; e(\'router-view\') },\n          meta: {\n            name: \'图片图标\',\n            iconImg:\n              \'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png\'\n          }\n        },\n        {\n          path: \'page3\',\n          name: \'page3\',\n          component: { render: e =&amp;gt; e(\'router-view\') },\n          meta: {\n            name: \'图片图标（可变选中图标）\',\n            iconImg:\n              \'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png\',\n            iconImgActive:\n              \'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab6.png\'\n          }\n        },\n        {\n          path: \'page4\',\n          name: \'page4\',\n          component: { render: e =&amp;gt; e(\'router-view\') },\n          meta: {\n            name: \'iconfont图标\',\n            icon: \'iconfont icon-jieguodaochu\'\n          }\n        }\n      ]\n    }\n  },\n  methods: {\n    handleSelect(index, indexPath) {\n      console.warn(index, indexPath)\n    }\n  }\n}\n&amp;lt;/script&amp;gt;\n'"></code></pre>
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
