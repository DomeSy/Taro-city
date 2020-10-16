import React, { Component } from 'react'
import { View } from '@tarojs/components';
import { List } from '@components';

import './enclosure.scss'

class Card extends Component {
  constructor(props){
    super(props)
    // console.log()
    this.state = {
      list: [
        {
          text: '山东省',
          effect: '暂未开放'
        },
        {
          text: '山东省'
        }
      ]
    }
  }
  render() {
    const { list } = this.state

    return (
      <View>
        <List list={list}/>
      </View>
    )
  }
}

export default Card
