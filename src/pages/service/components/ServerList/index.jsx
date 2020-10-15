import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Title, ListTheme } from '@components'

import './index.scss'

// 搜索栏
class Index extends Component {
  render() {
    return (
      <View className="ServerList">
        <Title title='全部服务' none/>
        <ListTheme />
      </View>
    );
  }
}

export default Index;
