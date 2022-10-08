<template>
  <div class="w-menu">
    <template v-for="v in list">
      <el-menu-item
        v-if="!Array.isArray(v.children)"
        :key="v.name"
        :index="v.name"
      >
        <i v-if="v.meta.icon" class="w-menu-icon" :class="v.meta.icon"></i>
        <img
          v-else-if="v.meta.iconImg"
          class="w-menu-icon"
          :src="
            activeName === v.name
              ? v.meta.iconImgActive || v.meta.iconImg
              : v.meta.iconImg
          "
        />
        <i v-else class="w-menu-icon"></i>
        <span slot="title">{{ v.meta.name }}</span>
      </el-menu-item>
      <el-submenu v-else :index="v.name" :key="v.name">
        <template slot="title">
          <div class="submenu-title-box">
            <i v-if="v.meta.icon" class="w-menu-icon" :class="v.meta.icon"></i>
            <img
              v-else-if="v.meta.iconImg"
              class="w-menu-icon"
              :src="
                activeName === v.name
                  ? v.meta.iconImgActive || v.meta.iconImg
                  : v.meta.iconImg
              "
            />
            <span>{{ v.meta.name }}</span>
          </div>
        </template>
        <WSubMenu :list="v.children" :activeName="activeName"></WSubMenu>
      </el-submenu>
    </template>
  </div>
</template>

<script>
/**
 * 根据路由配置生成的子导航
 */
export default {
  name: 'WSubMenu',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    activeName: String
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="less">
.w-menu {
  overflow: hidden;
  .w-menu-icon {
    display: inline-block;
    width: 16px;
    margin-right: 8px;
  }
}
</style>
