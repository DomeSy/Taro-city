
import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { TabDetail, List } from '@components'
import Taro from '@tarojs/taro'
import { connect } from 'react-redux'

import './detail.scss'

@connect(({detail, user}) => ({...detail, ...user}))
class Detail extends Component {
  constructor(){
    super(...arguments)
  }

  static getDerivedStateFromProps(props, state){
    Taro.setNavigationBarTitle({
      title: props.detail.resourcename
    })
  }

  listAllDetail = list => {
    let data = []
    list.map(item => {
      const arr = {
        title: item[0].cardservice,
        list: item
      }
      data = [...data, arr]
    })
    return data
  }

  render() {
    const { detail:{ bgpicpath, listTabs, listAll }, userInfo } = this.props;
    const type = userInfo.usertype ? userInfo.usertype : false
    const list = this.listAllDetail(listAll)
    return (
      <View className="Detail">
        <Image className="Detail-img" src={bgpicpath}></Image>
        {
          listTabs.length === 0 ? '' : <TabDetail tab={listTabs} type={type}/>
        }
        {
          list.map((item, index) => (
            <List border title={item.title} list={item.list} key={index} type={type}/>
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

export default Detail
