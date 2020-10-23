import React, { Component } from 'react'
import { View} from '@tarojs/components'
import { Tip } from '@components'
import { jmasRequest, Method } from '@unilts'

import { SearchTab, Ration, Classification, Licence, Theme, ThemeService } from './components';

import '.'

class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { console.log('1') }

  async componentDidShow () {

    // console.log( Method.desensitization('我是谁', 1))

    // const datas = {
    //     url: 'hcp/hcp01005',
    //     data: {
    //       porjectNo: '120j84g697475fa4fed8d481238000'
    //     }
    // }
 
    // const data = await jmasRequest("provincegoodbadreviews", "getGoodBad", datas)
    // console.log(data)
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

