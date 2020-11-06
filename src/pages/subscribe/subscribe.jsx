import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Jump } from '@unilts'
import Taro from '@tarojs/taro'
import { connect } from 'react-redux'

import './subscribe.scss'

@connect(({space}) => space)
class Subscribe extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      list: [
        {
          title: '养老保险',
          sign: 'pension'
        },
      ]
    }
  }

  getData = (spaceAll, list) => {
    let result = false
    spaceAll.map(item => {
      if(item.Dsign === list.sign){
        result = true
        return
      }
    })
    return result
  }

  goSubscribe = (item) => {
    const spaceAll = this.props.space.spaceAll || []
    if(spaceAll.length !== 0){
      const res = this.getData(spaceAll, item);
      if(res){
        Taro.showModal({
          title: '提示',
          content: '您已授权过当前服务，重新授权会覆盖之前的授权关系，是否重新授权',
        }).then(res => {
          if(res.confirm){
            Jump({url: '/safekeeping', payload: {sign: item.sign, title: item.title}})
          }
        })
        return
      }
    }
    Jump({url: '/safekeeping', payload: {sign: item.sign, title: item.title}})
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
                  <View className="Subscribe-list-title-left-title">我的{item.title}</View>
                  {
                    item.img ? <View className="Subscribe-list-title-left-img" ></View> : ''
                  }
                </View>
                <View className="Subscribe-list-title-add" onClick={() => this.goSubscribe(item)}>授权</View>
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
