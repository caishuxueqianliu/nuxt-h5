<template>
<div class="cell">
  <span class="left"/>
  <span class="right">{{title}}</span>
</div>
</template>

<script>
    export default {
        name: "titleCell",
      props:{
          title:{
            type:String
          }
      }
    }
</script>

<style lang="less" scoped>
.cell{
  width:339px;
  height: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 18px;
  .left{
    width: 2px;
    height: 12px;
    background: #1087E8;
    opacity: 1;
    border-radius: 1px;
    margin-right: 6px;
  }
  .right{
    height: 16px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    line-height: 16px;
    color: #333333;
    opacity: 1;
  }
}
</style>
