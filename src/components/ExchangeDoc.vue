<template>
  <div class="exchangeDoc" @click="handleClick">
    <span class="txt">TL</span>
  </div>
</template>
<script>
export default {
  name: 'ExchangeDoc',
  methods: {
    handleClick() {
      location.href = 'https://joinzhu.github.io/customized-tools-set/'
    }
  }
}
</script>
<style lang="less" scoped>
.exchangeDoc {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #8bd3dd;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .txt {
    color: #00473e;
    font-size: 30px;
    font-weight: 600;
  }
}
</style>
