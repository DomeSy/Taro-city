import React from 'react'
import { View } from '@tarojs/components';

import './index.scss'

function Index({list = []}){

  return (
    <View className="DListShow">
      {
        list.map((item, index) => (
          <View className="DListShow-list" key={index}>
            <View className="DListShow-list-name">{item.name}</View>
            <View className="DListShow-list-text">{item.text}</View>
          </View>
        ))
      }
    </View>
  )
}

export default Index;
