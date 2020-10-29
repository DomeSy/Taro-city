import React from 'react'
import { View } from '@tarojs/components'
import { Method } from '@unilts'

import ma from '@assets/ma.png'

import './index.scss'

// 个数
const number = 7

function Index({ list = [] }){
  // const list = [
  //   {
  //     text: '通行码出示',
  //     img: `background: url(${ma});background-size: 100% 100%`
  //   },
  //   {
  //     text: '通行码出示',
  //     img: `background: url(${ma});background-size: 100% 100%`
  //   },
  //   {
  //     text: '通行码出示',
  //     img: `background: url(${ma});background-size: 100% 100%`
  //   },
  //   {
  //     text: '通行码出示',
  //     img: `background: url(${ma});background-size: 100% 100%`
  //   },
  //   {
  //     text: '通行码出示',
  //     img: `background: url(${ma});background-size: 100% 100%`
  //   },
  // ]

  list = list.length <= number ? list : Method.Intercept(list, number)
  console.log(list, '----')

  return (
    <View className="DListAll">
      {list.map((item, index) => (
        <View key={index} className="list">
          <View className="img">
            <View className="imgUrl"/>
          </View>
          <View className="text">{item.name}</View>
        </View>
      ))}
    </View>
  )
}

export default Index;
