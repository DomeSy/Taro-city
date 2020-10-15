import React, { Component } from 'react'
import { View } from '@tarojs/components';
import './authorization.scss'

class Card extends Component {
  constructor(props){
    super(props)
    // console.log()
    this.state = {
      list: [
        {
          title:'我的医保',
          area: '济南'
        },
        {
          title:'我的医保',
          area: '济南'
        }
      ]
    }
  }
  render() {
    const { list } = this.state

    return (
      <View className="Authorization">
        <View className="Authorization-text">已授权的空间服务：</View>
        {
          list.map((item, index) => (
            <View className="Authorization-list" key={index}>
              <View className="Authorization-list-text">
                <View className="Authorization-list-text-name">{item.title}</View>
                <View className="Authorization-list-text-cancel">取消授权</View>
              </View>
              <View className="Authorization-list-area">
                <View className="Authorization-list-area-name">缴存地：</View>
                <View className="Authorization-list-area-text">{item.area}</View>
              </View>
            </View>
          ))
        }

      </View>
    )
  }
}

export default Card
