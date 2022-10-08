<template>
  <div>
    <editor
      :api-key="apiKey"
      :init="editConfig"
      :value="content"
      @input="tinymcechange"
    />
    <!-- <div v-html="content"></div> -->
  </div>
</template>

<script>
/**
 * WTinymce
 * @desc    富文本
 */
import Editor from '@tinymce/tinymce-vue'
import axios from 'axios'

export default {
  name: 'WTinymce',
  components: {
    editor: Editor
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    token: {
      type: String,
      default: ''
    },
    base_url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      apiKey: 'hbwpq4uvkrruhpwgtwzyx7dfvrdq7dbstwh01wrtfuznfoi8', //key值从官网注册申请来的
      editConfig: {
        height: 500, //富文本高度
        language_url: '', //中文包
        language: 'zh_CN', //中文
        browser_spellcheck: true, // 拼写检查
        branding: false, // 去水印
        elementpath: true, //禁用编辑器底部的状态栏
        statusbar: true, // 隐藏编辑器底部的状态栏
        paste_data_images: true, // 是否允许粘贴图像
        menubar: true, // 隐藏最上方menu
        cleanup: false,
        fontsize_formats:
          '12px 14px 16px 18px 20px 24px 26px 28px 30px 32px 36px', //字体大小
        font_formats:
          '微软雅黑=Microsoft YaHei,Helvetica Neue;PingFang SC;sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun;serifsans-serif;Terminal=terminal;monaco;Times New Roman=times new roman;times', //字体
        file_picker_types: 'image',
        images_upload_credentials: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount codesample'
        ],
        toolbar:
          'fontselect fontsizeselect link lineheight forecolor backcolor bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | image quicklink h2 h3 blockquote table numlist bullist preview fullscreen',
        // images_upload_url:'/services/rpastore/upload/uploadAd',
        // 图片上传三个参数，图片数据，成功时的回调函数，失败时的回调函数
        images_upload_handler: (blobInfo, success, failure) => {
          let formdata = new FormData()
          formdata.append('file', blobInfo.blob())
          // 上传图片接口，跟后端同事协调上传图片
          // http://hh.xxxx.cn/admin/upload为上传图片接口
          axios
            .post(
              `${this.base_url}/services/rpastore/upload/uploadTextImg`,
              formdata,
              {
                headers: {
                  token: this.token
                }
              }
            )
            .then(function (res) {
              const data = res.data.data
              if (data) {
                const str = data.substring(0, 4)
                if (str == 'http') {
                  success(res.data.data)
                } else {
                  success('https://' + res.data.data)
                }
              }
            })
            .catch(res => {
              failure('error')
            })
        }
      }
    }
  },

  mounted() {},
  methods: {
    tinymcechange(e) {
      this.$emit('tinymcechange', e)
    }
  }
}
</script>

<style lang="less" scoped></style>
