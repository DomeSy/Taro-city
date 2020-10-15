import React, { Component } from 'react'

import { View } from '@tarojs/components';
import { ListAll, TitleBig } from '@components'

import './index.scss'

// 搜索栏
class Index extends Component {
  render() {
    return (
      <View className="Classification">
        <TitleBig />
        <ListAll />
      </View>
    );
  }
}

export default Index;
