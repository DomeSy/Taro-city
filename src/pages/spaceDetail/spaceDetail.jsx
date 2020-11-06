import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { connect } from 'react-redux'
import { Method } from '@unilts'

import './spaceDetail.scss'

@connect(({space}) => space)
class SpaceDetail extends Component {
  constructor(){
    super(...arguments)
    this.state={
    }
  }

  render() {
    const { space } = this.props;
    const { sign } = getCurrentInstance().router.params
    const list = space.spaceAll.map(item => {
      if(item.Dsign === sign){
        return item
      }
    })

    Taro.setNavigationBarTitle({
      title: `我的${list[0].Dname}`
    })

    return (
      <View className="SpaceDetail">
        <View className="SpaceDetail-top">
          <View className="SpaceDetail-top-img" style={list[0].DimgDetail}>
            <View className="SpaceDetail-top-img-name">{Method.Desensit(list[0].xm, 0, 1)}</View>
            <View className="SpaceDetail-top-img-sfz">身份证号：{Method.Desensit(list[0].sfzhm, 2, list[0].sfzhm.length - 2)}</View>
          </View>
        </View>
        <View className="SpaceDetail-list">
          <View className="SpaceDetail-list-content">
            <View className="SpaceDetail-list-content-text">账户余额（元）：</View>
            <View className="SpaceDetail-list-content-area">{list[0].ljjfje}</View>
          </View>
          <View className="SpaceDetail-list-content">
            <View className="SpaceDetail-list-content-text">累计缴纳（年）：</View>
            <View className="SpaceDetail-list-content-area">{list[0].ljjfnx}</View>
          </View>
          <View className="SpaceDetail-list-content">
            <View className="SpaceDetail-list-content-text">现缴纳地 ：</View>
            <View className="SpaceDetail-list-content-area">{list[0].Darea}</View>
          </View>
        </View>
        <View className="SpaceDetail-tip">
          <View className="SpaceDetail-tip-text">{list[0].Dtip}</View>
        </View>
      </View>
    )
  }
}

export default SpaceDetail
