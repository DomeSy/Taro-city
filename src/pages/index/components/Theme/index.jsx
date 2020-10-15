import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Title } from '@components'

import './index.scss'

// 搜索栏
class Index extends Component {
  render() {
    return (
      <View className="Theme">
        <Title title="主题专区" />
        <View className="Theme-conent">
          <View className="Theme-conent-top">
            <View className="Theme-conent-top-left"></View>
            <View className="Theme-conent-top-right">
              <View className="Theme-conent-top-right-t"></View>
              <View className="Theme-conent-top-right-b"></View>
            </View>
          </View>
          <View className="Theme-conent-buttom">
            <View className="Theme-conent-buttom-left"></View>
            <View className="Theme-conent-buttom-right"></View>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
