<template>
    <div class="card">
      <div :key='item.dispatchType' class="card-item" v-for='item in dd'>
        <span class="card-item-title">{{item.dispatchTypeStr || (item.productName.slice(-3) )}}</span>
        <div><span class="card-item-num">{{item.num}}</span><span class="card-item-title">
      {{item.productName ? '桶' : '次'}}</span></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Card",
      props: {
        data: {
          type: Array
        }
      },
      computed: {
        dd() {
          return this.data
        }
      },
      methods: {}
    }
</script>

<style lang="less" scoped>
.card{
  margin-bottom: 24px;
  height: 84px;
  background: #0A84FF;
  opacity: 1;
  border-radius: 6px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  .card-item{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    div{
      margin-top: 12px;
    }
    .card-item-num{
      height: 24px;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      line-height: 33px;
      color: #FFFFFF;
      opacity: 1;

    }
    .card-item-title{
      height: 12px;
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 33px;
      color: #FFFFFF;
      opacity: 1;
    }
  }
}
</style>
