<template>
  <div>
    <div>
      <div>
        <span class="label">type=</span>
        <el-button>button</el-button>
        <el-button disabled>button</el-button>
        <el-button type="caicai">caicai</el-button>
        <el-button type="caicai" disabled>caicai</el-button>
        <el-button type="primary">primary</el-button>
        <el-button type="primary" disabled>button</el-button>
        <el-button type="success">success</el-button>
        <el-button type="info">info</el-button>
        <el-button type="danger">danger</el-button>
        <el-button type="warning">warning</el-button>
        <el-button type="primary" plain>primary plain</el-button>
        <el-button type="text">text</el-button>
        <el-button type="primary" icon="iconfont icon-fasong"
          >primary</el-button
        >
        <el-button type="primary" icon="el-icon-delete">primary</el-button>
      </div>
      <div class="pt-10px">
        <span class="label">size=</span>
        <el-button>default</el-button>
        <el-button size="medium">medium</el-button>
        <el-button size="big">big</el-button>
      </div>

      <div class="pt-10px">
        <el-link type="primary" class="mr-10px">primary</el-link>
        <el-link type="success" class="mr-10px">success</el-link>
        <el-link type="warning" class="mr-10px">warning</el-link>
        <el-link type="danger" class="mr-10px">danger</el-link>
        <el-link type="info" class="mr-10px">info</el-link>
      </div>
    </div>
    <div>
      <doc></doc>
    </div>
  </div>
</template>

<script>
import doc from './doc.md'
export default {
  name: 'WControl',
  components: { doc }
}
</script>

<style lang="less" scoped></style>
