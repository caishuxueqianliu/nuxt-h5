<template>
  <div id="echarts">
    <div id="myChart"></div>
<!--    <div id="myChart2"></div>-->
  </div>
</template>
<script type="text/javascript">

  export default {
    name: 'Echarts',
    data () {
      return {
        myChart: null,
        // myChart1: null
      }
    },
    methods: {
      echartsInit () {
        //获取屏幕宽度并计算比例
        function fontSize(res){
          let clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
          if (!clientWidth) return;
          let fontSize = 100 * (clientWidth / 750);
          return res*fontSize;
        }
        let myChart= this.$echarts.getInstanceByDom(document.getElementById('myChart')); //有的话就获取已有echarts实例的DOM节点。
        if (myChart== null) { // 如果不存在，就进行初始化。
          this.myChart = this.$echarts.init(document.getElementById('myChart'))
        }
        // 找到容器
       // this.myChart = this.$echarts.init(document.getElementById('myChart'))
       // window.onresize = myChart.resize;
       //  window.onresize = function () {
        //    myChart.resize();
        //  }
        // window.onresize = function () {
        //   this.myChart.resize()
        // };
        // window.addEventListener("resize", () => { myCharts.resize();});

        // 开始渲染
        this.myChart.setOption({
          color:['#FA4901'],
          title: {
            text: '数量(桶)',
            textStyle: {
              //调用fontSize（）方法，此时fontSize为18px
              fontSize: fontSize(0.12)
            },
            subtextStyle: {
              color: 'gray',
              fontSize: fontSize(0.12)
            }
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫',  '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10],
            barWidth: fontSize(0.5)
          }]
        })


      },
      // echartsInit2 () {
      //   let myChart= this.$echarts.getInstanceByDom(document.getElementById('myChart2')); //有的话就获取已有echarts实例的DOM节点。
      //   if (myChart== null) { // 如果不存在，就进行初始化。
      //     this.myChart1 = this.$echarts.init(document.getElementById('myChart2'))
      //   }
      //   // this.myChart1 = this.$echarts.init(document.getElementById('myChart2'))
      //   //window.onresize = myChart.resize;
      //   // window.onresize = function () {
      //   //   myChart.resize();
      //   // }
      //   //视口调整后重新渲染echart图表
      //   // window.onresize = function () {
      //   //   this.myChart1.resize()
      //   // };
      //  // window.addEventListener("resize", () => { myCharts.resize();});
      //
      //   this.myChart1.setOption({
      //     title: {text: 'echarts 饼图'},
      //     series: [
      //       {
      //         name: '访问来源',
      //         type: 'pie',
      //         radius: '55%',
      //         data: [
      //           {value: 235, name: '视频广告'},
      //           {value: 274, name: '联盟广告'},
      //           {value: 310, name: '邮件营销'},
      //           {value: 335, name: '直接访问'},
      //           {value: 400, name: '搜索引擎'}
      //         ]
      //       }
      //     ]
      //   })
      // }
    },
    mounted () {
      this.echartsInit()
      // this.echartsInit2()
      window.addEventListener('resize', () => {
        this.myChart.resize()
        // this.myChart1.resize()
        this.echartsInit()
        // this.echartsInit2()
      })
    }
  }
</script>
<style scoped lang="less">
  #myChart{
    width: 100%;
    height: 625px;
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    /*float: left;*/
  }
  #myChart2{
    width: 375px;
    height: 375px;
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    /*float: right;*/
  }
</style>
