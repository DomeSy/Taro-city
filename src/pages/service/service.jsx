import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Tip, Loading } from '@components'
import Taro from '@tarojs/taro'
import { Method } from '@unilts'

import { ServerList, UseTime } from './components'
import { SearchTab } from '../index/components'
import * as actions from '@actions/user'
import { connect } from 'react-redux'
import banner from '@assets/sever/banner.png'

import './service.scss'

function getStorage() {
  return new Promise(res => {
    Taro.getStorage({
      key: 'token',
      success: function (data) {
        res(data.data)
      }
    })
  })
}

@connect(({ user, home }) => ({...user, ...home}), { ...actions })
class Service extends Component {
  constructor(){
    super(...arguments);

    this.state = {
      banner: `background: url(${banner});background-size: 100% 100%`
    }
  }

  componentDidShow = async () => {
    const { dispatchLogin } = this.props;
    
    const data = await getStorage();
    const type = data ? data.type : false;
    
    if(type == 'login' && data.isLogin){
      const { token, usertype } = data;
      Taro.setStorage({
        key:"token",
        data: {
          token,
          usertype,
          type: "login",
          isLogin: false
        }
      })
      dispatchLogin({token, usertype})
    }
  }
  config = {
    navigationBarTitleText: '服务'
  }

  render() {
    const { banner } = this.state
    if(Method.isObject(this.props.home)){
      return <Loading></Loading>
    }

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
