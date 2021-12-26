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
  width:678px;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 36px;
  .left{
    width: 4px;
    height: 24px;
    background: #1087E8;
    opacity: 1;
    border-radius: 2px;
    margin-right: 12px;
  }
  .right{
    height: 32px;
    font-size: 32px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    line-height: 32px;
    color: #333333;
    opacity: 1;
  }
}
</style>
