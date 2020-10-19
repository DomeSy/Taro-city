
import React, { Component } from 'react'
import { View } from '@tarojs/components';
import './nearUse.scss'
import hot from '@assets/hot.png'
class NearUse extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      list: [
        {
          text: `高考成绩查询1`,
          img: `background: url(${hot});background-size: 100% 100%`
        },
        {
          text: `高考成绩查询`
        },
        {
          text: `病例与可能密切接触我我哦`,
          img: `background: url(${hot});background-size: 100% 100%`
        }
      ]
    }
  }
  render() {

    const { list } = this.state;

    return (
      <View className="NearUse">
        <View className="NearUse-tip">
          <View className="NearUse-tip-text">您最近使用过的服务有：</View>
          <View className="NearUse-tip-img">一键清空</View>
        </View>
        {
          list.map((item, index) => (
            <View className="NearUse-list" key={index}>
              <View  className="NearUse-list-content">
                <View className="NearUse-list-content-radius"></View>
                <View className="NearUse-list-content-text">{item.text.length > 10 ? item.text.substring(0,9) + '...' : item.text}</View>
                { item.text.length < 10 && item.img ? <View className="NearUse-list-content-img" style={item.img}></View> : '' }
              </View>
              <View  className="NearUse-list-none at-icon at-icon-close"></View>
            </View>
          ))
        }
      </View>
    )
  }
}

export default NearUse
