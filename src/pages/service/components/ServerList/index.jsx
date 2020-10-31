import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Title, ListTheme, TitleBig } from '@components'
import { connect } from 'react-redux'
import { Method } from '@unilts'

import './index.scss'

@connect(({home}) => home)
class Index extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      titleList: [
        {
          text: '个人服务',
          value: 0,
          isUnder: true
        },
        {
          text: '法人服务',
          value: 1,
          isUnder: false
        }
      ],
      value: 0
    }
  }

  onChang = ( value ) => {
    this.setState({
      value
    })
  }

  render() {
    const { titleList, value } = this.state;
    let list = [];

    if(!Method.isObject(this.props.home)){
      let {  personList, legalList } = this.props.home;
      personList = personList.listAll.length === 0 ? personList : personList.listAll;
      legalList = legalList.listAll.length === 0 ? legalList : legalList.listAll;
      list = value === 0 ? personList : legalList;
    }

    return (
      <View className="ServerList">
        <TitleBig list={titleList} onChang={this.onChang}/>
        <ListTheme list={list}/>
      </View>
    );
  }
}

export default Index;
