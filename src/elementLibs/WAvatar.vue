<template>
  <el-image
    class="w-avatar"
    style="{width: `${width}px`, height: `${height}px`}"
    :src="src || errorSrc"
  >
    <slot name="error">
      <div slot="error">
        <img :width="width" :height="height" :src="errorSrc" />
      </div>
    </slot>
  </el-image>
</template>

<script>
export default {
  name: 'WAvatar',
  props: {
    width: {
      type: [String, Number],
      default: 32,
    },
    height: {
      type: [String, Number],
      default: 32,
    },
    src: {
      type: String,
      default: '',
    },
    errorSrc: {
      type: String,
      default:
        'https://uifox-public.oss-cn-hangzhou.aliyuncs.com/common/market_v2/user/info/userImg.png',
    },
  },
}
</script>

<style lang="less" scoped>
.w-avatar {
  border-radius: 50%;
  text-align: center;
  margin-right: 4px;
  margin-top: -1px;

  & > span {
    color: white;
    font-size: 24px;
  }
}
</style>
