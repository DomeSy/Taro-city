import React, { Component } from 'react'
import { View } from '@tarojs/components';
import './consulting.scss'
import { ListText } from '@components';

class Consulting extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      list: [
        {
          title: '爱山东测试',
          list: [
            {
              text: '提交时间：',
              effect: '2020-08-25 16:32'
            },
            {
              text: '提交时间：',
              effect: '2020-08-25 16:32'
            }
          ]
        },
        {
          title: '爱山东测试',
          list: [
            {
              text: '提交时间：',
              effect: '2020-08-25 16:32'
            },
            {
              text: '提交时间：',
              effect: '2020-08-25 16:32'
            }
          ]
        }
      ]
    }
  }
  render() {

    const { list } = this.state

    return (
      <View>
        <ListText list={list} />
      </View>
    )
  }
}

export default Consulting
