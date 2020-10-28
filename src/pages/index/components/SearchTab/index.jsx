import React, { Component } from 'react'

import { View } from '@tarojs/components'
import { Site } from '@components'
import { AtIcon } from 'taro-ui'
import { connect } from 'react-redux'
import * as actions from '@actions/site'
import  './index.scss'

// 搜索栏
@connect(({ site }) => site, { ...actions })
class Index extends Component {
  constructor () {
    super(...arguments)
    console.log(this.props,'--')
  }

  render() {
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
