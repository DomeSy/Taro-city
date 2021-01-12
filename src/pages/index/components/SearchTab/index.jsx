import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Site } from '@components'
import { AtIcon } from 'taro-ui'
import { connect } from 'react-redux'
import { mobileId, clienttype, Jump } from '@unilts'
import * as actions from '@actions/site'
import * as homeActions from '@actions/home'
import * as userActions from '@actions/user'

import  './index.scss'

// 搜索栏
@connect(({ site, user }) => ({...site, ...user}), { ...actions, ...homeActions, ...userActions })
class Index extends Component {
  constructor () {
    super(...arguments)
  }

  componentDidShow(){}

  ChangeSite = async (value) => {
    await this.props.DHomeClear()
    this.props.DSiteSet({area: value.area, siteid: value.siteid})
    this.props.DHomeInit({siteid: value.siteid, mobileId, clienttype})
  }

  Login = async () => {
    this.props.dispatchQuickLogin()
  }

  render() {
    const { site, login } = this.props;
    let name = '';
    if(login) name = this.props.userInfo.name

    return (
      <View className="Search">
        <View className="Search-site">
          <Site active={site} onChange={this.ChangeSite} />
        </View>
        <View className="Search-searchs">
          <View className="sInput" onClick={() => Jump({url:'/search'})}>
            <AtIcon value='search' size='16' color='rgba(135,135,135,1)'></AtIcon>
            <View className="text">搜索</View>
          </View>
        </View>
        <View className="Search-Login">
          <View className="Search-Login-img"></View>
          <View className="Search-Login-logins" onClick={() => login ? '' : this.props.dispatchQuickLogin()}> {login ? `*${name.substring(1, name.length)}` : '请登录'}</View>
        </View>
      </View>
    );
  }
}

export default Index;
