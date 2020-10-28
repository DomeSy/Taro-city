import React, { Component } from 'react'
import { Taro } from '@tarojs/taro'
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
    const { DSiteInit } = this.props;
    DSiteInit()
  }

  componentDidShow(){}

  ChangeSite = (value) => {
    this.props.DSiteSet({area: value.area, siteid: value.siteid})
  }

  render() {
    const { site } = this.props;
    console.log(this.props)

    return (
      <View className="Search">
        <View className="site">
          <Site active={site} onChange={this.ChangeSite} />
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
