<template>
  <div>
    <div>
      <el-button type="primary" @click="showMessage">弹出message</el-button>
      <el-button type="primary" @click="showMessageBox"
        >弹出messageBox</el-button
      >
      <el-button type="primary" @click="showDialog">弹出dialog</el-button>
      <el-tooltip
        content="top center"
        placement="top"
        effect="light"
        :hide-after="0"
        :value="tooltipVisible"
      >
        <el-button>Light</el-button>
      </el-tooltip>

      <el-tooltip
        content="top center"
        placement="top"
        effect="dark"
        :hide-after="0"
        :value="tooltipVisible"
      >
        <el-button>dark</el-button>
      </el-tooltip>
    </div>

    <el-dialog title="提示" :visible.sync="visible" width="720px">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <div>
      <doc></doc>
    </div>
  </div>
</template>

<script>
import doc from './doc.md'
export default {
  name: 'WOpen',
  components: { doc },
  data() {
    return {
      visible: false,
      tooltipVisible: true
    }
  },
  methods: {
    showMessage() {
      this.$message({
        type: 'success',
        message: '数据删除成功！',
        duration: 0
      })
    },
    showMessageBox() {
      // const h = this.$createElement
      // this.$msgbox({
      //   title: '消息',
      //   message: h('p', null, [
      //     h('span', null, '内容可以是 '),
      //     h('i', { style: 'color: teal' }, 'VNode')
      //   ]),
      //   showCancelButton: true,
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消'
      // })
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      })
    },
    showDialog() {
      this.visible = true
    }
  }
}
</script>

<style lang="less" scoped></style>
