import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Tip } from '@components'
import { ServerList, UseTime } from './components'
import { SearchTab } from '../index/components'
import * as actions from '@actions/user'
import { connect } from 'react-redux'
import banner from '@assets/sever/banner.png'

import './service.scss'

@connect(({ user }) => user, { ...actions })
class Service extends Component {
  constructor(){
    super(...arguments);

    const { dispatchUser, login } = this.props;
    login ? '' : dispatchUser()

    this.state = {
      banner: `background: url(${banner});background-size: 100% 100%`
    }
  }

  componentDidShow = () => {
   
  }

  config = {
    navigationBarTitleText: '服务'
  }

  render() {
    const { banner } = this.state

    return (
      <View className="Service">
        <SearchTab />
        <View className="Service-img" style={banner}></View>
        {/* 最近使用 */}
        <UseTime />
        <View className="Service-border" />
        {/* 全部服务 */}
        <ServerList />
        <Tip />
      </View>
    )
  }
}

export default Service
