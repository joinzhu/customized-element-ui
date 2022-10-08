#### 使用

| 参数名       | 作用           | 默认值                | 是否必须 |
| ------------ | -------------- | --------------------- | -------- |
| product      | 产品名 如：VGM | ''                    | yes      |
| fileTemplate | 模版文件       | {name:'', url:''}     | no       |
| 其他参数     |                | 与 el-upload 参数相同 |

<https://element.eleme.cn/#/zh-CN/component/upload>

```javascript
<template>
  <div>
    <el-button @click="open">打开导入文件dialog</el-button>
    <WUploadDialog
      ref="refWUploadDialog"
      title="导入VGM"
      product="VGM"
      maxSize="3"  // 文件最大：默认 5
      :setupTxtArr="['2222222222', '333333333']" // 默认 ['第二步：填入下载的{{ product }}模版信息，按模版', '第三步：上传已填写完整的模版']
      :fileTemplate="fileTemplate"
      action="/services/ams/drafts/upload"
      :headers="{
        token: 'pn_99f146ecbec34166861a8b6cfad77dce'
      }"
      successTxt="共导入201条数据，成功129条，失败1" // 默认为'',上传成功后会展示该文字
      errorTxt="我错了" // 默认为'',上传失败后会展示该文字
      :on-success="handleSuccess"
      :on-error="handleError"
    ></WUploadDialog>
    <div class="pt-20px">
      <doc></doc>
    </div>
  </div>
</template>
<script>
import doc from './doc.md'
export default {
  name: 'WUploadDialogView',
  components: { doc },
  data() {
    return {
      fileTemplate: {
        name: 'VGM模版.xlsx',
        url: 'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/template/VGM%E6%95%B0%E6%8D%AE%E6%A8%A1%E6%9D%BF.xlsx'
      }
    }
  },
  methods: {
    handleSuccess(response, file, fileList) {
      console.warn('WUploadDialogView', response, file, fileList)
    },
    handleError(err, file, fileList) {
      console.warn('WUploadDialogView', err, file, fileList)
    },
    async open() {
      let flag = await this.$refs.refWUploadDialog.open()
      console.warn(flag)
    }
  }
}
</script>

<style lang="less"></style>

```
