import React from 'react';
import { View, Image } from '@tarojs/components'
import loading from '@assets/loading.gif'
import './index.scss'

function Loading () {
  return (
    <View className='comp-loading'>
      <Image src={loading} className='comp-loading__img' />
    </View>
  )
}

export default Loading
