// 封装echarts组件

import {useRef, useEffect} from 'react'

import * as echarts from 'echarts'


function Bar({title, xData, yData, style}) {
  const domRef = useRef()
  const chartsInit = () => {
    const myCharts = echarts.init(domRef.current)
    myCharts.setOption({
      title:{
        text:  title
      },
      xAxis: {
        type: 'category',
        data: xData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: yData,
          type: 'bar'
        }
      ]
    })
  }

  useEffect(() => {
    chartsInit()
  })                      // 组件里每次加载都要render一下
  return (
    <div>
      <div ref={domRef} style={style}></div>
    </div>
  )
}

export default Bar