import React, { Component } from 'react'
import { Taro } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Site } from '@components'
import { AtIcon } from 'taro-ui'
import { connect } from 'react-redux'
import { mobileId, clienttype, Jump } from '@unilts'
import * as actions from '@actions/site'
import * as homeActions from '@actions/home'

import  './index.scss'

// 搜索栏
@connect(({ site }) => site, { ...actions, ...homeActions })
class Index extends Component {
  constructor () {
    super(...arguments)
  }

  componentDidShow(){}

  ChangeSite = (value) => {
    this.props.DSiteSet({area: value.area, siteid: value.siteid})
    this.props.DHomeInit({siteid: value.siteid, mobileId, clienttype})
  }

  render() {
    const { site } = this.props;

    return (
      <View className="Search">
        <View className="site">
          <Site active={site} onChange={this.ChangeSite} />
        </View>
        <View className="searchs">
          <View className="sInput" onClick={() => Jump({url:'/search'})}>
            <AtIcon value='search' size='16' color='rgba(135,135,135,1)'></AtIcon>
            <View className="text">搜索词</View>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
