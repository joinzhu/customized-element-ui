<template>
  <div>
    <div>
      <WNavMenu
        :routeItems="routeItems1"
        :defaultActive="defaultActive"
        @select="handleSelect"
      ></WNavMenu>
      <doc1></doc1>
    </div>
    <div>
      <WNavMenu
        :routeItems="routeItems2"
        :defaultActive="defaultActive"
        :default-openeds="['rpaControl']"
        @select="handleSelect"
      ></WNavMenu>
      <doc2></doc2>
    </div>
  </div>
</template>

<script>
import doc1 from './doc1.md'
import doc2 from './doc2.md'
export default {
  name: 'WNavMenuView',
  components: { doc1, doc2 },
  data() {
    return {
      defaultActive: 'page3',

      routeItems1: [
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
      ],
      routeItems2: [
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

<style lang="less" scoped></style>
