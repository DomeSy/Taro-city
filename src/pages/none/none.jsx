import React, { Component } from 'react'
import { View } from '@tarojs/components';
import './none.scss'

class None extends Component {
  constructor(){
    super(...arguments)

  }
  render() {

    return (
      <View className="None">
        正在建设
      </View>
    )
  }
}

export default None
