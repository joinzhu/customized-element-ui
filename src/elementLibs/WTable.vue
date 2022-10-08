<template>
  <div class="w-el-table">
    <el-table
      ref="refTable"
      :data="tableDataList"
      v-bind="tableAttrs"
      v-on.native="$listeners"
    >
      <template v-for="(colConfig, index) in tableColAttrs">
        <template v-if="colConfig.isShow !== false">
          <!-- 是否使用自定义slot -->
          <el-table-column
            :key="index"
            v-if="colConfig.slotName"
            align="left"
            v-bind="colConfig"
          >
            <template #header="{ column, $index }">
              <slot
                :name="colConfig.slotName + 'Header'"
                :column="column"
                :$index="$index"
              >
                {{ colConfig.label }}
              </slot>
            </template>
            <template #default="{ row, column, $index }">
              <slot
                :name="colConfig.slotName"
                :row="row"
                :column="column"
                :$index="$index"
              ></slot>
            </template>
          </el-table-column>
          <!-- 是否多选 -->
          <el-table-column
            v-else-if="colConfig.selection"
            :key="index"
            type="selection"
            align="center"
            width="55"
            :selectable="colConfig.selectable"
          >
          </el-table-column>
          <!-- 是否使用动态组件 -->
          <component
            v-else-if="colConfig.component"
            :key="index"
            :is="colConfig.component"
            :table-father="father"
            :col-config="colConfig"
          />
          <!-- 需要单独处理table-column数据时的函数 -->
          <el-table-column
            v-else-if="colConfig.render"
            :key="index"
            v-bind="colConfig"
          >
            <template slot-scope="scope">
              <span>{{ colConfig.render(scope.row) }}</span>
            </template>
          </el-table-column>
          <!-- 简单排序-->
          <el-table-column
            v-else-if="colConfig.sortable"
            :key="index"
            v-bind="colConfig"
          />
          <!-- 简单的table-column-->
          <el-table-column v-else :key="index" v-bind="colConfig" />
        </template>
      </template>

      <template #empty>
        <div class="text-center pt-110px pb-70px">
          <slot name="empty">
            <img class="m-auto" width="150" :src="emptyImg" />
            <p class="fs18 lh18 w-c3 pt-16px">{{ emptyTxt }}</p>
          </slot>
        </div>
      </template>
    </el-table>
  </div>
</template>

<script>
import { oss_url } from '@/utils/common'
import cloneDeep from 'lodash/cloneDeep'
/**
 * 表格
 */
export default {
  name: 'WTable',
  props: {
    // table所有配置
    WTableOpts: {
      type: Object,
      default: () => ({
        data: [], // table数据
        tableAttrs: {}, // Table组件的配置参数，接收所有element组件属性，
        tableColAttrs: [] // Table-column组件的配置参数，接收所有element组件属性
      })
    }
  },
  data() {
    return {
      oss_url
    }
  },
  computed: {
    tableDataList() {
      return this.WTableOpts.data
    },
    // 表格配置 Table Attributes
    tableAttrs() {
      if (!this.WTableOpts.tableAttrs) return { border: true }
      let attrs = cloneDeep(this.WTableOpts.tableAttrs)
      Reflect.deleteProperty(attrs, 'emptyTxt')
      Reflect.deleteProperty(attrs, 'emptyImg')
      return { border: true, ...attrs }
    },
    emptyTxt() {
      return this.WTableOpts.tableAttrs?.emptyTxt || '暂无数据'
    },
    emptyImg() {
      return (
        this.WTableOpts.tableAttrs?.emptyImg || `${oss_url}/table-empty.png`
      )
    },

    // 表格列配置 Table-column Attributes
    tableColAttrs() {
      return this.setSortTableCols(this.WTableOpts.tableColAttrs)
    },
    // 插入动态组件时，获取组件所在页面的vue实例（this）
    father() {
      return this.$parent.$parent
    }
  },

  methods: {
    getRef() {
      return this.$refs.refTable
    },
    // 设置排序后的列表
    setSortTableCols(newValue) {
      let arr = cloneDeep(newValue)
      if (newValue.every(i => i.isShow !== undefined)) {
        arr.sort(function (a, b) {
          return a.dragIdx - b.dragIdx
        })
      }
      return arr
    }
  }
}
</script>
<style lang="less" scoped>
::v-deep.w-el-table {
  .el-table();
  p {
    padding: 0;
    margin: 0;
  }
  .fs18 {
    font-size: 18px;
  }
  .lh18 {
    line-height: 18px;
  }
  .text-center {
    text-align: center;
  }
  .pt-110px {
    padding-top: 110px;
  }
  .pb-70px {
    padding-bottom: 70px;
  }
  .pt-16px {
    padding-top: 16px;
  }
}
</style>
