<template>
  <div>
    <WTinymce :content="content" @tinymcechange="tinymcechange" :token="token" :base_url="base_url"></WTinymce>
    <div class="pt-20px">
      <doc></doc>
    </div>
  </div>
</template>

<script>
import doc from './doc.md'

export default {
  components: { doc },

  data() {
    return {
      content: '<p><strong>123</strong></p>',
      token:"",
      base_url:""
    }
  },
  mounted() {},
  methods:{
    tinymcechange(e){
      console.log(e)
    }
  }
}
</script>
