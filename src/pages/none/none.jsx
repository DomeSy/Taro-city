import React, { Component } from 'react'
import { View, Text } from '@tarojs/components';
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Jump } from '@unilts';
import none from '@assets/none.png'

import './none.scss'

class None extends Component {
  constructor(){
    super(...arguments)
    this.state={
      img: `background: url(${none});background-size: 100% 100%`
    }
  }

  static getDerivedStateFromProps(props, state){
    Taro.setNavigationBarTitle({
      title: getCurrentInstance().router.params.name
    })
  }

  goDownload = () => {
    Jump({url: '/download'})
  }

  render() {
    const { img } = this.state

    return (
      <View className="None">
        <View className="None-img">
          <View className="None-img-content">
            <View className="None-img-content-imgs" style={img}></View>
            <View className="None-img-content-text">服务正在接入中，敬请期待…</View>
          </View>
        </View>
        <View className="None-tip">
          <View className="None-tip-text">您还可以下载“爱山东”APP，立即使用本项服务</View>
          <Text className="None-tip-download" onClick={() => this.goDownload()}>下载APP</Text>
        </View>
      </View>
    )
  }
}

export default None
