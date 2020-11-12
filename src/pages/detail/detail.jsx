
import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { TabDetail, List } from '@components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { connect } from 'react-redux'
import { Jump } from '@unilts'
import * as actions from '@actions/nearUse'

import './detail.scss'

@connect(({detail, user, nearUse}) => ({...detail, ...user, ...nearUse}), {...actions})
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

  Listall = (value) => {
    const { DNearSet, nearUse, login } = this.props;
    const arr = nearUse.filter(item => item.name !== value.name)
    const list = [value, ...arr];
    login ? DNearSet(list) : ''
  }

  render() {
    const { detail:{ bgpicpath, listTabs, listAll, resourcename }, userInfo } = this.props;
    const type = userInfo.usertype ? userInfo.usertype : false
    const token = userInfo.token ? userInfo.token : false
    const list = this.listAllDetail(listAll)
    const { noTitle } = getCurrentInstance().router.params

    return (
      <View className="Detail">
        <View className="Detail-content">
          {
            noTitle ? '': <View className="Detail-title">
              <View className="Detail-title-name">{resourcename}</View>
              <View className="Detail-title-tip">欢迎使用{resourcename}服务</View>
            </View>
          }
          
          <Image className="Detail-content-img" src={bgpicpath}></Image>
          {
            listTabs.length === 0 ? '' : <TabDetail tab={listTabs} token={token} type={type} onChang={this.Listall}/>
          }
          {
            list.map((item, index) => (
              <List border title={item.title} list={item.list} key={index} token={token} type={type} onChang={this.Listall}/>
            ))
          }
        </View>
        <View className="Detail-buttom">
          <View className="Detail-buttom-text">*更多服务，尽在“爱山东”APP。</View>
          <View className="Detail-buttom-download" onClick={() => Jump({url: '/download'})}>如何下载？</View>
        </View>
      </View>
    )
  }
}

export default Detail
