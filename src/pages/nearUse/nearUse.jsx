
import React, { Component } from 'react'
import { View } from '@tarojs/components';
import './nearUse.scss'

class NearUse extends Component {
  constructor(){
    super(...arguments)

  }
  render() {

    return (
      <View className="NearUse">
        近期使用
      </View>
    )
  }
}

export default NearUse
