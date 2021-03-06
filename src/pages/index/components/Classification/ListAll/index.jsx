import React from 'react'
import { View, Image } from '@tarojs/components'
import { Method, Jump } from '@unilts'
import { AtMessage } from 'taro-ui'
import Taro from '@tarojs/taro'
import allPic from '@assets/home/all.png'

import './index.scss'

// 个数
const number = 7

function Index({ list = [], type = false, token, fn }){

  list = list.length <= number ? list : Method.Intercept(list, number)

  // Jump({url: item.appIssueUrl})

  const goWebView = item => {
    const { appIssueUrl, fwusertype, name } = item
    if( fwusertype === 0 ) {
      Jump({url: appIssueUrl})
    } else {
      if(type){
        if(type === fwusertype || (fwusertype !== 1 && fwusertype !== 2)){
          appIssueUrl ? Jump({url: appIssueUrl, payload:{token, usertype: type}}) : Jump({url: '/none', payload: {name}})
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
        // fwusertype为2是法人，其他是个人或者个人和法人，这种情况默认是个人，走快登，法人走正常的登录逻辑,要使用状态提升，原因是跳转的时候用了type, token
        fwusertype === 2 ? Jump({url: '/login', payload: {payload: JSON.stringify({url: appIssueUrl, fwusertype, name})} }) : fn({url: appIssueUrl, name})
      }
    }
  }

  return (
    <View className="DListAll">
      <AtMessage />
      {list.map((item, index) => (
        <View key={index} className="list" onClick={() => goWebView(item)}>
          <View className="img">
            <Image src={item.iconUrl} className="imgUrl" />
          </View>
          <View className="text">{item.name.length < 9 ? item.name : `${item.name.substring(0,9)}...`}</View>
        </View>
      ))}
      <View className="list" onClick={() => Jump({url: '/service', method: 'switchTab'})}>
        <View className="img">
          <Image src={allPic} className="imgUrl" />
        </View>
        <View className="text">全部服务</View>
      </View>
    </View>
  )
}

export default Index;
