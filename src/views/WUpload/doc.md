#### 使用

| 参数名   | 作用              | 默认值 | 是否必须 |
| -------- | ----------------- | ------ | -------- |
| 所有参数 | 与 el-upload 相同 |

| slot 插槽 | 作用         |
| --------- | ------------ |
| pending   | 未上传框内容 |
| success   | 上传成功内容 |
| error     | 上传失败内容 |

<https://element.eleme.cn/#/zh-CN/component/upload>

```javascript
<template>
  <div>
    <WUpload
      action="/services/ams/drafts/upload"  // 如果action不传，切auto-upload设置为false，则为手动上传模式
      :headers="{
        token: 'pn_99f146ecbec34166861a8b6cfad77dce'
      }"
      :on-success="handleSuccess"
      :on-error="handleError"
      successTxt="共导入201条数据，成功129条，失败1"
      errorTxt="我错了" // 不传则为接口返回的 msg 或 ''
    ></WUpload>
  </div>
</template>

<script>
export default {
  name: 'WUploadView',
  methods: {
    handleSuccess(...args) {
      console.warn(args)
    },
    handleError(...args) {
      console.warn(args)
    }
  }
}
</script>

```
