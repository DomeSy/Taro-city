import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Loading } from '@components'
import { Tip } from '@components'
import { JmasRequest, Method } from '@unilts'
import * as actions from '@actions/user'
import { connect } from 'react-redux'


import { SearchTab, Ration, Classification, Licence, Theme, ThemeService } from './components';


@connect(({ user }) => user, { ...actions })
class Index extends Component {
  constructor(){
    super(...arguments)
    const { dispatchUser, login } = this.props;
    login ? '' : dispatchUser()
  }

  componentDidMount(){}

  componentWillReceiveProps (nextProps) {}

  componentWillUnmount () {  }

  componentDidShow = async () => {
    // const data = await JmasRequest('jmportalnzjk', 'getpage', {
    //   siteid: '178966c2ddf04da8aa2fb447eedf677b',
    //   type: '2'
    // })
    // console.log(data,'--')

  }

  componentDidHide () {  }

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

