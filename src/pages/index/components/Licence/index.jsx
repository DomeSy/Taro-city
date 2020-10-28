import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Title, Card } from '@components'
import { connect } from 'react-redux'
import { Method } from '@unilts'

import './index.scss'

@connect(({ home }) => home)
class Index extends Component {
  constructor(){
    super(...arguments)
    this.state = {

    }
  }

  async componentDidUpdate(){
    const { cols } = this.props.home
    const data = await Method.JmasData(cols, '我的证照')
  }

  render() {
    return (
      <View className="Licence">
        <Title title="我的证照" />
        <Card />
      </View>
    );
  }
}

export default Index;
