import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtFloatLayout, AtIcon } from "taro-ui"
import { site } from '@unilts/site';

import './index.scss'

class Index extends Component {

  constructor(){
    super(...arguments)
    this.state = {
      title: '',
      area: site,
      open: false
    }
  }

  static getDerivedStateFromProps (nextPrev, state) {
    const { active } = nextPrev;
    const { area } = state;
    const listAll = area.map(item => {
      item.active = item.area === active.area ? true : false;
      return item
    })
    return {
      title: active.area,
      aera: listAll
    }
  }

  onArea = (item, area) => {
    if (!item.active) {
      const arr = area.map(items => {
        items.active = items.area == item.area ? true : false;
        return items
      })
      this.setState({
        area: arr,
        open: false,
        title: item.area
      })
      this.props.onChange({area: item.area, siteid: item.siteid})
    } else {
      this.setState({
        open: false
      })
    }
  }

  render() {
    const { title, area, open } = this.state;

    return (
      <>
        <AtFloatLayout isOpened={open} title="选择城市">
          <View className="DSite-site">
            {
              area.map((item, index) => (
                <View 
                  className={item.active ? "DSite-site-area DSite-site-active" :  "DSite-site-area"}
                  key={index}
                  onClick={() => {this.onArea(item, area)}}
                >
                {item.area}
                </View>
              ))
            }
          </View>
        </AtFloatLayout>
        <View className="DSite" onClick={() => {this.setState({open: true})}}>
          <View className="DSite-text">
            {title}
          </View>
          <AtIcon value='chevron-down' size='24' color='rgba(123,123,123,1)'></AtIcon>
        </View>
      </>
    )
  }
}

export default Index
