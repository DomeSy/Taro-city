import React, { Component } from 'react'
import { View } from '@tarojs/components';
import './download.scss'

class Download extends Component {
  constructor(){
    super(...arguments)

    // console.log()
  }
  render() {

    return (
      <View className="Download">
        <View className="Download-text1">一、 通过应用市场下载</View>
        <View className="Download-text2">通过手机应用市场（安卓如应用宝、华为应用市场等，iPhone 通过App Store）搜索关键词“爱山东”，即可下载安装。</View>
        <View className="Download-img"></View>
        <View className="Download-text1">二、 扫码下载</View>
        <View className="Download-text2">您还可以扫描下方二维码，下载“爱山东”客户端。</View>
        <View>二维码</View>
      </View>
    )
  }
}

export default IndeDownloadx
