import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import { Method, Jump } from '@unilts'
import Taro from '@tarojs/taro'
import { AtMessage } from 'taro-ui'

import './index.scss'

const number = 6
@connect(({nearUse, user}) => ({...nearUse, ...user}))
class Index extends Component {
  constructor(){
    super(...arguments)
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

  render() {
    let { nearUse, userInfo:{usertype} } = this.props;
    nearUse = nearUse.length <= number ? nearUse : Method.Intercept(nearUse, number)

    return (
      <View className="DListUseTime">
        <AtMessage />
        {
          nearUse.map((item, index) => (
            <View className="DListUseTime-list" key={index} onClick={() => this.goWebView(item.url, item.fwusertype, item.name, usertype, item.token)}>
              <View className="DListUseTime-list-img"></View>
              <View className="DListUseTime-list-detail">
                <View className="DListUseTime-list-detail-text">{item.name}</View>
                {
                  item.isHot === 1 && item.name.length < 8 ? <View className="DListUseTime-list-detail-hot" ></View> : ''
                }
              </View>
            </View>
          ))
        }
      </View>
    );
  }
}

export default Index;
