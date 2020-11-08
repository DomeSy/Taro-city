import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import { Info, Space } from './components'
import Taro from '@tarojs/taro'
import { Jump, Method } from '@unilts'
import banjian from '@assets/my/banjian.png'
import pingjia from '@assets/my/pingjia.png'
import zhengjian from '@assets/my/zhengjian.png'
import zixun from '@assets/my/zixun.png'
import * as actions from '@actions/user'
import * as nearUseActions from '@actions/nearUse'
import * as spaceActions from '@actions/space'
import { AtMessage } from 'taro-ui'

import './my.scss'


const list = [
  {
    img: `background: url(${zhengjian});background-size: 100% 100%`,
    text: '我的证件',
    // ishot: true
  },
  {
    img: `background: url(${banjian});background-size: 100% 100%`,
    text: '我的办件',
  },
  {
    img: `background: url(${pingjia});background-size: 100% 100%`,
    text: '我的评价',
  },
  {
    img: `background: url(${zixun});background-size: 100% 100%`,
    text: '我的咨询',
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

@connect(({ user, home, space }) => ({...user, ...home, ...space}), { ...actions, ...nearUseActions, ...spaceActions})
class My extends Component {

  constructor(){
    super(...arguments)
    this.state = {
      list
    }
  }

  componentDidMount(){
    // this.props.DSpaceInit();
  }

  componentDidShow = async () => {
    const { dispatchLogin, dispatchLogout, DNearClear, space } = this.props;
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
      if(data.payload){
        const payload = JSON.parse(data.payload)
        const { url, name } = payload
        name ? Jump({url, payload: { token }}) : Jump({url})
      }
    }else if(type == 'loginOut') {
      dispatchLogout()
      DNearClear()
    }
  }
  
  goWebView = () => {
    Taro.atMessage({
      message: `服务正在建设中尽情期待`,
      type: 'error',
      duration: 2000
    }) 
  }

  render() {
    const { list } = this.state;
    const { login, userInfo } = this.props;

    return (
      <View className="My">
        <AtMessage />
        <Info login={login} userInfo={userInfo} />
        {/* 信息栏 */}
        <View className="My-border" />
        <View className="My-List">
          {
            list.map((item, index) => (
              <View className="My-List-center" key={index} onClick={()=>{this.goWebView()}}>
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
        {
          userInfo.usertype === 2 ? '' : <Space/>
        }
      </View>
    )
  }
}

export default My
