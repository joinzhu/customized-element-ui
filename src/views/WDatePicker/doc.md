#### 使用

| 参数名   | 作用         | 默认值                     | 是否必须 |
| -------- | ------------ | -------------------------- | -------- |
| v-model  | 时间范围的值 | []                         | yes      |
| 其他参数 |              | 与 el-date-picker 参数相同 |

<https://element.eleme.cn/#/zh-CN/component/date-picker>

```javascript
<template>
  <div>
    <WDatePicker v-model="date"></WDatePicker>
    <span class="pl-20px">当前date的值： {{ date[0] }} - {{ date[1] }}</span>
  </div>
</template>

<script>
export default {
  name: 'WDatePickerView',
  data() {
    return {
      date: []
    }
  }
}
</script>



```
