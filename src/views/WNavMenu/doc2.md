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
          path: 'rpaStore',
          name: 'rpaStore',
          meta: {
            name: 'RPA Store',
            iconImg:
              'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png',
            iconImgActive:
              'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab6.png'
          },
          component: { render: e => e('router-view') }
        },
        {
          path: '/',
          name: 'rpaControl',
          redirect: { name: 'run' },
          meta: {
            hide: true,
            name: '机器人管理',
            iconImg:
              'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab1.png',
            iconImgActive:
              'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/home/home-send-tab6.png'
          },
          component: { render: e => e('router-view') },
          children: [
            {
              path: 'run',
              name: 'run',
              meta: {
                name: '机器人运行'
              },
              component: { render: e => e('router-view') }
            },
            {
              path: 'plan',
              name: 'plan',
              meta: {
                name: '计划管理'
              },
              component: { render: e => e('router-view') }
            },
            {
              path: 'query',
              name: 'query',
              meta: {
                name: '运行查询'
              },
              component: { render: e => e('router-view') }
            },
            {
              path: 'myRobot',
              name: 'myRobot',
              meta: {
                name: '我的机器人'
              },
              component: { render: e => e('router-view') }
            }
          ]
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
