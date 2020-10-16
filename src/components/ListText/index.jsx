import React from 'react'
import { View } from '@tarojs/components'

import './index.scss'

function Index(){
  const list = [
    {
      title: '爱山东测试',
      list: [
        {
          text: '提交时间：',
          text1: '2020-08-25 16:32'
        },
        {
          text: '提交时间：',
          text1: '2020-08-25 16:32'
        }
      ]
    },
    {
      title: '爱山东测试',
      list: [
        {
          text: '提交时间：',
          text1: '2020-08-25 16:32'
        },
        {
          text: '提交时间：',
          text1: '2020-08-25 16:32'
        }
      ]
    }
  ]

  return (
    <>
      {
        list.map((item, index) => (
          <View className="DListTest" key={index}>
            <View className="DListTest-title">{item.title}</View>
            {
              item.list.map((items, indexs) => (
                <View className="DListTest-text" key={indexs+"list"}>{items.text}{items.text1}</View>
              ))
            }
          </View>
        ))
      }
    </>
  )
}

export default Index;
