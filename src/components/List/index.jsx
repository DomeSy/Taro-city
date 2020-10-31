import React from 'react'
import { View } from '@tarojs/components'
import { Jump } from '@unilts'
import { AtIcon } from 'taro-ui'

import './index.scss'

/*
  title: 标题名
  list：渲染的数组
    name: 主标题
    effect: 副标题（取代箭头）
    isHot:增加文字后的图片
  border: 若有则有个向上的8px的间距
  no:不让跳转
*/ 
function Index({title, list = [], border, no}){

  // fwusertype:需要判断法人的事件还是个人的，为1个人，为2法人
  const goWebView = (url, fwusertype, name) => {
    if(no) return;
    Jump({url: '/none', payload: {name}})
    // url ? Jump({url}) : Jump({url: '/none', payload: {name}})
  }
  
  return (
    <View className="DList" style={border ? 'border-top: 8px solid #f5f5f5' : ''}>
      {
        title ? <View className="DList-title">{title}</View> : ''
      }
      {
        list.map((item, index) => (
          <View className="DList-list" key={index+"DList"} onClick={() => goWebView(item.appIssueUrl, item.fwusertype, item.name)}>
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
