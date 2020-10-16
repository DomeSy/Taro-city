import React, { Component } from 'react'
import { View } from '@tarojs/components';
import './matter.scss'

class Card extends Component {
  constructor(){
    super(...arguments)
    this.state={
      list: [
        {
          text: '申报号：',
          value: '130101000407458'
        },
        {
          text: '事项名称：',
          value: '130101000407458'
        },
        {
          text: '申报名称：',
          value: '130101000407458'
        },
        {
          text: '申报名称：',
          value: '130101000407458'
        },
        {
          text: '申报名称：',
          value: '130101000407458'
        },
        {
          text: '办理状态：',
          value: '我哦哦哦哦哦哦哦我哦哦哦哦哦哦哦我哦哦哦哦哦哦哦我哦哦哦哦哦哦哦'
        }
      ]
    }
  }
  
  render() {

    const { list } = this.state

    return (
      <View className="Matter">
        <View className="Matter-table">
          {
            list.map((item, index) => (
              <View className="Matter-table-list" key={index}>
                <View className="Matter-table-list-text">{item.text}</View>
                <View className="Matter-table-list-value">{item.value}</View>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}

export default Card
