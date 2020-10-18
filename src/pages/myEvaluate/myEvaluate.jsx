import React, { Component } from 'react'
import { View } from '@tarojs/components';
import './myEvaluate.scss'

class MyEvaluate extends Component {
  constructor(){
    super(...arguments)

  }
  render() {

    return (
      <View className="MyEvaluate">
        我的评价提交
      </View>
    )
  }
}

export default MyEvaluate
