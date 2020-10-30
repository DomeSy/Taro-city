import React from 'react'
import { View, Image } from '@tarojs/components'

import './index.scss'

function Index({list = []}){

  const getEffectText = (data) => {
    let text = ''
    data.map((item, index) => {
      if (index === data.length - 1) {
        text += item.name
      } else {
        text += item.name + '、'
      }
    })
    return text
  }

  return (
    <View className="DListTheme">
      {
        list.map((item, index) => (
          <View className="DListTheme-them" key={index}>
            <Image className="DListTheme-them-img" src={item.cateimgurl}></Image>
            <View className="DListTheme-them-detail">
              <View className="DListTheme-them-detail-title">
                {item.resourcename}
              </View>
              <View className="DListTheme-them-detail-text">
                {
                  getEffectText(item.apps.data)
                }
              </View>
            </View>
          </View>
        ))
      }

    </View>
  );
}

export default Index;
