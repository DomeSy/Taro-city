import React, { Component } from 'react'
import { Title, ListTheme } from '@components'
import { View } from '@tarojs/components'
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
      <View className="ThemeService">
        <Title title="主题服务" />
        <ListTheme />
      </View>
    );
  }
}

export default Index;
