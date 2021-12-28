<template>
  <div>
    <img alt="" hidden id='exportImg' src="">
    <a hidden href="" id="exportImgLink"></a>
    <van-button :disabled="pdfDisabled" @click='getPdfDownLoad("服务报告")' class="btn" size="mini"
                style="z-index:999;position: fixed;top: 10px" type="primary">
      下载PDF
    </van-button>
    <van-button :disabled="imgDisabled" @click='getImgDownLoad("服务报告")' size="mini"
                style="z-index:999;position: fixed;right: 10px;top: 10px" type="primary">
      下载图片
    </van-button>
    <div id="container">
      <div class="head">
        <img class="head-img" src="../static/logo.png" alt=""/>
        <span class="head-title">服务报告</span>
      </div>

      <div class="storeInfo">
        <img class="storeInfo-img" src="../static/test.png" alt=""/>
        <span class="storeInfo-name">{{data.userStore.name}}</span>
        <span class="storeInfo-address">{{data.userStore.address}}</span>
        <span class="storeInfo-time">{{startDate}} 至 {{endDate}}</span>
   </div>


   <div class="content">
     <TitleCell title="耗材数据统计"/>
     <span class="content-title">在选择的这些时间里。您总共领取了</span>
     <Card :data='data.lotionTotalData'/>
     <Chart :lotionTimeLatitudeTotalData="data.lotionTimeLatitudeTotalData"/>
   </div>

   <div class="content">
     <TitleCell title="耗材详细数据"/>
     <span class="content-title">在选择的这些时间里。您总共领取了</span>
     <van-collapse v-model="activeNames" title-class="collapse-title">
       <van-collapse-item :key="item.timeAxis" :name="item.index" :title="item.timeAxis"
                          class="collapse-item" v-for='(item,index) in data.lotionTimeLatitudeData'>
           <span v-for='item1 in item.childLotionReportDetail' :key='item1.productName'>
           {{item1.productName.slice(-3)}} x{{item1.num}}
         </span>
       </van-collapse-item>
     </van-collapse>


   </div>


   <div class="content">
     <TitleCell title="服务数据统计"/>
     <span class="content-title">我们的维修师傅为您提供了12次上门服务</span>
     <Card :data='data.workOrderTotalData'/>
     <EchartsServer :workOrderTimeLatitudeTotalData='data.workOrderTimeLatitudeTotalData'/>

     <div
       class='img-list'>
       <!--              <van-image-->
       <!--                v-for="(item,index) in data.userStoreReportImgUrls"-->
       <!--                :key="index"-->
       <!--                width="70"-->
       <!--                height="70"-->
       <!--                :src="item.replace(';','')"-->
       <!--                @click="preview(item.replace(';',''))"/>-->
       <img
         v-for="(item,index) in data.userStoreReportImgUrls"
         :key="index"
         :src="item.replace(';','')"
         @click="preview(item.replace(';',''))"/>

     </div>

       <span class='title'>我们为您解决了以下问题</span>


     <van-cell :key="index" :title="item.faultDesc || item" is-link
               v-for="(item,index) in data.userStoreReportFaultDesc"/>


<!--       <div class='btn'>-->
<!--        <van-button size='mini' icon='arrow' round icon-position='right'>-->
<!--         更多-->
<!--       </van-button>-->
<!--       </div>-->

   </div>

   <div class="content">
     <p class='span-blue-title'>根据数据统计</p>
     <p class='span-blue-text'>平均10分钟之内师傅接单，20分钟联系客户，
大部分维修单，3小时之内上门解决</p>
      <p class='span-blue-text'>您选择的这款洗碗机
共有120家品牌餐饮店在使用如下案例：</p>

   <img class='cooperation'
        src='../static/cooperation.png'
   ></img>
   <p class='span-black-text'>
一定是特别的缘分，您的客户经理，
2021-10-20第一次相识，共拜访您 <b>54</b>次
  </p>

  <p class='span-black-text'>
    这是您在小格厨房的 第 <b>22</b>天
  </p>


  <div class='link'>
      <a href="">我们将持续为您</a>
    <a href="">提供优质的服务</a>
      <a href="">最后感想您的理解与支持</a>
  </div>

   </div>


<div class='content'>
  <div class='foot'>
     <img class="logo" src="../static/logo.png" alt=""/>
    <img  class='code' src="../static/code.png">
    <div class='foot-right'>
     <span class='p1'>想随时随地看报告?</span>
     <span class='p1'>想对比历史机器使用效率吗？</span>
     <span class='p2'>小格厨房APP，24小时为您服务~</span>
     <div class='tags'>
       <van-tag color="#CCCCCC" >报修</van-tag>
       <van-tag color="#CCCCCC" >历史数据对比</van-tag>
       <van-tag color="#CCCCCC" >领取耗材</van-tag>
     </div>
    </div>
  </div>

