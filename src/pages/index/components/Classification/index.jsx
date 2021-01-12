import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { TitleBig } from '@components'
import ListAll from './ListAll'
import { connect } from 'react-redux'
import { Method, Jump } from '@unilts'
import * as userActions from '@actions/user'
import './index.scss'

@connect(({ home, user }) => ({...home, ...user}), {...userActions})
class Index extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      titleList: [
        {
          text: '热门',
          value: 0,
          isUnder: true
        },
        {
          text: '上新',
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

  quickLogin = async (e) => {
    await this.props.dispatchQuickLogin();
    const { url, name } = e;
    const { usertype, token } = this.props.userInfo;
    url ? Jump({url, payload:{token, usertype}}) : Jump({url: '/none', payload: {name}})
  }

  render() {
    const { titleList, value } = this.state;
    const { userInfo:{usertype, token} } = this.props;
    let list = [];
    if(!Method.isObject(this.props.home)){
      let { hotList, newList } = this.props.home
      hotList = hotList.listAll.length === 0 ? hotList : hotList.listAll;
      newList = newList.listAll.length === 0 ? newList : newList.listAll;
      list = value === 0 ? hotList.apps.data : newList.apps.data;
    }

    return (
      <View className="Classification">
        <TitleBig list={titleList} onChang={this.onChang}/>
        <ListAll list={list} type={usertype} fn={(e) => this.quickLogin(e)} token={token}/>
      </View>
    );
  }
}

export default Index;
