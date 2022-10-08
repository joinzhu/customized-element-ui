<template>
  <div>
    <el-upload
      v-if="uploadOpts"
      ref="refElUpload"
      class="w-upload"
      v-bind="[uploadOpts]"
      v-on="$listeners"
      :on-success="onSuccess"
      :on-error="onError"
      :on-change="onChange"
      :show-file-list="!handUpload"
    >
      <div class="drag-area">
        <template v-if="state === 'pending'">
          <slot name="pending">
            <img
              class="m-auto"
              width="48px"
              height="48px"
              :src="`${oss_url}/icon-upload.png`"
            />
            <div class="pt-24px pb-16px w-c3">点击或拖拽到此处上传</div>
            <div class="w-c6 font-400">支持{{ acceptTxt }}格式</div>
          </slot>
        </template>
        <template v-else-if="state === 'success'">
          <slot name="success">
            <img
              class="m-auto"
              width="48px"
              height="48px"
              :src="`${oss_url}/icon-success.png`"
            />
            <div class="pt-24px pb-8px w-c3">
              {{ successEnd.filaName }} 上传成功
            </div>
            <div v-if="successTxt" class="w-c6 font-400">{{ successTxt }}</div>
          </slot>
        </template>
        <template v-else-if="state === 'error'">
          <slot name="error">
            <img
              class="m-auto"
              width="48px"
              height="48px"
              :src="`${oss_url}/icon-error.png`"
            />
            <div class="pt-24px pb-8px w-c3">
              {{ errorEnd.filaName }} 上传失败
            </div>
            <div class="w-c6 font-400 pb-16px">
              原因: {{ errorTxt || errorEnd.reason }}
            </div>
            <div class="w-blue">重新上传</div>
          </slot>
        </template>
      </div>
    </el-upload>
    <ul v-if="handUpload" class="diyFileList">
      <li v-for="(v, i) in diyFileList" :key="i">
        <div @click="onPreview(v)" class="fileItem">
          <span><i class="el-icon-document"></i>{{ v.name }}</span>
          <span class="fileItem-icon">
            <i class="w-green-1 el-icon-circle-check"></i>
            <i class="el-icon-close" @click.stop.prevent="onRemove(v, i)"></i>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { oss_url } from '@/utils/common'
import { cloneDeep, isEqual } from 'lodash'
import { Message } from 'element-ui'
/**
 * 上传
 */
