import React, { Component } from 'react'
import { Title, ListTheme } from '@components'
import { View } from '@tarojs/components'


import './index.scss'

class Index extends Component {
  constructor(){
    super(...arguments)
    this.state = {

    }
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
