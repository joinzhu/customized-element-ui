<template>
  <el-dialog
    class="WUploadDialog w-el-dialog font-500"
    :title="localTitle"
    width="720px"
    :close-on-click-modal="false"
    :visible.sync="visible"
    @closed="handleClosed"
  >
    <slot name="step">
      <div class="w-c3 lh-1em" v-if="fileTemplate.url">
        <div>
          第一步：下载
          <a
            class="w-blue alink"
            :href="`${fileTemplate.url}?time=${new Date().getTime()}`"
            target="_blank"
          >
            {{ fileTemplate.name }}
          </a>
        </div>
        <template v-if="setupTxtArr.length > 0">
          <div class="mt-16px" v-for="(txt, i) in setupTxtArr" :key="i">
            {{ txt }}
          </div>
        </template>
        <template v-else>
          <div class="mt-16px">
            第二步：填入下载的{{ product }}模版信息，按模版
          </div>
          <div class="mt-16px">第三步：上传已填写完整的模版</div>
        </template>
      </div>
    </slot>

    <slot name="default">
      <WUpload
        ref="refWUpload"
        class="mt-16px"
        v-bind="[uploadOpts]"
        v-on="$listeners"
      ></WUpload>
    </slot>
    <slot name="footer">
      <div slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
      </div>
    </slot>
  </el-dialog>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'

/**
 * 上传文件dialog弹框
 */
export default {
  name: 'WUploadDialog',
  props: {
    title: String,
    product: {
      type: String,
      required: true
    },
    fileTemplate: {
      type: Object,
      default: () => ({
        name: '',
        url: ''
      })
    },
    setupTxtArr: {
      type: Array,
      default: () => []
    },
    maxSize: {
      type: [Number, String],
      default: 5
    }
  },
  data() {
    return {
      visible: false,
      localResolve: null
    }
  },
  computed: {
    localTitle() {
      let { title, product } = this
      return title || '导入' + product
    },
    uploadOpts() {
      let attrs = cloneDeep(this.$attrs)
      return {
        ['before-upload']: this.beforeUpload,
        ...attrs
      }
    }
  },
  methods: {
    open() {
      return new Promise(resolve => {
        this.localResolve = resolve
        this.visible = true
      })
    },
    close() {
      this.visible = false
    },
    beforeUpload(file) {
      let { maxSize } = this
      if (file.size > 1024 * 1024 * maxSize) {
        this.$message.warning(`附件不能大于${maxSize}M`)
        return false
      }
    },
    // 默认点击确定会调
    handleConfirm() {
      this.localResolve('confirm')
      this.localResolve = null
      this.visible = false
    },
    // dialog关闭后
    handleClosed() {
      this.localResolve && this.localResolve('cancel')
      this.$refs.refWUpload.reset()
      Object.assign(this.$data, this.$options.data())
    },
    clearFiles() {
      this.$refs.refWUpload.clearFiles()
    },
    submit() {
      this.$refs.refWUpload.submit()
    },
    abort(file) {
      this.$refs.refWUpload.abort(file)
    }
  }
}
</script>

<style lang="less" scoped>
::v-deep.w-el-dialog {
  .el-dialog();
}
::v-deep.WUploadDialog {
  .el-upload--text {
    width: 100%;
    .el-upload-dragger {
      width: inherit;
      height: fit-content;
      .drag-area {
        box-sizing: border-box;
        padding: 40px 0 32px;
      }
    }
  }
}
.mt-16px {
  margin-top: 16px;
}
</style>
