import React from 'react'
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui'

import './index.scss'

function Index({title = '提交', onClick}){

  const click = () => {
    onClick ? onClick() : ''
  }

  return (
    <View className="DButton">
      <AtButton type='primary' className="DButton-btn" onClick={() => click()}>{title}</AtButton>
    </View>
  )
}

export default Index;
