import React, { Component } from 'react'
import { View, Image } from '@tarojs/components';
import './special.scss'
import { Tip } from '@components'
import * as actions from '@actions/detail'
import { Jump } from '@unilts'
import { connect } from 'react-redux'

@connect(({home}) => home, {...actions})
class Special extends Component {
  constructor(){
    super(...arguments)
    this.state = {}
  }

  goWebView = list => {
    const { data } = list.apps;
    if(data.length === 1){
      Jump({url: data[0].appIssueUrl})
    }else{
      this.props.DDetailInit(list)
      Jump({url:'/detail', payload: {noTitle: true}})
    }
  }

  render() {
    
    let { themeList } = this.props.home
    themeList = themeList.listAll.length === 0 ? themeList : themeList.listAll;

    return (
      <View className="Special">
        <View className="Special-list">
          {
            themeList.map((item, index) => (
              <Image className="Special-list-img" key={index} src={item.bgpicpath} onClick={() => this.goWebView(item)}></Image>
            ))
          }
        </View>
        <View className="Special-tip">
          <Tip />
        </View>
      </View>
    )
  }
}

export default Special
