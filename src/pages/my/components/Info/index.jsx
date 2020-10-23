import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Jump } from '@unilts'

import './index.scss'

// 搜索栏
class Index extends Component {
  constructor(){
    super(...arguments)
  }

  login = () => {
    Jump({url: '/test'})
  }
  render() {
    return (
      <View className="Info">
        <View className="Info-infos">
          <View className="Info-infos-img"></View>
          <View className="Info-infos-name" onClick={this.login}>
            张佳丽
          </View>
        </View>
        <View className="Info-opinion">
          <View className="Info-opinion-text">意见反馈</View>
        </View>
      </View>
    );
  }
}

export default Index;
