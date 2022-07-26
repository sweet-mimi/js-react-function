import React from 'react'
import './index.scss'

import {useRef, useEffect} from 'react'

// echarts demo
import * as echarts from 'echarts'
// 获取dom 使用 useRef
// 在useEffect中获取，useEffect在dom加载完成后执行

import Bar from './Bar'

const values = {
  title: 'echarts示例',
  xData: ['react', 'vue', 'angular'],
  yData: [30, 40, 20],
  style: {width: '300px', height: '400px'}
}

function Home() {
  const domRef = useRef()
  const chartsInit = () => {
    const myCharts = echarts.init(domRef.current)
    myCharts.setOption({
      title:{
        text:  '示例'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    })
  }

  useEffect(() => {
    chartsInit()
  }, [])
  return (
    <div>
      <div ref={domRef} style={{width: '500px', height: '400px'}}></div>

      <Bar {...values} />
    </div>
  )
}

export default Home
