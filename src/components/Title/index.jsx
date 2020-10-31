import React from 'react'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { Jump } from '@unilts'


import './index.scss'

function Index({title = '我是标题', effectTitle = '全部', none, url = false}){

  const goUrl = () => {
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
