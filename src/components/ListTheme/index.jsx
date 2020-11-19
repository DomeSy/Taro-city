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
    const gongge = this.props.gongge || false;
    return (
      <View className={gongge ? "DListTheme DlistThemeGongge" : "DListTheme"}>
        {
          list.map((item, index) => (
            <View className={gongge ? "DListTheme-them DListTheme-gongge" : "DListTheme-them"} key={index} onClick={() => this.goDetail(item)}>
              {
                gongge ? 
                <> 
                  <View className="DListTheme-gongge-conent">
                    <Image className="DListTheme-gongge-conent-img" src={item.cateimgurl}></Image>
                    <View className="DListTheme-gongge-conent-text">{item.resourcename < 6 ? item.resourcename : `${item.resourcename.substring(0,4)}...`}</View>
                  </View>
                </> :
                <> 
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
                </>
              }
            </View>
          ))
        }
      </View>
    );
  }
}

export default Index;