import React from 'react'
import { View } from '@tarojs/components'
import { Jump } from '@unilts'
import Taro from '@tarojs/taro'
import { AtIcon, AtMessage } from 'taro-ui'

import './index.scss'

/*
  title: 标题名
  list：渲染的数组
    name: 主标题
    effect: 副标题（取代箭头）
    isHot:增加文字后的图片
  border: 若有则有个向上的8px的间距
  no:不让跳转
  type:判断是否是个人法人类型
*/ 
function Index({title, list = [], border, no, type, onChang}){

  // fwusertype:需要判断法人的事件还是个人的，为0游客 1个人，为2法人,3:个人法人
  const goWebView = (url, fwusertype, name, isHot) => {
    if(no) return;
    onChang ? onChang({url, fwusertype, name, isHot}) : ''
    if (fwusertype === 0) {
      url ? Jump({url}) : Jump({url: '/none', payload: {name}})
    } else {
      if(type){
        if(type === fwusertype || (fwusertype !== 1 && fwusertype !== 2)){
          url ? Jump({url}) : Jump({url: '/none', payload: {name}})
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
        Jump({url: '/login', payload: {go: JSON.stringify({url, fwusertype})}})
      }
    }
  }
  
  return (
    <View className="DList" style={border ? 'border-top: 8px solid #f5f5f5' : ''}>
      <AtMessage />
      {
        title ? <View className="DList-title">{title}</View> : ''
      }
      {
        list.map((item, index) => (
          <View className="DList-list" key={index+"DList"} onClick={() => goWebView(item.appIssueUrl, item.fwusertype, item.name, item.isHot)}>
            <View className="DList-list-content" >
              <View className="DList-list-content-text">{item.name}</View>
              {
                item.isHot === 1 ? <View className="DList-list-content-hot"></View> : ''
              }
            </View>
            {
              item.effect ? <View className="DList-list-effect">{item.effect}</View> : <AtIcon value='chevron-right' size='18' color='#CCCCCC'></AtIcon>
            }
          </View>
        ))
      }
    </View>
  )
}

export default Index;
