import React, { Component } from 'react'
import { View } from '@tarojs/components';
import { Tabs, ListText } from '@components';
import './myEvaluate.scss'

class MyEvaluate extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      list: [
        {
          text: '已评价',
          active: true
        },
        {
          text: '待评价',
          active: false
        },
        {
          text: '超期为评价',
          active: false
        }
      ],
      listEval:[
        {
          title: '补办身份证',
          rate: 3,
          list:[
            {
              text: '办件机构：',
              effect: '历城区公安局'
            },
            {
              text: '办件机构：',
              effect: '历城区公安局'
            }
          ]
        },
        {
          title: '补办身份证',
          rate: 5,
          list:[
            {
              text: '办件机构：',
              effect: '历城区公安局'
            },
            {
              text: '办件机构：',
              effect: '历城区公安局'
            }
          ]
        }
      ],
      listNone: [
        {
          title: '补办身份证',
          list: [
            {
              text: '办件机构：',
              effect: '历城区公安局',
              padding: true,
              evaluate: '评价'
            }
          ]
        }
      ],
      listOver: [
        {
          title: '补办身份证',
          list: [
            {
              text: '办件机构：',
              effect: '历城区公安局',
              padding: true
            }
          ]
        }
      ]
    }
  }

  render() {

    const { list, listEval, listNone } = this.state

    return (
      <View className="MyEvaluate">
        <Tabs list={list} />
        {/* 已评价的 */}
        {/* <View className="MyEvaluate-Tabs">
          <View className="MyEvaluate-Tabs-text MyEvaluate-Tabs-active">全部</View>
          <View className="MyEvaluate-Tabs-text">好评</View>
          <View className="MyEvaluate-Tabs-text">差评</View>
        </View>
        <View className="MyEvaluate-border"></View>
        <ListText list={listEval}/> */}
        {/* 待评价 */}
        <View className="MyEvaluate-border"></View>
        <ListText list={listNone} />
        {/* 超期未评价 */}
        {/* <View className="MyEvaluate-border"></View>
        <ListText list={listOver} /> */}
      </View>
    )
  }
}

export default MyEvaluate
