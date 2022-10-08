#### 使用

| 参数名     | 作用                                                                | 默认值 | 是否必须 |
| ---------- | ------------------------------------------------------------------- | ------ | -------- |
| routeItems | 导航栏数据（格式与 vue-route 的格式相同，图标和标题配置在 meta 中） | []     | yes      |

<https://element.eleme.cn/#/zh-CN/component/input>

```javascript
<template>
  <div>
    <WNavMenu
      :routeItems="routeItems"
      :defaultActive="defaultActive"
      @select="handleSelect"
    ></WNavMenu>
  </div>
</template>

<script>
export default {
  name: 'WNavMenuView',
  data() {
    return {
      defaultActive: '',
      routeItems: [
        {
          path: 'page0',
          name: 'page0',
          component: { render: e => e('router-view') },
          meta: {
            name: '默认图标'
          }
        },
        {
          path: 'page1',
          name: 'page1',
          component: { render: e => e('router-view') },
          meta: {
            name: 'element图标',
            icon: 'el-icon-s-tools'
          }
        },
        {
          path: 'page2',
          name: 'page2',
          component: { render: e => e('router-view') },
          meta: {
            name: '图片图标',
            iconImg:
              'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png'
          }
        },
        {
          path: 'page3',
          name: 'page3',
          component: { render: e => e('router-view') },
          meta: {
            name: '图片图标（可变选中图标）',
            iconImg:
              'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png',
            iconImgActive:
              'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab6.png'
          }
        },
        {
          path: 'page4',
          name: 'page4',
          component: { render: e => e('router-view') },
          meta: {
            name: 'iconfont图标',
            icon: 'iconfont icon-jieguodaochu'
          }
        }
      ]
    }
  },
  methods: {
    handleSelect(index, indexPath) {
      console.warn(index, indexPath)
    }
  }
}
</script>
```
