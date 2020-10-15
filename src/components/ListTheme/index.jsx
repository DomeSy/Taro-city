import React from 'react'
import { View } from '@tarojs/components'

import shebao from '@assets/shebao.png'

import './index.scss'

function Index(){

  const list = [
    {
      img: `background: url(${shebao});background-size: 100% 100%`,
      text: '户籍户政',
      text1: '机动车业务、驾驶证业务'
    },
    {
      img: `background: url(${shebao});background-size: 100% 100%`,
      text: '户籍户政',
      text1: '身份证业务、落户业务、户籍信息变更、军人户卡卡卡萨达so'
    },
    {
      img: `background: url(${shebao});background-size: 100% 100%`,
      text: '户籍户政',
      text1: '机动车业务、驾驶证业务'
    },
    {
      img: `background: url(${shebao});background-size: 100% 100%`,
      text: '户籍户政',
      text1: '机动车业务、驾驶证业务'
    },
    {
      img: `background: url(${shebao});background-size: 100% 100%`,
      text: '户籍户政',
      text1: '机动车业务、驾驶证业务'
    },
  ];

  return (
    <View className="DListTheme">
      {
        list.map((item, index) => (
          <View className="DListTheme-them" key={index}>
            <View className="DListTheme-them-img" style={item.img}></View>
            <View className="DListTheme-them-detail">
              <View className="DListTheme-them-detail-title">
                {item.text}
              </View>
              <View className="DListTheme-them-detail-text">
                {item.text1}
              </View>
            </View>
          </View>
        ))
      }

    </View>
  );
}

export default Index;
