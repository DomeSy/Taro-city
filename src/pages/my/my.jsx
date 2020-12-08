import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import { Loading } from '@components'
import { Info, Space } from './components'
import Taro from '@tarojs/taro'
import { Jump, info, Method } from '@unilts'
import banjian from '@assets/my/banjian.png'
import pingjia from '@assets/my/pingjia.png'
import zhengjian from '@assets/my/zhengjian.png'
import zixun from '@assets/my/zixun.png'
import * as actions from '@actions/user'
import * as nearUseActions from '@actions/nearUse'
import * as spaceActions from '@actions/space'

import './my.scss'


const list = [
  {
    img: `background: url(${zhengjian});background-size: 100% 100%`,
    text: '我的证件',
    value: 0
    // ishot: true
  },
  {
    img: `background: url(${banjian});background-size: 100% 100%`,
    text: '我的办件',
    value: 1
  },
  {
    img: `background: url(${pingjia});background-size: 100% 100%`,
    text: '我的评价',
    value: 2
  },
  {
    img: `background: url(${zixun});background-size: 100% 100%`,
    text: '我的咨询',
    value: 3
  },
]

// function getStorage() {
//   return new Promise(res => {
//     Taro.getStorage({
//       key: info,
//       success: function (data) {
//         res(data.data)
//       }
//     })
//   })
// }

@connect(({ user, home, space }) => ({...user, ...home, ...space}), { ...actions, ...nearUseActions, ...spaceActions})
class My extends Component {

  constructor(){
    super(...arguments)
    this.state = {
      list
    }
  }

  componentDidMount(){
    // Taro.clearStorage()
    // this.props.DSpaceInit();
  }

  componentDidShow = async () => {}
  
  // 这部分之后肯定要优化
  goWebView = (item) => {
    const { data = [] } = this.props.home.myList.apps
    if(item.value === 2 && data.length !== 0){
      const list = data.filter(item => item.name === "山东好差评")
      list.length !== 0 ? this.goWebUrl(list[0].appIssueUrl, list[0].fwusertype, list[0].name) : ''
    } else {
      Taro.showModal({
        title: '提示',
        content: `服务正在建设中尽情期待`,
        showCancel: false,
      })
    }
  }

  goWebUrl = (url, fwusertype, name) => {
    if (fwusertype === 0) {
      url ? Jump({url}) : Jump({url: '/none', payload: {name}})
    } else {
      const {token, usertype } = this.props.userInfo;
      if(usertype){
        if(usertype === fwusertype || (fwusertype !== 1 && fwusertype !== 2)){
          url ? Jump({url, payload:{token, usertype}}) : Jump({url: '/none', payload: {name}})
        } else {
          const message = fwusertype === 1 ? '个人' : '法人'
          Taro.atMessage({
            message: `当前事项只允许${message}办理`,
            type: 'error',
            duration: 2000
          }) 
        }
      }else{
        // type为false需要跳转登录
        Jump({url: '/login', payload: {payload: JSON.stringify({url, fwusertype, name})} })
      }
    }
  }

  render() {
    const { list } = this.state;
    const { login, userInfo } = this.props;

    if(Method.isObject(this.props.home)){
      return <Loading></Loading>
    }

    return (
      <View className="My">
        <Info login={login} userInfo={userInfo} />
        {/* 信息栏 */}
        <View className="My-border" />
        <View className="My-List">
          {
            list.map((item, index) => (
              <View className="My-List-center" key={index} onClick={()=>{this.goWebView(item)}}>
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
