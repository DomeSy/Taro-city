import React, { Component } from 'react'
import { View} from '@tarojs/components'
import { Tip } from '@components'
import fetch from '@unilts/request'

// import {fetch} from '@unilts/request.js'
import { SearchTab, Ration, Classification, Licence, Theme, ThemeService } from './components';

import '.'

class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { console.log('1') }

  async componentDidShow () {
    const path = 'https://app-izz.zhengzhou.gov.cn/jmportalzs/interfaces/cardOrder/getAreaCountByYWTypeId.do';
    const url = 'cardOrder/getAreaCountByYWTypeId.do';
    const payload = {
      ywtypeId: 2
    }
    const data = await fetch({url, payload, path})
    console.log(data)
  }

  componentDidHide () { console.log('3') }

  render () {
    return (
      <View className="Index">
        {/* 搜索框 */}
        <SearchTab />
        {/* 轮播图 */}
        <Ration />
        {/* 热门分类 */}
        <Classification />
        {/* 我的证照 */}
        <Licence />
        {/* 主题专区 */}
        <Theme />
        {/* 主题服务 */}
        <ThemeService />
        {/* 背景框 */}
        <Tip />
      </View>
    )
  }
}

export default Index

