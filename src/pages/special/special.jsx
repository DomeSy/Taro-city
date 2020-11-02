import React, { Component } from 'react'
import { View, Image } from '@tarojs/components';
import './special.scss'
import { Tip } from '@components'
import banner from '@assets/banner.png'
import { connect } from 'react-redux';

@connect(({home}) => home)
class Special extends Component {
  constructor(){
    super(...arguments)
    this.state = {}
  }
  render() {
    
    let { themeList } = this.props.home
    themeList = themeList.listAll.length === 0 ? themeList : themeList.listAll;

    return (
      <View className="Special">
        <View className="Special-list">
          {
            themeList.map((item, index) => (
              <Image className="Special-list-img" key={index} src={item.cateimgurl}></Image>
            ))
          }
        </View>
        <Tip />
      </View>
    )
  }
}

export default Special
