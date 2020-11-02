import React from 'react'
import { View } from '@tarojs/components'

import hot from '@assets/hot.png'

import './index.scss'

function Index(){

  const img = `background: url(${hot});background-size: 100% 100%`;

  const list = [
    {
      text:'病例与可能密切接扫到都爱斯达克奇偶暗示京东派',
      isImg: true
    },
    {
      text:'病例与可能密切接扫到都爱斯达克奇偶暗示京东派',
      isImg: true
    },
    {
      text:'通行码出示',
      isImg: false
    },
    {
      text:'通行码出示',
      isImg: true
    },
    {
      text:'通行码出示',
      isImg: true
    },
    {
      text:'通行码出示',
      isImg: true
    }
  ];

  return (
    <View className="DListUseTime">
      {
        list.map((item, index) => (
          <View className="DListUseTime-list" key={index}>
            <View className="DListUseTime-list-img"></View>
            <View className="DListUseTime-list-detail">
              <View className="DListUseTime-list-detail-text">{item.text}</View>
              {
                item.isImg && item.text.length < 8 ? <View className="DListUseTime-list-detail-hot" style={img}></View> : ''
              }
            </View>
          </View>
        ))
      }
    </View>
  );
}

export default Index;
