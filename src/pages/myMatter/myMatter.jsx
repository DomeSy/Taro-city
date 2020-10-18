import React, { Component } from 'react'
import { View } from '@tarojs/components';
import './myMatter.scss'

class MyMatter extends Component {
  constructor(){
    super(...arguments)

  }
  render() {

    return (
      <View className="MyMatter">
        我的办件
      </View>
    )
  }
}

export default MyMatter
