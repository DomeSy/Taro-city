import React, { Component } from 'react'
import { View } from '@tarojs/components';
import { ListShowText, TipEffect } from '@components'
import './medical.scss'

class Card extends Component {
  constructor(){
    super(...arguments)

    this.state = {
      list: [
        {
          name: '账户余额（元）：',
          text: '9999.99'
        },
        {
          name: '累计缴纳（月）：',
          text: '9999.99'
        },
        {
          name: '现缴纳地：',
          text: '9999.99'
        }
      ]
    }
  }
  render() {
    const { list } = this.state;

    return (
      <View className="Medical">
        <View className="Medical-img">
          <View className="Medical-img-name">*嘉利</View>
          <View className="Medical-img-sfz">身份证号：37**************89</View>
        </View>
        <ListShowText list={list}/>
        <View className="Medical-tip">
          <View className="Medical-tip-text">本服务由山东省医保局提供服务</View>
        </View>
      </View>
    )
  }
}

export default Card
