<template>
  <div id="app" class="bg-gray-200">
    <div class="doc-menu">
      <el-menu
        class="sticky top-20px"
        :default-active="active"
        @select="handleSelect"
      >
        <el-menu-item v-for="v in routeItems" :key="v.name" :index="v.name">
          <span slot="title">{{ v.meta.label }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="doc-content">
      <div class="doc-main">
        <router-view></router-view>
      </div>
    </div>
    <ExchangeDoc></ExchangeDoc>
  </div>
</template>
<script>
import { routeItems } from '@/router'
import ExchangeDoc from '@/components/ExchangeDoc.vue'
export default {
  name: 'App',
  components: { ExchangeDoc },
  data() {
    return {
      routeItems,
      active: 'WUploadDialog'
    }
  },
  mounted() {
    setTimeout(() => {
      this.active = this.$route.name
    }, 30)
  },
  methods: {
    handleSelect(name) {
      this.active = name
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="less">
@import '//at.alicdn.com/t/font_3131688_11u4oiyh929a.css';
#app {
  display: flex;
}
</style>
