<template>
  <div>
    <div class="pt-10px">
      <WBreadcrumb :data="list1"></WBreadcrumb>
    </div>
    <div class="pt-10px">
      <WBreadcrumb :data="list2"></WBreadcrumb>
    </div>
    <div class="pt-20px">
      <doc></doc>
    </div>
  </div>
</template>

<script>
import doc from './doc.md'
export default {
  name: 'WBreadcrumbView',
  components: { doc },
  data() {
    return {
      list1: '首页,数据发送数据发送数据发送数据发送数据发送数据发送,舱单,AMS',
      list2: [
        { txt: '首页', toFn: this.toHome },
        {
          txt: '数据发送数据发送数据发送数据发送数据发送数据发送',
          to: { path: '/b' }
        },
        { txt: '舱单', to: { path: '/c' } },
        { txt: 'AMS', to: { path: '/d' } }
      ]
    }
  },
  methods:{
    toHome(){
      console.warn();
    }
  }
}
</script>

<style lang="less" scoped></style>
