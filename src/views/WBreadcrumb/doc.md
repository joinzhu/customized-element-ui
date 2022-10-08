#### 使用

| 参数名 | 作用       | 默认值 | 是否必须 |
| ------ | ---------- | ------ | -------- |
| data   | 面包屑数据 |        | yes      |

```javascript
<template>
  <div>
    <div class="pt-10px">
      <WBreadcrumb :data="list1"></WBreadcrumb> // data为,号分开的字符串
    </div>
    <div class="pt-10px">
      <WBreadcrumb :data="list2"></WBreadcrumb> // data为数组
    </div>
    <div class="pt-20px">
      <doc></doc>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WBreadcrumbView',
  data() {
    return {
      list1: '首页,数据发送数据发送数据发送数据发送数据发送数据发送,舱单,AMS',
      list2: [
        { txt: '首页', to: { path: '/a' } },
        {
          txt: '数据发送数据发送数据发送数据发送数据发送数据发送',
          to: { path: '/b' }
        },
        { txt: '舱单', to: { path: '/c' } },
        { txt: 'AMS', to: { path: '/d' } }
      ]
    }
  }
}
</script>
```
