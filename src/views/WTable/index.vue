<template>
  <div>
    <WTable :WTableOpts="WTableOpts" @selection-change="handleSelect">
      <template #sex="{ row, $index }">
        <span :class="row.sex === 'male' ? 'text-blue-500' : 'text-red-500'">{{
          row.sex === 'male' ? '男' : '女'
        }}</span>
      </template>
      <template #age="{ row }"> {{ row.age }} 岁 </template>
      <template #ageHeader="{ column, $index }"> 年龄（岁）</template>
      <template #operation="{ row }">
        <el-button type="text" @click="handleClick(row)">淦</el-button>
      </template>
      <!-- <template #empty>无数据空态插槽</template> -->
    </WTable>
    <div class="pt-20px">
      <doc></doc>
    </div>
  </div>
</template>

<script>
import WTable from '@/elementLibs/WTable.vue'
import doc from './doc.md'
export default {
  name: 'WTableView',
  components: { WTable, doc },
  data() {
    return {
      WTableOpts: {
        data: [
          {
            name: '菜菜',
            sex: 'male',
            age: 18,
            like: ['下棋', '洗脚']
          },
          {
            name: '鸭鸭',
            sex: 'female',
            age: 19,
            like: ['下棋', '洗脚', '麻将']
          }
        ],
        // tableAttrs: {
        //   emptyTxt: '空态文字'
        //   // emptyImg: ''
        // },
        tableColAttrs: [
          { type: 'selection' },
          {
            prop: 'name',
            label: '姓名',
            'min-width': '100px'
          },
          { prop: '', label: '性别', slotName: 'sex' },
          { prop: '', label: '年龄', slotName: 'age' },
          {
            prop: 'like',
            label: '爱好',
            render: ({ like }) => like.join('、')
          },
          {
            prop: '',
            label: '操作',
            width: '165px',
            slotName: 'operation',
            fixed: 'right'
          }
        ]
      }
    }
  },
  methods: {
    handleClick(row) {
      alert('AAA的值是' + row.aaa)
    },
    handleSelect(rows) {
      console.warn('handleSelect', rows)
    }
  }
}
</script>

<style lang="less" scoped></style>
