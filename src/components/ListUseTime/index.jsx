import React from 'react'
import { View } from '@tarojs/components'

import hot from '@assets/hot.png'

import './index.scss'

function Index(){

  const img = `background: url(${hot});background-size: 100% 100%`;

  const list = [
    {
      text:'通行码出示',
      isImg: true
    },
    {
      // 字体超出和hot自动存在需要单独处理
      text:'病例与可能密切接扫到都爱斯达克奇偶暗示京东派',
      // isImg: true
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
            <View className="DListUseTime-list-text">{item.text}</View>
            {
              item.isImg ? <View className="DListUseTime-list-hot" style={img}></View> : ''
            }
          </View>
        ))
      }
    </View>
  );
}

export default Index;
