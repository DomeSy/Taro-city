import React, { Component } from 'react'
import { Title, ListTheme } from '@components'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import { Method } from '@unilts'

import './index.scss'

const number = 3;
@connect(({home}) => home)
class Index extends Component {
  constructor(){
    super(...arguments)
    this.state = {

    }
  }

  render() {
    let list = []
    let { themeserveList } = this.props.home;
    if(!Method.isObject(this.props.home) && themeserveList){
      list = themeserveList.listAll.length === 0 ? themeserveList : themeserveList.listAll;
      list = list.length <= number ? list : Method.Intercept(list, number)
    }
    return (
      <View className="ThemeService" >
        {
          themeserveList ?  <Title title="主题服务" url='/service' switchTab/> : ''
        }
        <ListTheme list={list} gongge/>
      </View>
    );
  }
}

export default Index;
