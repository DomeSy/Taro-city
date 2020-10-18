import React, { Component } from 'react'
import { View } from '@tarojs/components';
import './opinion.scss'

class Opinion extends Component {
  constructor(){
    super(...arguments)

  }
  render() {

    return (
      <View className="Opinion">
        意见反馈
      </View>
    )
  }
}

export default Opinion
