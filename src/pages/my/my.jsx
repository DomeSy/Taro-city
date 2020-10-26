import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import { Info, Space } from './components'
import { getCurrentInstance } from '@tarojs/taro'
import banjian from '@assets/my/banjian.png'
import * as actions from '@actions/user'

import './my.scss'


const list = [
  {
    img: `background: url(${banjian});background-size: 100% 100%`,
    text: '我的证件',
    ishot: true
  },
  {
    img: `background: url(${banjian});background-size: 100% 100%`,
    text: '我的证件',
  },
  {
    img: `background: url(${banjian});background-size: 100% 100%`,
    text: '我的证件',
  },
  {
    img: `background: url(${banjian});background-size: 100% 100%`,
    text: '我的证件',
  },
]

@connect(({ user }) => user, { ...actions })
class My extends Component {

  constructor(){
    super(...arguments)
    this.state = {
      list
    }
  }

  componentDidShow = () => {
    const { type } = getCurrentInstance().router.params || false;
    const { dispatchUser, dispatchLogin, dispatchLogout } = this.props;

    if(type == 'login'){
      const { token, usertype } = getCurrentInstance().router.params;
      dispatchLogin({token, usertype})
    }else if(type == 'loginOut') {
      dispatchLogout()
    }else{
      dispatchUser()
    }
  }

  render() {
    const { list } = this.state;
    const { login, userInfo } = this.props

    return (
      <View className="My">
        <Info login={login} userInfo={userInfo} />
        {/* 信息栏 */}
        <View className="My-border" />
        <View className="My-List">
          {
            list.map((item, index) => (
              <View className="My-List-center" key={index}>
              <View className="My-List-center-img">
                <View className="My-List-center-img-imgs" style={item.img}></View>
                {
                  item.ishot ? <View className="My-List-center-img-top"></View> : ''
                }
              </View>
              <View className="My-List-center-text">{item.text}</View>
            </View>
            ))
          }
        </View>
        <View className="My-border" />
        {/* 我的空间 */}
        <Space />
      </View>
    )
  }
}

export default My
