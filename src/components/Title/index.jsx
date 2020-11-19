import React from 'react'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { Jump } from '@unilts'


import './index.scss'

/*
  title:标题名。
  effectTitle副标题名
  url:跳转的方式
  switchTab：存在时，则是跳转首页的
  login:是否登录，否的话跳转登录页，并实现跳转
  my: 我的页面进行跳转
  none：是否显示副标题
*/ 
function Index({title = '我是标题', effectTitle = '全部', none, url = false, login = true, switchTab, my = false, name = false}){

  const goUrl = () => {
    if(switchTab){
      Jump({url, method: 'switchTab'})
      return
    }
    if(!login){
      my ? Jump({url: '/login', payload: {payload: JSON.stringify({url, name})}}) : Jump({url: '/login', payload:{go: JSON.stringify({url})}})
      return
    }
    url ? Jump({url}) : ''
  }

  return (
    <View className="DTitle">
      <View className="title">{title}</View>
      {
        none ? '' :
        <View className="all" onClick={() => {goUrl()}}>
          <View className="all-text">{effectTitle}</View>
          <AtIcon value='chevron-right' size='10' color='#999999'></AtIcon>
        </View>
      }
    </View>
  )
}

export default Index;
