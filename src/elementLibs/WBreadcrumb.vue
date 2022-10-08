<template>
  <el-breadcrumb class="WBreadcrumb" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item 
      v-for="(v, i) in list" 
      :key="i" 
      :to="Object.prototype.toString.call(v.to)==='[object Object]'? v.to : false">
      <span 
        :class="{'is-fn': Object.prototype.toString.call(v.toFn) === '[object Function]'}" 
        @click="handleClick(v.toFn)">
          {{ v.txt }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
/**
 * 面包屑
 */
export default {
  name: 'WBreadcrumb',
  props: {
    data: {
      type: [String, Array],
      default: () => [],
      required: true
    }
  },
  computed: {
    list() {
      let { data } = this
      if (typeof data === 'string') {
        return data.split(',').map(v => ({ txt: v }))
      }
      return data
    }
  },
  methods: {
    handleClick(fn){
      if(Object.prototype.toString.call(fn) === '[object Function]'){
        fn()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.WBreadcrumb {
  ::v-deep&.el-breadcrumb {
    .el-breadcrumb__item {
      .el-breadcrumb__inner {
        display: inline-block;
        color: #666;
        max-width: 168px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &.is-link {
          font-weight: 400;
          &:hover {
            color: @theme-blue-1;
          }
        }
        .is-fn{
          font-weight: 400;
          cursor: pointer;
          &:hover {
            color: @theme-blue-1;
          }
        }
      }
      &[aria-current='page'] {
        .el-breadcrumb__inner {
          color: #333;
          &.is-link {
            font-weight: 400;
          }
        }
      }
      .el-breadcrumb__separator {
        color: #666;
        &[class*='icon'] {
          margin: 0 2px;
          transform: translateY(-1px);
        }
      }
    }
  }
}
</style>
