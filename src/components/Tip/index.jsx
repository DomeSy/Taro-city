import React, { Component } from 'react';
import { View } from '@tarojs/components';
import './index.scss'

// 搜索栏
class Index extends Component {
  render() {
    return (
      <View className="Tip">
          <View className="bottom">
            <View className="text1">联系我们</View>
            <View className="text2">服务更透明，办事一网通</View>
          </View>
        <View className="img"></View>
      </View>
    );
  }
}

export default Index;
