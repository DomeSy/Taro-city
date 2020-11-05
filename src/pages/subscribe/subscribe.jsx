import React, { Component } from 'react'
import { View } from '@tarojs/components';
import { Jump } from '@unilts';

import './subscribe.scss'

class Subscribe extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      list: [
        {
          title: '我的养老保险',
          sign: 'pension'
        },
        // {
        //   title: '我的医保',
        //   // img: false
        // },
        // {
        //   title: '我的医保',
        // }
      ]
    }
  }
  render() {

    const { list } = this.state;

    return (
      <View className="Subscribe">
        <View className="Subscribe-title">
          <View className="Subscribe-title-text">添加授权</View>
          <View className="Subscribe-title-administration" onClick={() => Jump({url: '/authorization'})}>管理我的授权</View>
        </View>
        {
          list.map((item, index) => (
            <View className="Subscribe-list" key={index}>
              <View className="Subscribe-list-title">
                <View className="Subscribe-list-title-left">
                  <View className="Subscribe-list-title-left-title">{item.title}</View>
                  {
                    item.img ? <View className="Subscribe-list-title-left-img" ></View> : ''
                  }
                </View>
                <View className="Subscribe-list-title-add" onClick={() => Jump({url: '/safekeeping', payload: {sign: item.sign}})}>授权</View>
              </View>
              <View className="Subscribe-list-tip">授权后可查看账户余额等缓存信息</View>
            </View>
          ))
        }
        <View className="Subscribe-tip">更多服务陆续接入中…</View>
      </View>
    )
  }
}

export default Subscribe
