import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { ListAll, TitleBig } from '@components'
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
    const data = await Method.JmasData(cols, '热门应用')
  }

  render() {
    return (
      <View className="Classification">
        <TitleBig />
        <ListAll />
      </View>
    );
  }
}

export default Index;
