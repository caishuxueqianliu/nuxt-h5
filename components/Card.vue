<template>
    <div class="card">
    <div class="card-item">
      <span class="card-item-title">洗洁剂</span>
      <div> <span class="card-item-num">12</span><span class="card-item-title">桶</span> </div>
    </div>
      <div class="card-item">
        <span class="card-item-title">洗洁剂</span>
        <div> <span class="card-item-num">12</span><span class="card-item-title">桶</span> </div>
      </div>
      <div class="card-item">
        <span class="card-item-title">洗洁剂</span>
        <div> <span class="card-item-num">12</span><span class="card-item-title">桶</span> </div>
      </div>
      <div class="card-item">
        <span class="card-item-title">洗洁剂</span>
        <div> <span class="card-item-num">12</span><span class="card-item-title">桶</span> </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Card"
    }
</script>

<style lang="less" scoped>
.card{
  margin-bottom: 48px;
  height: 168px;
  background: #0A84FF;
  opacity: 1;
  border-radius: 12px;
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
      margin-top: 24px;
    }
    .card-item-num{
      height: 48px;
      font-size: 48px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      line-height: 67px;
      color: #FFFFFF;
      opacity: 1;

    }
    .card-item-title{
      height: 24px;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 67px;
      color: #FFFFFF;
      opacity: 1;
    }
  }
}
</style>
