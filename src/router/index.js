export const routeItems = [
  {
    path: 'WBase',
    name: 'WBase',
    meta: {
      label: '颜色、背景'
    },
    component: () => import('@/views/WBase')
  },
  {
    path: 'WButton',
    name: 'WButton',
    meta: {
      label: '按钮、文字链接'
    },
    component: () => import('@/views/WButton')
  },
  {
    path: 'WControl',
    name: 'WControl',
    meta: {
      label: '输入选择控件（input、select等）'
    },
    component: () => import('@/views/WControl')
  },
  {
    path: 'WOpen',
    name: 'WOpen',
    meta: {
      label: '弹框、气泡、抽屉'
    },
    component: () => import('@/views/WOpen')
  },
  {
    path: 'WNavMenu',
    name: 'WNavMenu',
    meta: {
      label: '左侧导航栏 - WNavMenu'
    },
    component: () => import('@/views/WNavMenu')
  },
  {
    path: 'WWorksPanel',
    name: 'WWorksPanel',
    meta: {
      label: '功能模块框 - WWorksPanel'
    },
    component: () => import('@/views/WWorksPanel')
  },
  {
    path: 'WBreadcrumb',
    name: 'WBreadcrumb',
    meta: {
      label: '面包屑 - WBreadcrumb'
    },
    component: () => import('@/views/WBreadcrumb')
  },
  {
    path: 'WUpload',
    name: 'WUpload',
    meta: {
      label: '上传 - WUpload'
    },
    component: () => import('@/views/WUpload')
  },
  {
    path: 'WUploadDialog',
    name: 'WUploadDialog',
    meta: {
      label: '上传VGM、舱单模版 - WUploadDialog'
    },
    component: () => import('@/views/WUploadDialog')
  },
  {
    path: 'WInput',
    name: 'WInput',
    meta: {
      label: '转大写输入框 - WInput'
    },
    component: () => import('@/views/WInput')
  },
  {
    path: 'WRemoteSelect',
    name: 'WRemoteSelect',
    meta: {
      label: '远程下拉框 - WRemoteSelect'
    },
    component: () => import('@/views/WRemoteSelect')
  },
  {
    path: 'WDatePicker',
    name: 'WDatePicker',
    meta: {
      label: '时间选择器 - WDatePicker'
    },
    component: () => import('@/views/WDatePicker')
  },
  {
    path: 'WMarquee',
    name: 'WMarquee',
    meta: {
      label: '跑马灯 - WMarquee'
    },
    component: () => import('@/views/WMarquee')
  },
  {
    path: 'WTable',
    name: 'WTable',
    meta: {
      label: '表格 - WTable'
    },
    component: () => import('@/views/WTable')
  },
  {
    path: 'WPagination',
    name: 'WPagination',
    meta: {
      label: '分页器'
    },
    component: () => import('@/views/WPagination')
  },
  {
    path: 'WFormCreator',
    name: 'WFormCreator',
    meta: {
      label: 'form表单生成器 - WFormCreator'
    },
    component: () => import('@/views/WFormCreator')
  },
  {
    path: 'WTinymce',
    name: 'WTinymce',
    meta: {
      label: '富文本 - WTinymce'
    },
    component: () => import('@/views/WTinymce')
  },
  {
    path: 'WSticky',
    name: 'WSticky',
    meta: {
      label: '粘性 - WSticky'
    },
    component: () => import('@/views/WSticky')
  },
  {
    path: 'WQueueCards',
    name: 'WQueueCards',
    meta: {
      label: '卡片式队列 - WQueueCards'
    },
    component: () => import('@/views/WQueueCards')
  }
]

export default [
  {
    path: '/',
    redirect: { name: 'WBase' },
    component: { render: e => e('router-view') },
    children: routeItems
  },
  {
    path: '*',
    redirect: { name: 'WBase' }
  }
]
