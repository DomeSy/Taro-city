import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import { Info, Space } from './components'
import Taro,{ getCurrentInstance } from '@tarojs/taro'
import banjian from '@assets/my/banjian.png'
import * as actions from '@actions/user'
import { Method } from '@unilts'
import { AtMessage, AtButton } from 'taro-ui'

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
    this.props.dispatchUser({token: '39555083a7364766968221d144053af88759db5ecfc849e2a2a1b38db8819822', usertype: '1'})

    if(type == 'login'){
      const { dispatchUser } = this.props;
      const { token, usertype } = getCurrentInstance().router.params;
      dispatchUser({token, usertype})
    }
  }

  Close = () => {
    // jump({url: '/pages/matter/matter'})
  }

  handleClick = () => {
 
  }

  render() {
    const { list } = this.state;
    return (
      <View className="My">
        <AtMessage />
        <Info />
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
        <View className="My-login">
          <View className="My-login-btn">
            <View className="My-login-btn-text" onClick={this.Close}>
              退出登录
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default My
