import React, { Component } from 'react'

import { View } from '@tarojs/components';
import { Site } from '@components'
import { AtIcon } from 'taro-ui'

import  './index.scss'

// 搜索栏
class Index extends Component {

  render() {
    // console.log(site,'--9')
    return (
      <View className="Search">
        <View className="site">
          <Site />
        </View>
        <View className="searchs">
          <View className="sInput">
            <AtIcon value='search' size='16' color='rgba(135,135,135,1)'></AtIcon>
            <View className="text">搜索词</View>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
