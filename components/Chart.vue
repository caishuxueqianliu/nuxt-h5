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
        xAxisData:[],
        yAxisData:[]
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
            data: this.xAxisData
          },
          yAxis: {},
          series: [{
            name: '数量',
            type: 'bar',
            data: this.yAxisData,
            barWidth: fontSize(0.5)
          }]
        })


      },
    },
    props:{
      lotionTimeLatitudeTotalData:{
        type:Array
      }
    },
    mounted () {
      this.xAxisData= this.lotionTimeLatitudeTotalData.map(item=>{
        return item.timeAxis
      })
         this.yAxisData= this.lotionTimeLatitudeTotalData.map(item=>{
        return item.num
      })
      this.echartsInit()
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
    height: 312px;
  }

</style>
