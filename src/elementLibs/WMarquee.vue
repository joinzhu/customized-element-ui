<template>
  <div class="WMarquee">
    <div class="container">
      <template>
        <slot name="default">
          <div
            v-if="typeOftext === '[object String]'"
            class="item"
            :class="{ showed: !needScroll }"
            v-html="text"
          ></div>
          <template v-else-if="typeOftext === '[object Array]'">
            <div
              v-for="(v, i) in text"
              :key="i"
              class="item"
              :class="{
                'slide-bck-top': i === active && needScroll,
                start: start && needScroll
              }"
              v-html="v"
            ></div>
          </template>
        </slot>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WMarquee',
  props: {
    text: {
      type: [String, Array],
      default: ''
    }
  },
  data() {
    return {
      active: 0,
      start: true
    }
  },
  computed: {
    typeOftext() {
      return Object.prototype.toString.call(this.text)
    },
    needScroll() {
      return this.typeOftext !== '[object String]' && this.text.length > 1
    }
  },
  mounted() {
    setTimeout(() => {
      this.start && (this.start = false)
    }, 6000)
    this.exchange()
  },
  methods: {
    exchange() {
      let { text } = this
      if (this.typeOftext === '[object String]' || text.length < 2) return
      setInterval(() => {
        let { active } = this
        this.active++
        if (active + 1 === text.length) {
          this.active = 0
        }
      }, 6000)
    }
  }
}
</script>

<style lang="less" scoped>
.WMarquee {
  width: 100%;
  background-color: @theme-blue-marquee;
  font-size: 14px;
  .container {
    padding: 0 49px;
    overflow: hidden;
    .item {
      box-sizing: border-box;
      margin: 0;
      padding: 9px 0;
      line-height: 1em;
      color: #4e5969;
      display: none;
      &.slide-bck-top {
        display: block;
        animation: slide-bck-top 6s cubic-bezier(0.47, 0, 0.745, 0.715) both;
        &.start {
          animation: slide-bck-top-start 6s cubic-bezier(0.47, 0, 0.745, 0.715)
            both;
        }
      }
      &.showed {
        display: block;
      }
    }
  }

  @keyframes slide-bck-top-start {
    0% {
      opacity: 1;
      transform: translateZ(0) translateY(0);
    }
    5% {
      opacity: 1;
      transform: translateZ(0) translateY(0);
    }
    0% {
      opacity: 1;
    }
    90% {
      opacity: 1;
      transform: translateZ(0) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateZ(-400px) translateY(-200px);
    }
  }

  @keyframes slide-bck-top {
    0% {
      opacity: 0;
      transform: translateZ(-400px) translateY(200px);
    }
    5% {
      opacity: 1;
      transform: translateZ(0) translateY(0);
    }
    0% {
      opacity: 1;
    }
    90% {
      opacity: 1;
      transform: translateZ(0) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateZ(-400px) translateY(-200px);
    }
  }
}
</style>
