<template>
  <div class="WSubMenu">
    <div class="WSubMenuContainer" :class="isCollapse">
      <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        :default-active="defaultActiveName"
        v-bind="attrs"
        v-on="listeners"
        @select="handleSelect"
      >
        <div class="collapseBtn">
          <div class="left-right" @click="isCollapse = !isCollapse">
            <img v-show="isCollapse" src="@/assets/images/zuo.png" />
            <img v-show="!isCollapse" src="@/assets/images/you.png" />
          </div>
        </div>
        <WSubMenu :list="routeItems" :activeName="activeName"></WSubMenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { oss_url } from '@/utils/common'
import WSubMenu from './WSubMenu.vue'
/**
 * 根据路由配置生成的导航栏
 */
export default {
  name: 'WNavMenu',
  components: { WSubMenu },
  props: {
    defaultActive: {
      type: [String, Number]
    },
    routeItems: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      oss_url,
      activeName: '', //
      isCollapse: false //
    }
  },
  computed: {
    defaultActiveName() {
      return (
        this.defaultActive ||
        this.$route.meta.parentRouteName ||
        this.$route.name
      )
    },
    listeners() {
      let { select, ...others } = this.$listeners
      return others
    },
    attrs() {
      let obj = this.$attrs
      return { 'unique-opened': true, ...obj }
    }
  },
  watch: {
    defaultActive: {
      immediate: true,
      handler(newVal) {
        this.activeName = newVal
      }
    }
  },
  methods: {
    handleSelect(index, indexPath) {
      this.activeName = index
      this.$emit('select', index, indexPath)
    }
  }
}
</script>

<style scoped lang="less">
::v-deep.WSubMenu {
  max-width: 200px;
  width: fit-content;
  border-radius: 4px;
  overflow: hidden;
  background-color: white;
  .WSubMenuContainer {
    width: fit-content;
    .collapseBtn {
      width: 100%;
      padding: 8px 16px;
      margin-bottom: 16px;
      line-height: 0;
      border-bottom: 1px solid #dedede;
      background-color: white;
      box-sizing: border-box;
      .left-right {
        width: 32px;
        height: 32px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .left-right:hover {
        background: #ecf4ff;
        cursor: pointer;
      }
      img {
        width: 14.7px;
      }
    }
    box-sizing: border-box;
  }

  .el-menu {
    border: none;
    min-height: 400px;
    .el-submenu {
      .submenu-title-box {
        padding-left: 4px;
      }
    }
    &.el-menu--collapse {
      .w-menu-icon {
        transform: translateX(4px);
      }
      .el-submenu__title {
        .submenu-title-box {
          padding-left: 0px;
          span {
            display: none;
          }
        }
        .el-submenu__icon-arrow {
          display: none;
        }
      }
    }

    .el-menu-item {
      height: 48px;
      line-height: 48px;
      border-radius: 4px;
      color: #333333;
      margin: 8px 16px;
      padding: 0 8px !important;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;

      span {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        width: 130px;
        text-overflow: ellipsis;
      }
    }

    .el-menu-item.is-active {
      background: #ecf4ff;
      font-weight: 600;
    }
    .el-tooltip {
      padding: 0 !important;
      margin-left: 4px;
      .el-icon-location {
        margin: 0;
      }
    }
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
