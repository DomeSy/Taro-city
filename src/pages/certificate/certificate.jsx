import React, { Component } from 'react'
import { View } from '@tarojs/components';
import './certificate.scss'

class Certificate extends Component {
  constructor(){
    super(...arguments)
  }
  render() {

    const list = [
      {
        text: '持证人：',
        text1: '陈晓'
      },
      {
        text: '持证人：',
        text1: '陈晓'
      },
      {
        text: '持证人：',
        text1: '陈晓'
      },
      {
        text: '持证人：',
        text1: '陈晓'
      }
    ]

    return (
      <View className="Certificate">
        <View className="Certificate-card">
          <View className="Certificate-card-title">中华人民共和国结婚证</View>
          {
            list.map((item, index) => (
              <View className="Certificate-card-content" key={index}>
                <View className="Certificate-card-content-text">{item.text}</View>
                <View className="Certificate-card-content-text1">{item.text1}</View>
              </View>
            ))
          }
        </View>
        <View className="Certificate-ma">二维码</View>
        <View className="Certificate-text">查看证件图片</View>
      </View>
    )
  }
}

export default Certificate
