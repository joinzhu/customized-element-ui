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
<pre class="hljs language language-javascript" data-lang="javascript"><code v-html="'&amp;lt;template&amp;gt;\n  &amp;lt;div&amp;gt;\n    &amp;lt;WNavMenu\n      :routeItems=&quot;routeItems&quot;\n      :defaultActive=&quot;defaultActive&quot;\n      @select=&quot;handleSelect&quot;\n    &amp;gt;&amp;lt;/WNavMenu&amp;gt;\n  &amp;lt;/div&amp;gt;\n&amp;lt;/template&amp;gt;\n\n&amp;lt;script&amp;gt;\nexport default {\n  name: \'WNavMenuView\',\n  data() {\n    return {\n      defaultActive: \'\',\n      routeItems: [\n        {\n          path: \'rpaStore\',\n          name: \'rpaStore\',\n          meta: {\n            name: \'RPA Store\',\n            iconImg:\n              \'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png\',\n            iconImgActive:\n              \'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab6.png\'\n          },\n          component: { render: e =&amp;gt; e(\'router-view\') }\n        },\n        {\n          path: \'/\',\n          name: \'rpaControl\',\n          redirect: { name: \'run\' },\n          meta: {\n            hide: true,\n            name: \'机器人管理\',\n            iconImg:\n              \'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png\',\n            iconImgActive:\n              \'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab6.png\'\n          },\n          component: { render: e =&amp;gt; e(\'router-view\') },\n          children: [\n            {\n              path: \'run\',\n              name: \'run\',\n              meta: {\n                name: \'机器人运行\'\n              },\n              component: { render: e =&amp;gt; e(\'router-view\') }\n            },\n            {\n              path: \'plan\',\n              name: \'plan\',\n              meta: {\n                name: \'计划管理\'\n              },\n              component: { render: e =&amp;gt; e(\'router-view\') }\n            },\n            {\n              path: \'query\',\n              name: \'query\',\n              meta: {\n                name: \'运行查询\'\n              },\n              component: { render: e =&amp;gt; e(\'router-view\') }\n            },\n            {\n              path: \'myRobot\',\n              name: \'myRobot\',\n              meta: {\n                name: \'我的机器人\'\n              },\n              component: { render: e =&amp;gt; e(\'router-view\') }\n            }\n          ]\n        }\n      ]\n    }\n  },\n  methods: {\n    handleSelect(index, indexPath) {\n      console.warn(index, indexPath)\n    }\n  }\n}\n&amp;lt;/script&amp;gt;\n'"></code></pre>
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
