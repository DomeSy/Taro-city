import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Title, ListUseTime } from '@components'

import './index.scss'

// 搜索栏
class Index extends Component {
  render() {
    return (
      <View className="UseTime">
        <Title title='最近使用' />
        <ListUseTime />
      </View>
    );
  }
}

export default Index;
