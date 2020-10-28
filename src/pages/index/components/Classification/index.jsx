import React, { Component } from 'react'
import { View } from '@tarojs/components';
import { ListAll, TitleBig } from '@components'
import { connect } from 'react-redux'
import { Method } from '@unilts'
import './index.scss'

@connect(({ home }) => home)
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

  render() {
    const { titleList, value } = this.state
    return (
      <View className="Classification">
        <TitleBig list={titleList} onChang={this.onChang}/>
        <ListAll />
      </View>
    );
  }
}

export default Index;
