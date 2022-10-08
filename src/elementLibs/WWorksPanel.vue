<template>
  <div class="WWorksPanel">
    <slot name="header">
      <div class="baseLine">
        <div class="headerLeft">
          <img v-if="header.img" :src="header.img" class="headerImg" />
          <span v-html="header.txt" class="headerTxt"></span>
        </div>
        <div
          class="foldBtn"
          :class="{ isFlod: isFlod }"
          @click="exchangeContentBox"
        ></div>
      </div>
    </slot>

    <div class="contentBox" :class="{ isFlod: isFlod }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**
 * 功能模块框
 */
export default {
  name: 'WWorksPanel',
  props: {
    header: {
      type: Object,
      isRequire: true,
      default: () => ({
        txt: '',
        img: ''
      })
    }
  },
  data() {
    return {
      isFlod: false
    }
  },
  methods: {
    exchangeContentBox() {
      this.isFlod = !this.isFlod
    }
  }
}
</script>

<style lang="less" scoped>
.WWorksPanel {
  box-sizing: border-box;
  padding: 14px 24px;
  background-color: @theme-white;
  .baseLine {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .headerLeft {
      display: flex;
      align-items: center;
      .headerImg {
        width: 32px;
        height: 32px;
        margin-right: 16px;
      }
      .headerTxt {
        font-size: 18px;
        font-weight: 600;
      }
    }

    .foldBtn {
      width: 32px;
      height: 32px;
      cursor: pointer;
      border-radius: 4px;
      background-position: center;
      background-size: 15px;
      background-repeat: no-repeat;
      background-image: url('../assets/images/up.png');
      &.isFlod {
        background-image: url('../assets/images/down.png');
      }
      &:hover {
        background-color: #ecf4ff;
      }
    }
  }
  .contentBox {
    display: block;
    margin-top: 24px;
    &.isFlod {
      display: none;
    }
  }
}
</style>
