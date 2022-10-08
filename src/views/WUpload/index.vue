<template>
  <div>
    <WUpload
      action="//gateway.dev.eline56-inc.com/services/apps/dataSend/cps/import"
      :headers="{
        token: 'pn_6796c697d4ef480b977da3270632dd32'
      }"
      accept=".xls,.xlse,.png"
      :auto-upload="true"

      :on-success="handleSuccess"
      :on-error="handleError"
      successTxt="共导入201条数据，成功129条，失败1"
      errorTxt="我错了"
    ></WUpload>
    <doc class="mt-20px"></doc>
  </div>
</template>

<script>
import doc from './doc.md'
export default {
  name: 'WUploadView',
  components: { doc },
  methods: {
    handleSuccess(...args) {
      console.warn(args)
    },
    handleError(...args) {
      console.warn(args)
    },
    handleChange(file, fileList) {
      console.warn('handleChange', file, fileList)
    }
  }
}
</script>

<style lang="less" scoped></style>
