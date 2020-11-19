import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Title, ListTheme } from '@components'
import { connect } from 'react-redux'
import { Method } from '@unilts'

import './index.scss'

@connect(({home}) => home)
class Index extends Component {
  constructor(){
    super(...arguments)
  }

  render() {
    let list = [];
    if(!Method.isObject(this.props.home)){
      let {  themeserveList } = this.props.home;
      list = themeserveList.listAll.length === 0 ? themeserveList : themeserveList.listAll;
    }

    return (
      <View className="ServerList">
        <Title title="主题服务" none/>
        <ListTheme list={list}/>
      </View>
    );
  }
}

export default Index;
