import React, { Component } from 'react'
import { View, Text } from '@tarojs/components';
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Jump } from '@unilts';
import none from '@assets/none.png'

import './catch.scss'

class Catch extends Component {
  constructor(){
    super(...arguments)
    this.state={}
  }

  // 判断是否是Tab页面
  isTab = catchPath => {
    const { list } = getCurrentInstance().app.config.tabBar ;
    const path = catchPath.substring(1, catchPath.length);
    let tab = false;
    list.map(item => item.pagePath === path ? tab = true : '')
    return tab ? 'switchTab' : 'redirectTo'
  }

  render() {
    // 接收异常页面, 这里需要判断下，如果是标题页面这跳转方式要为switchTab,否则为redirectTo
    const { catchPath } = getCurrentInstance().router.params || false;
    const method = this.isTab(catchPath)
    return (
      <View className="CatchView">
        <View className="CatchView-img"></View>
        <View className="CatchView-text">接口异常或网络异常，请稍后再试。</View>
        {
          catchPath ? <View className="CatchView-btn" onClick={() => Jump({url: catchPath, method })}>立即刷新</View> : ''
        }
      </View>
    )
  }
}

export default Catch
