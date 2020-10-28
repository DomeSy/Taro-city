import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Title } from '@components'
import { connect } from 'react-redux'
import { Method } from '@unilts'

import './index.scss'

@connect(({ home }) => home)
class Index extends Component {
  constructor(){
    super(...arguments)
    this.state = {

    }
  }

  async componentDidUpdate(){
    const { cols } = this.props.home
    const data = await Method.JmasData(cols, '热门应用')
  }
  render() {
    return (
      <View className="Theme">
        <Title title="主题专区" />
        <View className="Theme-conent">
          <View className="Theme-conent-top">
            <View className="Theme-conent-top-left"></View>
            <View className="Theme-conent-top-right">
              <View className="Theme-conent-top-right-t"></View>
              <View className="Theme-conent-top-right-b"></View>
            </View>
          </View>
          <View className="Theme-conent-buttom">
            <View className="Theme-conent-buttom-left"></View>
            <View className="Theme-conent-buttom-right"></View>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
