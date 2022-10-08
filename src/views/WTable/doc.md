#### 使用

| 参数名        | 作用                               | 默认值                                      | 是否必须 |
| ------------- | ---------------------------------- | ------------------------------------------- | -------- |
| WTableOpts    | WTable 的参数(具体见下面的例子)    |                                             | true     |
| data          | 表格的数据与 el-table 的 data 一样 | []                                          |
| tableAttrs    | 表格参数                           | 与 el-table 的 Table Attributes 一样        |
| tableColAttrs | 列参数                             | 与 el-table 的 Table-column Attributes 一样 |

<https://element.eleme.cn/#/zh-CN/component/table>

```javascript
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
    <doc></doc>
  </div>
</template>

<script>
export default {
  name: 'WTableView',
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
        tableAttrs: {
          emptyTxt: '空态文字'
          // emptyImg: ''
        },
        tableColAttrs: [
          { type: 'selection' },
          { prop: 'name', label: '姓名', 'min-width': '100px' },
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
```