export default {
  name: 'WUpload',
  props: {
    successTxt: {
      type: String,
      default: ''
    },
    errorTxt: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      oss_url,
      state: 'pending',
      // 成功的结果
      successEnd: {
        filaName: ''
      },
      // 失败的结果
      errorEnd: {
        filaName: '',
        reason: ''
      },
      uploadOpts: null,
      handUpload: false
    }
  },
  computed: {
    diyFileList() {
      return this.uploadOpts.fileList
    },
    acceptTxt() {
      let { accept } = this.uploadOpts
      return accept.replace(/,\./g, '、').substring(1)
    }
  },
  watch: {
    $attrs: {
      handler(newVal, oldVal) {
        // 如果配置没有改变且配置存在，则不生成新配置
        if (isEqual(newVal, oldVal) && this.uploadOpts) return
        this.createUploadOpts()
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    createUploadOpts() {
      let attrs = cloneDeep(this.$attrs)
      let { autoUpload, action } = attrs
      /**
       * 关闭自动上传 且 不设置上传地址，则视为组件使用者自主上传
       * 并设置file-list替代默认的
       */
      if (!autoUpload && !action) {
        this.handUpload = true
        attrs.fileList = []
      }
      // 删除事件参数，为了封装事件
      Reflect.deleteProperty(attrs, 'on-success')
      Reflect.deleteProperty(attrs, 'on-error')
      Reflect.deleteProperty(attrs, 'on-change')
      this.uploadOpts = {
        drag: true,
        multiple: false,
        accept: '.xls,.xlsx',
        action: '',
        ...attrs
      }
    },
    // 重写el-upload的on-success
    async onSuccess(...args) {
      if (
        Object.prototype.toString.call(this.$attrs['on-success']) ===
        '[object Function]'
      ) {
        this.$attrs['on-success'](...args)
      }
      this.state = 'success'
    },
    // 重写el-upload的on-error
    onError(err, file, fileList) {
      if (
        Object.prototype.toString.call(this.$attrs['on-error']) ===
        '[object Function]'
      ) {
        let errObj = JSON.parse(err.message)
        // 默认设置失败原因
        this.errorEnd.reason = errObj?.msg || ''
        this.$attrs['on-error'](errObj, file, fileList)
      }
      this.state = 'error'
    },
    async onChange(file, fileList) {
      // 未开启手动上传
      if (!this.handUpload) {
        Object.prototype.toString.call(this.$attrs['on-change']) ===
          '[object Function]' && this.$attrs['on-change'](file, fileList)
        return
      }
      // 手动上传
      this.fnHandUpload(file, fileList)
    },
    fnHandUpload(file, fileList) {
      console.warn(file)
      let { name } = file
      let currentFilr = null
      let { fileList: list, accept } = this.uploadOpts
      // 是否存在相同文件名
      let hasSame = list.some(v => {
        return v.name === name
      })
      // 是否是规定文件类型
      let suffix = name.match(/.*\.(.+)$/)[1]
      let inAccept = accept.indexOf(suffix) !== -1

      if (hasSame) {
        // 存在相同名字的文件
        Message.warning('请不要上传相同名字的文件')
      } else if (!inAccept) {
        // 不符合文件类型
        Message.warning(`请上传${accept}文件`)
      } else {
        currentFilr = file
        list.push(file)
        this.uploadOpts.fileList = list
      }
      this.$attrs['on-change'](currentFilr, list)
    },
    onPreview(file) {
      if (
        Object.prototype.toString.call(this.$attrs['on-preview']) ===
        '[object Function]'
      ) {
        this.$attrs['on-preview'](file)
      }
    },
    onRemove(file, i) {
      this.uploadOpts.fileList.splice(i, 1)
      if (
        Object.prototype.toString.call(this.$attrs['on-remove']) ===
        '[object Function]'
      ) {
        this.$attrs['on-remove'](file, this.uploadOpts.fileList)
      }
    },
    reset() {
      Object.assign(this.$data, this.$options.data())
    },
    clearFiles() {
      this.$refs.refElUpload.clearFiles()
    },
    submit() {
      this.$refs.refElUpload.submit()
    },
    abort(file) {
      this.$refs.refElUpload.abort(file)
    }
  }
}
</script>

<style lang="less" scoped>
.pt-24px {
  padding-top: 24px;
}
.pb-24px {
  padding-bottom: 24px;
}
.pb-16px {
  padding-bottom: 16px;
}
::v-deep.w-upload {
  .el-upload--text {
    width: 100%;
    line-height: 1.1em;
    .el-upload-dragger {
      width: inherit;
      height: fit-content;
      .drag-area {
        box-sizing: border-box;
        padding: 24px 0 24px;
      }
    }
  }
}
.diyFileList {
  list-style: none;
  padding: 0;
  margin: 0;
}

.fileItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0 4px;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);

  .el-icon-document {
    font-size: 14px;
    margin-right: 7px;
  }

  .fileItem-icon {
    position: relative;
    width: 14px;
    height: 14px;
  }

  .el-icon-circle-check,
  .el-icon-close {
    position: absolute;
    font-size: 14px;
  }

  .el-icon-close {
    display: none;
  }

  &:hover {
    background-color: #f5f7fa;
    .el-icon-circle-check {
      display: none;
    }
    .el-icon-close {
      display: inline-block;
    }
  }
}
</style>
