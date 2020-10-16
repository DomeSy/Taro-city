import React, { Component } from 'react'
import { View } from '@tarojs/components';
import './card.scss'
import { CardAll } from '@components'

class Card extends Component {
  constructor(){
    super(...arguments)
  }
  render() {

    return (
      <View className="Card">
        <View className="Card-tip">*左滑可取消订阅；长按拖地可改变证照排序</View>
        <CardAll />
        <View className="Card-btn">
           + 添加订阅
        </View>
      </View>
    )
  }
}

export default Card
