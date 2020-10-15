import React from 'react'
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui'

import './index.scss'

function Index({title = '我是标题', effectTitle = '全部', none}){

  return (
    <View className="DTitle">
      <View className="title">{title}</View>
      {
        none ? '' :
        <View className="all">
          <View className="all-text">{effectTitle}</View>
          <AtIcon value='chevron-right' size='10' color='#999999'></AtIcon>
        </View>
      }
    </View>
  )
}

export default Index;
