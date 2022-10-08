<template>
  <div>
    <WMarquee :text="text1"></WMarquee>
    <div class="mt-20px"><doc></doc></div>

    <div class="my-20px">
      <WMarquee :text="text2" :key="text2.length"></WMarquee>
    </div>
    <doc_sync></doc_sync>
  </div>
</template>

<script>
import doc from './doc.md'
import doc_sync from './doc_sync.md'
export default {
  name: 'WMarqueeView',
  components: { doc, doc_sync },
  data() {
    return {
      text1: [
        '<span class="w-blue">提示</span>：单张发票金额上限777元，超出金额将会被拆分多张发票',
        '提示：单张发票金额上限9999.99元，超出金额将会被拆分多张发票',
        '提示：单张发票金额上限8888元，超出金额将会被拆分多张发票'
      ],
      text2: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.text2 = ['1111', '2222', '33333', '4444', '5555']
    }, 1000)
  }
}
</script>

<style lang="less" scoped></style>
