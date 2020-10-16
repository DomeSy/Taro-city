
import React, { Component } from 'react'
import { View } from '@tarojs/components';
import { TabDetail, List } from '@components'
import './detail.scss'
import banner from '@assets/banner.png'
import hot from '@assets/hot.png'



class Card extends Component {
  constructor(){
    super(...arguments)

    this.state = {
      img: `background: url(${banner});background-size: 100% 100%`,
      data: [
        {
          title: '机动车业务',
          list: [
            {
              text: `注册用户机动车驾驶证查询`,
              img : `background: url(${hot});background-size: 100% 100%`
            },
            {
              text: `注册用户机动车驾驶证查询`,
              // img : `background: url(${hot});background-size: 100% 100%`
            },
            {
              text: `注册用户机动车驾驶证查询哦我代`,
              img : `background: url(${hot});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '机动车业务1',
          list: [
            {
              text: `注册用户机动车驾驶证查询1`,
              img : `background: url(${hot});background-size: 100% 100%`
            },
            {
              text: `注册用户机动车驾驶证查询1`,
              // img : `background: url(${hot});background-size: 100% 100%`
            },
            {
              text: `注册用户机动车驾驶证查询哦我代注册用户机动车驾驶证查询哦我代11`,
              // img : `background: url(${hot});background-size: 100% 100%`
            }
          ]
        }
      ]
    }
  }

  render() {
    const { img, data } = this.state;
    return (
      <View className="Detail">
        <View className="Detail-img" style={img}></View>
        <TabDetail />
        {
          data.map((item, index) => (
            <List border title={item.title} list={item.list} key={index}/>
          ))
        }
        <View className="Detail-buttom">
          <View className="Detail-buttom-text">*更多服务，尽在“爱山东”APP。</View>
          <View className="Detail-buttom-download">如何下载？</View>
        </View>
      </View>
    )
  }
}

export default Card
