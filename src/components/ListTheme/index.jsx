import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { Jump } from '@unilts'
import * as actions from '@actions/detail'
import { connect } from 'react-redux'

import './index.scss'

@connect(({detail}) => detail,{...actions})
class Index extends Component {
  constructor(){
    super(...arguments)
    this.state={
      
    }
  }

  getEffectText = (data) => {
    let text = ''
    data.map((item, index) => {
      if (index === data.length - 1) {
        text += item.name
      } else {
        text += item.name + '、'
      }
    })
    return text
  }

  goDetail = (item) => {
    this.props.DDetailInit(item)
    Jump({url:'/detail'})
  }

  render() {
    const list = this.props.list || [];

    return (
      <View className="DListTheme">
        {
          list.map((item, index) => (
            <View className="DListTheme-them" key={index} onClick={() => this.goDetail(item)}>
              <Image className="DListTheme-them-img" src={item.cateimgurl}></Image>
              <View className="DListTheme-them-detail">
                <View className="DListTheme-them-detail-title">
                  {item.resourcename}
                </View>
                <View className="DListTheme-them-detail-text">
                  {
                    this.getEffectText(item.apps.data)
                  }
                </View>
              </View>
            </View>
          ))
        }
      </View>
    );
  }
}

export default Index;