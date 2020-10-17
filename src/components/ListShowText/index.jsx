import React from 'react'
import { View } from '@tarojs/components';

import './index.scss'

function Index({list = []}){

  return (
    <View className="DListShowText">
      {
        list.map((item, index) => (
          <View className="DListShowText-list" key={index}>
            <View className="DListShowText-list-name">{item.name}</View>
            <View className="DListShowText-list-text">{item.text}</View>
          </View>
        ))
      }
    </View>
  )
}

export default Index;
