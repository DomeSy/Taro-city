import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Title } from '@components'

import './index.scss'

// 搜索栏
class Index extends Component {
  render() {
    return (
      <View className="Space">
        <Title title="我的空间" effectTitle="授权管理"/>
        <View className="Space-centent">
          <View className="Space-centent-none">
            <View className="Space-centent-none-text">
              订阅专属服务，开启您的智慧生活…
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
