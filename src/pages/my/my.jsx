import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import { Info, Space } from './components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import banjian from '@assets/my/banjian.png'
import { USER_LOGIN } from '@constants/user'
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

@connect(({ user }) => user, { ...actions })
class My extends Component {

  constructor(){
    super(...arguments)
    this.state = {
      list
    }
  }

  componentDidShow = async () => {
    // Taro.clearStorage()
    const { dispatchLogin, dispatchLogout } = this.props;
    
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
    }else if(type == 'loginOut') {
      dispatchLogout()
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
