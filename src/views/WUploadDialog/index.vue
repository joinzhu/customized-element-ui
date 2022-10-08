<template>
  <div>
    <el-button @click="open">打开导入文件dialog</el-button>
    <WUploadDialog
      ref="refWUploadDialog"
      title="导入VGM"
      product="VGM"
      maxSize="3"
      :setupTxtArr="['2222222222', '333333333']"
      :fileTemplate="fileTemplate"
      action="http://192.168.60.120:31530/ccam/drafts/import"
      :headers="{
        token: 'pn_6796c697d4ef480b977da3270632dd32'
      }"
      successTxt="共导入201条数据，成功129条，失败1"
      errorTxt="我错了"
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
