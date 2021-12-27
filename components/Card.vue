<template>
    <div class="card">
    <div class="card-item" v-for='item in data' :key='item.dispatchType'>
      <span class="card-item-title">{{item.dispatchTypeStr || (item.productName.slice(-3) ) }}</span>
      <div> <span class="card-item-num">{{item.num}}</span><span class="card-item-title">

      {{item.productName ? '桶' : '次'}}</span> </div>
    </div>
<!--       <div class="card-item">
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
      </div> -->
    </div>
</template>

<script>
    export default {
        name: "Card",
        filters:{
          productNameFilter(name){
            const map = {
              '201B洗碗机专用浓缩清洁剂': '清洁剂',
                '302B洗碗机专用浓缩催干剂': '催干剂',
                  '格莱亚专用洗碗机除垢剂': '除垢剂'
            }
            return map(name)
          }

        },
        props:{
          data:{
            type: Array
          }
        },
        methods:{
                productNameFilter(name){
            const map = {
              '201B洗碗机专用浓缩清洁剂': '清洁剂',
                '302B洗碗机专用浓缩催干剂': '催干剂',
                  '格莱亚专用洗碗机除垢剂': '除垢剂'
            }
            return map(name)
          }

        }
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
