import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import * as spaceActions from '@actions/space'

import './authorization.scss'

@connect(({space}) => space, {...spaceActions})
class Authorization extends Component {
  constructor(){
    super(...arguments)
    this.state = {}
  }

  cancel = sign => {
    this.props.DSpaceCancel({sign})
  }

  render() {
    const spaceAll = this.props.space.spaceAll || []

    return (
      <View className="Authorization">
        <View className="Authorization-text">已授权的空间服务：</View>
        {
          spaceAll.length !== 0 ? 
          <>
            {
              spaceAll.map((item, index) => (
                <View className="Authorization-list" key={index}>
                  <View className="Authorization-list-text">
                    <View className="Authorization-list-text-name">我的{item.Dname}</View>
                    <View className="Authorization-list-text-cancel" onClick={() => this.cancel(item.Dsign)}>取消授权</View>
                  </View>
                  <View className="Authorization-list-area">
                    <View className="Authorization-list-area-name">缴存地：</View>
                    <View className="Authorization-list-area-text">{item.Darea}</View>
                  </View>
                </View>
              ))
            }
          </>
          :
          <View className="Authorization-tip">暂无内容....</View>
        }
      </View>
    )
  }
}

export default Authorization
