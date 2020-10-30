import React from 'react'
import { View, Image } from '@tarojs/components'
import { Method } from '@unilts'

import allPic from '@assets/home/all.png'

import './index.scss'

// 个数
const number = 7

function Index({ list = [] }){

  list = list.length <= number ? list : Method.Intercept(list, number)

  return (
    <View className="DListAll">
      {list.map((item, index) => (
        <View key={index} className="list">
          <View className="img">
            <Image src={item.iconUrl} className="imgUrl" />
          </View>
          <View className="text">{item.name}</View>
        </View>
      ))}
      <View className="list">
        <View className="img">
          <Image src={allPic} className="imgUrl" />
        </View>
        <View className="text">全部</View>
      </View>
    </View>
  )
}

export default Index;
