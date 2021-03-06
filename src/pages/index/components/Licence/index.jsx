import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Title } from '@components'
import { connect } from 'react-redux'
import { Method } from '@unilts'
import * as userActions from '@actions/user'

import Card from './Card'

import './index.scss'
@connect(({ home, user }) => ({...home, ...user}), {...userActions})
class Index extends Component {
  constructor(){
    super(...arguments)
    this.state = {}
  }

  render() {

    const { login, dispatchQuickLogin } = this.props;
    if(!Method.isObject(this.props.home)){
      let { licenceList } = this.props.home
    }
    return (
      <View className="Licence">
        <Title title="我的证照" url='/card' login={login} fn={dispatchQuickLogin}/>
        <Card />
      </View>
    );
  }
}

export default Index;
