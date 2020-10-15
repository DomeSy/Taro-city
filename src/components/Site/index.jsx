import React from 'react'
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui'

import './index.scss'

function Index(){

  return (
    <View className="DSite">
      <View className="text">
        济南市
      </View>
      <AtIcon value='chevron-down' size='24' color='rgba(123,123,123,1)'></AtIcon>
    </View>
  )
}

export default Index;
