import React, { Component } from 'react'
import { Title, ListTheme } from '@components'
import { View } from '@tarojs/components'
import './index.scss'

// 搜索栏
class Index extends Component {
  render() {
    return (
      <View className="ThemeService">
        <Title title="主题服务" />
        <ListTheme />
      </View>
    );
  }
}

export default Index;
