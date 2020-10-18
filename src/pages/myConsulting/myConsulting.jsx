import React, { Component } from 'react'
import { View } from '@tarojs/components';
import './myConsulting.scss'

class MyConsulting extends Component {
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
      <View className="MyConsulting">
        <View className="MyConsulting-table">
          {
            list.map((item, index) => (
              <View className="MyConsulting-table-list" key={index}>
                <View className="MyConsulting-table-list-text">{item.text}</View>
                <View className="MyConsulting-table-list-value">{item.value}</View>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}

export default MyConsulting
