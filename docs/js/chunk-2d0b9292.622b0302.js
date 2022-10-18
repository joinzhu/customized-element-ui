(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9292"],{3285:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n._self._c;return e("div",[e("div",[e("WNavMenu",{attrs:{routeItems:n.routeItems1,defaultActive:n.defaultActive},on:{select:n.handleSelect}}),e("doc1")],1),e("div",[e("WNavMenu",{attrs:{routeItems:n.routeItems2,defaultActive:n.defaultActive,"default-openeds":["rpaControl"]},on:{select:n.handleSelect}}),e("doc2")],1)])},a=[],m=function(){var n=this,e=n._self._c;return e("div",{staticClass:"v-docs"},[e("div",{staticClass:"markdown-body"},[e("h4",[n._v("使用")]),n._m(0),n._m(1),e("pre",{staticClass:"hljs language language-javascript",attrs:{"data-lang":"javascript"}},[e("code",{domProps:{innerHTML:n._s("&lt;template&gt;\n  &lt;div&gt;\n    &lt;WNavMenu\n      :routeItems=\"routeItems\"\n      :defaultActive=\"defaultActive\"\n      @select=\"handleSelect\"\n    &gt;&lt;/WNavMenu&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\nexport default {\n  name: 'WNavMenuView',\n  data() {\n    return {\n      defaultActive: '',\n      routeItems: [\n        {\n          path: 'page0',\n          name: 'page0',\n          component: { render: e =&gt; e('router-view') },\n          meta: {\n            name: '默认图标'\n          }\n        },\n        {\n          path: 'page1',\n          name: 'page1',\n          component: { render: e =&gt; e('router-view') },\n          meta: {\n            name: 'element图标',\n            icon: 'el-icon-s-tools'\n          }\n        },\n        {\n          path: 'page2',\n          name: 'page2',\n          component: { render: e =&gt; e('router-view') },\n          meta: {\n            name: '图片图标',\n            iconImg:\n              'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png'\n          }\n        },\n        {\n          path: 'page3',\n          name: 'page3',\n          component: { render: e =&gt; e('router-view') },\n          meta: {\n            name: '图片图标（可变选中图标）',\n            iconImg:\n              'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png',\n            iconImgActive:\n              'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab6.png'\n          }\n        },\n        {\n          path: 'page4',\n          name: 'page4',\n          component: { render: e =&gt; e('router-view') },\n          meta: {\n            name: 'iconfont图标',\n            icon: 'iconfont icon-jieguodaochu'\n          }\n        }\n      ]\n    }\n  },\n  methods: {\n    handleSelect(index, indexPath) {\n      console.warn(index, indexPath)\n    }\n  }\n}\n&lt;/script&gt;\n")}})])])])},r=[function(){var n=this,e=n._self._c;return e("table",[e("thead",[e("tr",[e("th",[n._v("参数名")]),e("th",[n._v("作用")]),e("th",[n._v("默认值")]),e("th",[n._v("是否必须")])])]),e("tbody",[e("tr",[e("td",[n._v("routeItems")]),e("td",[n._v("导航栏数据（格式与 vue-route 的格式相同，图标和标题配置在 meta 中）")]),e("td",[n._v("[]")]),e("td",[n._v("yes")])])])])},function(){var n=this,e=n._self._c;return e("p",[e("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/input"}},[n._v("https://element.eleme.cn/#/zh-CN/component/input")])])}],c={components:{},mixins:[]},i=c,s=t("2877"),u=Object(s["a"])(i,m,r,!1,null,null,null),p=u.exports,l=function(){var n=this,e=n._self._c;return e("div",{staticClass:"v-docs"},[e("div",{staticClass:"markdown-body"},[e("h4",[n._v("使用")]),n._m(0),n._m(1),e("pre",{staticClass:"hljs language language-javascript",attrs:{"data-lang":"javascript"}},[e("code",{domProps:{innerHTML:n._s("&lt;template&gt;\n  &lt;div&gt;\n    &lt;WNavMenu\n      :routeItems=\"routeItems\"\n      :defaultActive=\"defaultActive\"\n      @select=\"handleSelect\"\n    &gt;&lt;/WNavMenu&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\nexport default {\n  name: 'WNavMenuView',\n  data() {\n    return {\n      defaultActive: '',\n      routeItems: [\n        {\n          path: 'rpaStore',\n          name: 'rpaStore',\n          meta: {\n            name: 'RPA Store',\n            iconImg:\n              'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png',\n            iconImgActive:\n              'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab6.png'\n          },\n          component: { render: e =&gt; e('router-view') }\n        },\n        {\n          path: '/',\n          name: 'rpaControl',\n          redirect: { name: 'run' },\n          meta: {\n            hide: true,\n            name: '机器人管理',\n            iconImg:\n              'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png',\n            iconImgActive:\n              'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab6.png'\n          },\n          component: { render: e =&gt; e('router-view') },\n          children: [\n            {\n              path: 'run',\n              name: 'run',\n              meta: {\n                name: '机器人运行'\n              },\n              component: { render: e =&gt; e('router-view') }\n            },\n            {\n              path: 'plan',\n              name: 'plan',\n              meta: {\n                name: '计划管理'\n              },\n              component: { render: e =&gt; e('router-view') }\n            },\n            {\n              path: 'query',\n              name: 'query',\n              meta: {\n                name: '运行查询'\n              },\n              component: { render: e =&gt; e('router-view') }\n            },\n            {\n              path: 'myRobot',\n              name: 'myRobot',\n              meta: {\n                name: '我的机器人'\n              },\n              component: { render: e =&gt; e('router-view') }\n            }\n          ]\n        }\n      ]\n    }\n  },\n  methods: {\n    handleSelect(index, indexPath) {\n      console.warn(index, indexPath)\n    }\n  }\n}\n&lt;/script&gt;\n")}})])])])},h=[function(){var n=this,e=n._self._c;return e("table",[e("thead",[e("tr",[e("th",[n._v("参数名")]),e("th",[n._v("作用")]),e("th",[n._v("默认值")]),e("th",[n._v("是否必须")])])]),e("tbody",[e("tr",[e("td",[n._v("routeItems")]),e("td",[n._v("导航栏数据（格式与 vue-route 的格式相同，图标和标题配置在 meta 中）")]),e("td",[n._v("[]")]),e("td",[n._v("yes")])])])])},function(){var n=this,e=n._self._c;return e("p",[e("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/input"}},[n._v("https://element.eleme.cn/#/zh-CN/component/input")])])}],d={components:{},mixins:[]},v=d,g=Object(s["a"])(v,l,h,!1,null,null,null),_=g.exports,f={name:"WNavMenuView",components:{doc1:p,doc2:_},data(){return{defaultActive:"page3",routeItems1:[{path:"page0",name:"page0",component:{render:n=>n("router-view")},meta:{name:"默认图标"}},{path:"page1",name:"page1",component:{render:n=>n("router-view")},meta:{name:"element图标",icon:"el-icon-s-tools"}},{path:"page2",name:"page2",component:{render:n=>n("router-view")},meta:{name:"图片图标",iconImg:"https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png"}},{path:"page3",name:"page3",component:{render:n=>n("router-view")},meta:{name:"图片图标（可变选中图标）",iconImg:"https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png",iconImgActive:"https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab6.png"}},{path:"page4",name:"page4",component:{render:n=>n("router-view")},meta:{name:"iconfont图标",icon:"iconfont icon-jieguodaochu"}}],routeItems2:[{path:"rpaStore",name:"rpaStore",meta:{name:"RPA Store",iconImg:"https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png",iconImgActive:"https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab6.png"},component:{render:n=>n("router-view")}},{path:"/",name:"rpaControl",redirect:{name:"run"},meta:{hide:!0,name:"机器人管理",iconImg:"https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png",iconImgActive:"https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab6.png"},component:{render:n=>n("router-view")},children:[{path:"run",name:"run",meta:{name:"机器人运行"},component:{render:n=>n("router-view")}},{path:"plan",name:"plan",meta:{name:"计划管理"},component:{render:n=>n("router-view")}},{path:"query",name:"query",meta:{name:"运行查询"},component:{render:n=>n("router-view")}},{path:"myRobot",name:"myRobot",meta:{name:"我的机器人"},component:{render:n=>n("router-view")}}]}]}},methods:{handleSelect(n,e){console.warn(n,e)}}},b=f,w=Object(s["a"])(b,o,a,!1,null,"4619ea25",null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d0b9292.622b0302.js.map