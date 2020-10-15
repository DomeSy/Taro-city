import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Title, Card } from '@components'

import './index.scss'

// 搜索栏
class Index extends Component {
  render() {
    return (
      <View className="Licence">
        <Title title="我的证照" />
        <Card />
      </View>
    );
  }
}

export default Index;
