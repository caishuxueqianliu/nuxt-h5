<template>
  <div class="echarts">
    <div id="myChartx"></div>
  </div>
</template>
<script type="text/javascript">

  export default {
    name: 'myChartx',
    data () {
      return {
        myChartx: null,
        xAxisData:[],
        yAxisData:[]
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
        let myChartx= this.$echarts.getInstanceByDom(document.getElementById('myChartx')); //有的话就获取已有echarts实例的DOM节点。
        if (myChartx== null) { // 如果不存在，就进行初始化。
          this.myChartx = this.$echarts.init(document.getElementById('myChartx'))
        }

        // 开始渲染
        this.myChartx.setOption({
          color:['#FA4901'],
          title: {
            text: '次数',
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
            name: '次数',
            type: 'bar',
            data: this.yAxisData,
            barWidth: fontSize(0.5)
          }]
        })


      },
    },
     props:{
      workOrderTimeLatitudeTotalData:{
        type:Array
      }
    },
    
    mounted () {
         this.xAxisData= this.workOrderTimeLatitudeTotalData.map(item=>{
        return item.timeAxis
      })
         this.yAxisData= this.workOrderTimeLatitudeTotalData.map(item=>{
        return item.num
      })
      this.echartsInit()
      window.addEventListener('resize', () => {
        this.myChartx.resize()
        this.echartsInit()

      })
    }
  }
</script>
<style scoped lang="less">
  #myChartx{
    width: 100%;
    height: 312px;
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    /*float: left;*/
  }
</style>
