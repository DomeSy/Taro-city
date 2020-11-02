import React from 'react'
import { View, Image } from '@tarojs/components'
import { Method, Jump } from '@unilts'

import allPic from '@assets/home/all.png'

import './index.scss'

// 个数
const number = 7

function Index({ list = [] }){

  list = list.length <= number ? list : Method.Intercept(list, number)

  return (
    <View className="DListAll">
      {list.map((item, index) => (
        <View key={index} className="list" onClick={() => Jump({url: item.appIssueUrl})}>
          <View className="img">
            <Image src={item.iconUrl} className="imgUrl" />
          </View>
          <View className="text">{item.name}</View>
        </View>
      ))}
      <View className="list" onClick={() => Jump({url: '/service', method: 'switchTab'})}>
        <View className="img">
          <Image src={allPic} className="imgUrl" />
        </View>
        <View className="text">全部服务</View>
      </View>
    </View>
  )
}

export default Index;
