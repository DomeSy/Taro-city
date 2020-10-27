import React, { Component } from 'react'
import { View } from '@tarojs/components';
import './special.scss'
import { Tip } from '@components'
import banner from '@assets/banner.png'

const list = [
  {
    img: `background: url(${banner});background-size: 100% 100%`,
  },
  {
    img: `background: url(${banner});background-size: 100% 100%`,
  },
  {
    img: `background: url(${banner});background-size: 100% 100%`,
  },
  {
    img: `background: url(${banner});background-size: 100% 100%`,
  },
  {
    img: `background: url(${banner});background-size: 100% 100%`,
  }
]

class Special extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      list
    }
  }
  render() {
    const { list } = this.state

    return (
      <View className="Special">
        <View className="Special-list">
          {
            list.map((item, index) => (
              <View className="Special-list-img" key={index} style={item.img}></View>
            ))
          }
        </View>
        <Tip />
      </View>
    )
  }
}

export default Special
