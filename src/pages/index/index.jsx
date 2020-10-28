import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Loading } from '@components'
import { Tip } from '@components'
import { JmasRequest, Method, Jump } from '@unilts'
import * as actions from '@actions/user'
import * as siteActions from '@actions/site'
import * as homeActions from '@actions/home'
import { connect } from 'react-redux'


import { SearchTab, Ration, Classification, Licence, Theme, ThemeService } from './components';


@connect(({user, site}) => ({...user, ...site}), { ...actions, ...siteActions, ...homeActions })
class Index extends Component {
  constructor(){
    super(...arguments)

    this.state = {
      siteid: ''
    }
  }


  componentWillUnmount () {  }

  componentDidMount(){
    const { dispatchUser, login, DSiteInit, DHomeInit, site:{ siteid }, } = this.props;
    login ? '' : dispatchUser()
    DSiteInit()
    DHomeInit('jmportalnzjk', 'getpage', {siteid, type: '2'})
    this.Init()
  }
  
  componentDidUpdate(){
    const { DHomeInit, site:{ siteid } } = this.props;
    // DHomeInit('jmportalnzjk', 'getpage', {siteid, type: '2'})
    this.Init()
  }
  Init = () => {
  }

  componentDidShow = async () => {

    // const data = await JmasRequest('jmportalnzjk', 'getapplist', {
    //   // siteid: '01f443bfeb054686a28ca8446f9f3810',
    //   siteid: '178966c2ddf04da8aa2fb447eedf677b',
    //   colId: 'bc16bc58b4474ecca0405b236c87e78e',
    //   pageNo:'1',
    //   pageSize: '10'
    // })
    // console.log(data,'--')
  }

  componentDidHide () {   }

  onClick = () => {
    Jump({url: '/opinion'})
  }

  render () {
    return (
      <View className="Index">
        <View onClick={this.onClick}>我是蛇</View>
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

