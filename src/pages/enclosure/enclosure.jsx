import React, { Component } from 'react'
import { View } from '@tarojs/components';
import { AtIcon, AtMessage } from 'taro-ui'


import './enclosure.scss'

class Enclosure extends Component {
  constructor(){
    super(...arguments)

    this.state = {
      list: [
        {
          area: '山东省',
          effect: '暂未开放'
        },
        {
          area: '山东省'
        }
      ]
    }
  }
  render() {
    const { list } = this.state

    return (
      <View className="Enclosure">
        {
          list.map((item, index) => (
            <View className="Enclosure-area" key={index}>
              <View className="Enclosure-area-name">{item.area}</View>
              {
                item.effect ? <View className="Enclosure-area-effect">{item.effect}</View> :
                <AtIcon value='chevron-right' size='18' color='#CCCCCC'></AtIcon>
              }
            </View>
          ))
        }
      </View>
    )
  }
}

export default Enclosure
