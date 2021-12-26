<template>
<!--    <div class="test"/>-->
 <div class="container">
   <div class="head">
     <img class="head-img" src="../static/logo.png" alt=""/>
       <span class="head-title">服务报告</span>
   </div>

   <div class="storeInfo">
     <img class="storeInfo-img" src="../static/test.png" alt=""/>
     <span class="storeInfo-name">辣叁成烧菜火锅(武汉虎泉店)</span>
     <span class="storeInfo-address">南京市江宁区龙眠大道站14号义乌小商城店</span>
     <span class="storeInfo-time">2021-06 至 2021-07</span>
   </div>


   <div class="content">
     <TitleCell title="耗材数据统计"/>
     <span class="content-title">在选择的这些时间里。您总共领取了</span>
     <Card/>
     <Chart/>
   </div>

   <div class="content">
     <TitleCell title="耗材详细数据"/>
     <span class="content-title">在选择的这些时间里。您总共领取了</span>
     <van-collapse v-model="activeNames" accordion  title-class="collapse-title">
         <van-collapse-item title="9月份" name="1" class="collapse-item" >
           <span>洗洁剂：12桶</span>
           <span>洗洁剂：12桶</span>
           <span>洗洁剂：12桶</span>
         </van-collapse-item>
         <van-collapse-item title="10月份" name="2">
           <span>洗洁剂：12桶</span>
           <span>洗洁剂：12桶</span>
           <span>洗洁剂：12桶</span>
         </van-collapse-item>
         <van-collapse-item title="11月份" name="3" >
           <span>洗洁剂：12桶</span>
           <span>洗洁剂：12桶</span>
           <span>洗洁剂：12桶</span>
         </van-collapse-item>
       </van-collapse>
       <Card/>
   </div>


   <div class="content">
     <TitleCell title="服务数据统计"/>
     <span class="content-title">我们的维修师傅为您提供了12次上门服务</span>
     <Card/>
     <EchartsServer/>
   </div>
<!--   <van-button type="primary">2222</van-button>-->
<!--   {{ip}}-->
 </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      activeNames:[1]
    }
  },
    async asyncData({ $axios,query}) {
      const ip = await $axios.get(`http://101.35.251.32:8081/base/getRandomBooks`)
      console.log(query)
      return { ip }
    },
  components:{
    Echart: import('../components/Chart')
  },
  mounted() {
    console.log(222)
  }
}
</script>

<style lang="less">
  .container{

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 90px 36px;
    .head{
      /*width: 750px;*/
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      /*align-items: center;*/
      margin-bottom: 120px;
      .head-img{
        width: 245px;
        height: 90px;
        margin-right: 18px;
      }
      .head-title{
        width: 288px;
        height: 72px;
        font-size: 72px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        line-height: 87px;
        color: #00428D;
        opacity: 1;
      }
    }
    .storeInfo{
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 90px;
      .storeInfo-img{
        width: 140px;
        height: 140px;
        background: #FFFFFF;
        /*border: 1px solid #707070;*/
        border-radius: 50%;
        opacity: 1;
      }
      .storeInfo-name{
        height: 39px;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        line-height: 67px;
        color: #333333;
        opacity: 1;
        margin: 18px 0;
      }
      .storeInfo-address{
        height: 28px;
        font-size: 28px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 67px;
        color: #333333;
        opacity: 1;
        margin-bottom: 40px;
      }
      .storeInfo-time{
        text-align: center;
        width: 260px;
        height: 36px;
        background: #FA4901;
        opacity: 0.5;
        border-radius: 4px;
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
      }
    }
    .content{
      margin: 0 24px;
      .content-title{
        height: 28px;
        font-size: 28px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 67px;
        color: #333333;
        opacity: 1;
      }
      van-collapse {
        width: 630px;
        height: 336px;
        background: #F0FAFF;
        opacity: 1;
        border-radius: 12px;
        collapse-item {
          background: #F0FAFF;
        }
      }
      .collapse-title{
        height: 28px;
        font-size: 28px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        line-height: 67px;
        color: #0A84FF;
        opacity: 1;
      }
    }
  }
  .test{
    width: 375px;
    height:375px;
    display: inline-block;
    background-color: yellow;
  }
</style>
