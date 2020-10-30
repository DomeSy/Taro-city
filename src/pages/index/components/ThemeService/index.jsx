import React, { Component } from 'react'
import { Title, ListTheme } from '@components'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import { Method } from '@unilts'

import './index.scss'

@connect(({home}) => home)
class Index extends Component {
  constructor(){
    super(...arguments)
    this.state = {

    }
  }

  render() {
    let list = []
    if(!Method.isObject(this.props.home)){
      let { themeserveList } = this.props.home
      list = themeserveList.listAll.length === 0 ? themeserveList : themeserveList.listAll;
    }
    return (
      <View className="ThemeService">
        <Title title="主题服务" />
        <ListTheme list={list} />
      </View>
    );
  }
}

export default Index;
