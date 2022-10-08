<template>
  <div class="WBase">
    <div class="jigsaw-box">
      <div>
        <div class="title-1 pl-40px pt-40px">Color</div>
      </div>
      <div class="jigsaw">
        <span class="w-blue-1"><i>w-blue-1</i></span>
        <span class="w-blue-2"><i>w-blue-2</i></span>
        <span class="w-blue-3"><i>w-blue-3</i></span>
        <span class="w-cyan-1"><i>w-cyan-1</i></span>
        <span class="w-cyan-2"><i>w-cyan-2</i></span>
        <span class="w-green-1"><i>w-green-1</i></span>
        <span class="w-green-2"><i>w-green-2</i></span>
        <span class="w-green-3"><i>w-green-3</i></span>
        <span class="w-red-1"><i>w-red-1</i></span>
        <span class="w-red-2"><i>w-red-2</i></span>
        <span class="w-red-3"><i>w-red-3</i></span>
        <span class="w-yellow-1"><i>w-yellow-1</i></span>
        <span class="w-yellow-2"><i>w-yellow-2</i></span>
        <span class="w-red-money"><i>w-red-money</i></span>
        <span class="w-black"><i>w-black</i></span>
        <span class="w-grey-1"><i>w-grey-1</i></span>
        <span class="w-grey-2"><i>w-grey-2</i></span>
        <span class="w-grey-3"><i>w-grey-3</i></span>
        <span class="w-grey-4"><i>w-grey-4</i></span>
        <span class="w-grey-5"><i>w-grey-5</i></span>
        <span class="w-grey-6"><i>w-grey-6</i></span>
        <span class="w-grey-7"><i>w-grey-7</i></span>
        <span class="w-grey-8"><i>w-grey-8</i></span>
        <span class="w-white"><i>w-white</i></span>
      </div>
    </div>

    <div class="jigsaw-box">
      <div>
        <div class="title-1 pl-40px pt-40px">
          <span class="text-4xl">Background-Color</span>
        </div>
        <div></div>
      </div>
      <div class="jigsaw">
        <span class="bg-blue-1"><i>bg-blue-1</i></span>
        <span class="bg-blue-2"><i>bg-blue-2</i></span>
        <span class="bg-blue-3"><i>bg-blue-3</i></span>
        <span class="bg-cyan-1"><i>bg-cyan-1</i></span>
        <span class="bg-cyan-2"><i>bg-cyan-2</i></span>
        <span class="bg-green-1"><i>bg-green-1</i></span>
        <span class="bg-green-2"><i>bg-green-2</i></span>
        <span class="bg-green-3"><i>bg-green-3</i></span>
        <span class="bg-red-1"><i>bg-red-1</i></span>
        <span class="bg-red-2"><i>bg-red-2</i></span>
        <span class="bg-red-3"><i>bg-red-3</i></span>
        <span class="bg-yellow-1"><i>bg-yellow-1</i></span>
        <span class="bg-yellow-2"><i>bg-yellow-2</i></span>
        <span class="bg-red-money"><i>bg-red-money</i></span>
        <span class="bg-black"><i>bg-black</i></span>
        <span class="bg-grey-1"><i>bg-grey-1</i></span>
        <span class="bg-grey-2"><i>bg-grey-2</i></span>
        <span class="bg-grey-3"><i>bg-grey-3</i></span>
        <span class="bg-grey-4"><i>bg-grey-4</i></span>
        <span class="bg-grey-5"><i>bg-grey-5</i></span>
        <span class="bg-grey-6"><i>bg-grey-6</i></span>
        <span class="bg-grey-7"><i>bg-grey-7</i></span>
        <span class="bg-grey-8"><i>bg-grey-8</i></span>
        <span class="bg-white"><i>bg-white</i></span>
      </div>
    </div>

    <div class="mt-30px">
      <doc></doc>
    </div>
  </div>
</template>

<script>
import doc from './doc.md'
export default {
  name: 'WBase',
  components: { doc }
}
</script>

<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_3319184_06tsfu25d5o4.css');

.bgColorBox {
  span {
    display: inline-block;
    margin-left: 10px;
    width: 80px;
  }
}
.label {
  display: inline-block;
  background: #333;
  color: #fff;
  margin-right: 16px;
  padding: 0px 4px;
  border-radius: 10px;
}

span i {
  font-style: normal;
  text-shadow: 1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
}
</style>
