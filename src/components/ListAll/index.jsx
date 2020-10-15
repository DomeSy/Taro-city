import React from 'react'
import { View } from '@tarojs/components'

import ma from '@assets/ma.png'

import './index.scss'

function Index(){
  const list = [
    {
      text: '通行码出示',
      img: `background: url(${ma});background-size: 100% 100%`
    },
    {
      text: '通行码出示',
      img: `background: url(${ma});background-size: 100% 100%`
    },
    {
      text: '通行码出示',
      img: `background: url(${ma});background-size: 100% 100%`
    },
    {
      text: '通行码出示',
      img: `background: url(${ma});background-size: 100% 100%`
    },
    {
      text: '通行码出示',
      img: `background: url(${ma});background-size: 100% 100%`
    },
  ]

  return (
    <View className="DListAll">
      {list.map((item, index) => (
        <View key={index} className="list">
          <View className="img">
            <View className="imgUrl" style={item.img}/>
          </View>
          <View className="text">{item.text}</View>
        </View>
      ))}
    </View>
  )
}

export default Index;
