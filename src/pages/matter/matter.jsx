import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Tabs } from '@components'
import './matter.scss'

class Matter extends Component {
  constructor(){
    super(...arguments)
    this.state={
      list:[
        {
          text: '绑定驾驶证',
          active: true
        },
        {
          text: '绑定驾驶证1',
          active: false
        },
        {
          text: '绑定驾驶证12',
          active: false
        }
      ],
      listText:[
        {
          text: '关于解庆国涉路工程建设许可（新增平交道口）的业务',
          time: '2020-06-22'
        },
        {
          text: '关于解庆国涉路工程建设许可（新增平交道口）的业务关于解庆国涉路工程建设许可（新增平交道口）的业务',
          time: '2020-06-22'
        }
      ]
    }
  }
  
  render() {

    const { list, listText } = this.state

    return (
      <View className="Matter">
        <Tabs list={list} />
        {
          listText.map((item, index) => (
            <View className="Matter-list" key={index}>
              <View className="Matter-list-text">{item.text}</View>
              <View className="Matter-list-time">{item.time}</View>
            </View>
          ))
        }
      </View>
    )
  }
}

export default Matter
