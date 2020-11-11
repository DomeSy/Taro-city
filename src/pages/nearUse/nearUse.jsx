
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import { Jump } from '@unilts'
import Taro from '@tarojs/taro'
import { AtMessage } from 'taro-ui'
import * as actions from '@actions/nearUse'

import './nearUse.scss'


@connect(({nearUse, user}) => ({...nearUse, ...user}), {...actions})
class NearUse extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      list: [
        {
          text: `高考成绩查询1`,
          img: true
        },
        {
          text: `高考成绩查询`
        },
        {
          text: `病例与可能密切接触我我哦`,
        }
      ]
    }
  }

  componentDidMount(){
    this.props.DNearInit()
  }

  goWebView = (url, fwusertype, name, type, token) => {
    if (fwusertype === 0) {
      url ? Jump({url}) : Jump({url: '/none', payload: {name}})
    } else {
      if(type === fwusertype || (fwusertype !== 1 && fwusertype !== 2)){
        url ? Jump({url, payload:{token, usertype: type}}) : Jump({url: '/none', payload: {name}})
      } else {
        const message = fwusertype === 1 ? '个人' : '法人'
        Taro.atMessage({
          message: `当前事项只允许${message}办理`,
          type: 'error',
          duration: 2000
        }) 
      }
    }
  }

  // 删除记录
  closeLog = (index) => {
    const { nearUse, DNearSet } = this.props;
    nearUse.splice(index, 1)
    DNearSet(nearUse)
  }

  render() {

    let { nearUse, userInfo:{usertype}, DNearClear } = this.props;

    return (
      <View className="NearUse">
        <AtMessage />
        <View className="NearUse-tip">
          <View className="NearUse-tip-text">您最近使用过的服务有：</View>
          <View className="NearUse-tip-img" onClick={() => DNearClear()}>一键清空</View>
        </View>
        {
          nearUse.length === 0 ? <View className="NearUse-none">暂无使用服务</View> :
          <>
            {
              nearUse.map((item, index) => (
                <View className="NearUse-list" key={index}>
                  <View  className="NearUse-list-content" onClick={() => this.goWebView(item.url, item.fwusertype, item.name, usertype, item.token)}>
                    <View className="NearUse-list-content-radius"></View>
                    <View className="NearUse-list-content-text">{item.name.length > 15 ? item.name.substring(0,14) + '...' : item.name}</View>
                    { item.name.length < 15 && item.isHot === 1 ? <View className="NearUse-list-content-img"></View> : '' }
                  </View>
                  <View  className="NearUse-list-none at-icon at-icon-close" onClick={() => this.closeLog(index)}></View>
                </View>
              ))
            }
          </>
        }
      </View>
    )
  }
}

export default NearUse
