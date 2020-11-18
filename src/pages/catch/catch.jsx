import React, { Component } from 'react'
import { View, Text } from '@tarojs/components';
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Jump } from '@unilts';
import none from '@assets/none.png'

import './catch.scss'

class Catch extends Component {
  constructor(){
    super(...arguments)
    this.state={
    }
  }

  render() {

    return (
      <View className="None">
      异常页面
      </View>
    )
  }
}

export default Catch
