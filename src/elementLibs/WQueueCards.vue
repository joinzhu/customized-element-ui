<template>
  <div
    class="WQueueCards"
    :style="{
      width: `calc(100% + ${xSpace}px)`,
      height: `calc(100% + ${ySpace}px)`
    }"
  >
    <div class="container" :key="pageSize">
      <div
        v-for="(v, i) in cardDate"
        :key="i"
        v-show="i < pageSize"
        class="card"
        :style="{
          width: `${cardWidth}px`,
          height: `${cardHeight}px`,
          padding: ` 0 ${xSpace}px ${ySpace}px 0`
        }"
      >
        <slot name="default" :row="v" :$index="i">
          <div>{{ i }}</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import elementResizeDetectorMaker from 'element-resize-detector'
/**
 * 卡片式队列
 */
export default {
  name: 'WQueueCards',
  props: {
    cardWidth: {
      type: [Number, String],
      default: 286
    },
    cardHeight: {
      type: [Number, String],
      default: 175
    },
    cardDate: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      xSpace: 32,
      ySpace: 32,
      pageSize: 0
    }
  },
  computed: {},
  mounted() {
    let erd = elementResizeDetectorMaker({
      strategy: 'scroll'
    })
    let timer = null
    erd.listenTo(document.querySelector('.WQueueCards'), ele => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        this.calcPageSize()
      }, 300)
    })

    // 注销监听
    this.$once('hook:beforeDestroy', () => {
      erd
    })
  },

  methods: {
    calcPageSize() {
      document.querySelector('.WQueueCards').parentElement.style.overflow =
        'hidden'
      let x = document.querySelector('.WQueueCards').clientWidth
      let y = document.querySelector('.WQueueCards').clientHeight
      let { cardWidth, cardHeight, xSpace, ySpace } = this
      let card_x = Number(cardWidth) + xSpace
      let card_y = Number(cardHeight) + ySpace
      let num_x = Math.floor(x / card_x)
      let num_y = Math.floor(y / card_y)
      // console.warn(x, y, card_x, card_y, num_x, num_y)
      let amount = num_x * num_y
      this.pageSize = amount
      this.$emit('resize', amount)
      return amount
    }
  }
}
</script>

<style lang="less" scoped>
.WQueueCards {
  .container {
    display: flex;
    flex-wrap: wrap;
    .card {
      box-sizing: content-box;
      & > div {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
