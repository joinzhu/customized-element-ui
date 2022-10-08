<template>
  <div>
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
    <div>
      <doc></doc>
    </div>
  </div>
</template>

<script>
import doc from './doc.md'
export default {
  name: 'WPagination',
  components: { doc },
  data() {
    return {
      activeNames: ['1', '2', '3', '4', '5', '6', '7'],
      currentPage4: 4
    }
  },
  methods: {
    handleChange() {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="less" scoped></style>