</div>


 </div>
  </div>
</template>

<script>
  import {api} from './api.js'
  import {ImagePreview, Toast} from 'vant'
export default {
  name: 'IndexPage',
  data() {
    return {
      imgDisabled: false,
      pdfDisabled: false,
      activeNames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },

  async asyncData({$axios, query}) {
    // const {data} = await $axios.post('http://192.168.0.238:7080/sale/api/store/reportForm', query)
    // const obj = data.data
    // return {data: obj}
    const {startDate = '2021-01-01', endDate = '2021-12-31'} = query
    const {data} = await api()
    return {data, startDate, endDate}

  },
  async mounted() {

  },
  methods: {
    preview(item) {
      ImagePreview([item]);
    },
    getImgDownLoad(title) {
      this.imgDisabled = true
      this.getImg(title).then(() => {
        Toast.success('下载图片成功');
        this.imgDisabled = false
      }).catch(() => {
        Toast.fail('下载图片失败');
        this.pdfDisabled = false
      })
    },
    getPdfDownLoad(title) {
      this.pdfDisabled = true
      this.getPdf(title).then(() => {
        Toast.success('下载PDF成功');
        this.pdfDisabled = false
      }).catch(() => {
        Toast.fail('下载PDF失败');
        this.pdfDisabled = false
      })
    }
  }
}
</script>

<style lang="less">
  .btn {
    right: 70px;
  }

  #container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 45px 18px;

    .head {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      /*align-items: center;*/
      margin-bottom: 60px;
      .head-img{
        width: 122px;
        height: 45px;
        margin-right: 9px;
      }
      .head-title{
        width: 144px;
        height: 36px;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        line-height: 43px;
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
      margin-bottom: 45px;
      .storeInfo-img{
        width: 70px;
        height: 70px;
        background: #FFFFFF;
        /*border: 1px solid #707070;*/
        border-radius: 50%;
        opacity: 1;
      }
      .storeInfo-name{
        height: 20px;
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        line-height: 33px;
        color: #333333;
        opacity: 1;
        margin: 9px 0;
      }
      .storeInfo-address {
        text-align: center;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 20px;
        color: #333333;
        opacity: 1;

      }
      .storeInfo-time {
        text-align: center;
        width: 160px;
        height: 18px;
        background: #FA4901;
        opacity: 0.5;
        border-radius: 2px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
      }
    }
    .content{
      width:100%;
      background: #FFFFFF;
      box-shadow: 0px 6px 12px rgba(10, 132, 255, 0.1);
      opacity: 1;
      border-radius: 6px;
      padding: 0 12px;
      margin-bottom:18px;
      .content-title{
        height: 14px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 33px;
        color: #333333;
        opacity: 1;
      }
      .collapse-title{
        height: 14px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        line-height: 33px;
        color: #0A84FF;
        opacity: 1;
      }
      .img-list{
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 24px;

        .van-image {
          margin-right: 14px;
          margin-bottom: 10px;
        }

        img {
          margin-right: 14px;
          margin-bottom: 10px;
          width: 70px;
          height: 70px;
        }
      }
      .title{
        width: 176px;
        height: 16px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        line-height: 33px;
        color: #333333;
        opacity: 1;
      }
      .btn{
        margin:20px;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      .span-blue-title{
        width: 96px;
        height: 16px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        line-height: 18px;
        color: #0A84FF;
        opacity: 1;

      }
      .span-blue-text{
        height: 32px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 18px;
        color: #0A84FF;
        opacity: 1;
      }
      .cooperation{
        width:100%;
      }
      .span-black-text{
        width: 300px;
        height: 46px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 29px;
        color: #333333;
        opacity: 1;
        margin-bottom:10px;
        b{
          font-size:20px;
        }
      }
      .link{
        display:flex;
        flex-flow:column nowrap;
        justify-content:center;
        align-items:flex-start;
           a{
              font-size: 15px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              line-height: 18px;
              color: #0A84FF;
              opacity: 1;
              text-decoration: underline;
              margin-bottom:10px;
      }
      }
      .foot{
        height: 85px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        .logo{
          width:50px;
          height:20px;

        }
        .code{
          width:60px;
          height:60px;

        }
        .foot-right{

          display:flex;
          flex-flow:column nowrap;
          justify-content:space-around;
          align-items:flex-start;
          .p1{
            font-size: 10px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            line-height: 12px;
            color: #333333;
            opacity: 1;
            margin-top:3px;
          }
          .p2{
            font-size: 10px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            line-height: 15px;
            color: #999999;
            opacity: 1;
            margin:6px 0;
          }
          .tags{
            width:100%;
           height:13px;
          display:flex;
          flex-flow:row nowrap;
          justify-content:space-around;
          align-items:center;
          }
        }
        }

    }
  }
</style>
