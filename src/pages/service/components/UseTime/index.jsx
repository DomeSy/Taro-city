import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Title, ListUseTime } from '@components'
import { Jump } from '@unilts';
import { connect } from 'react-redux';

import './index.scss'

@connect(({user}) => user)
class Index extends Component {
  constructor(){
    super(...arguments)
  }

  render() {
    const { login } = this.props;
    console.log(this.props)
    return (
      <View className="UseTime">
        <Title title='最近使用' />
        {
          login ? <ListUseTime /> :         
          <View className="UseTime-none">
            <View className="UseTime-none-text">
              <Text className="UseTime-none-text-login" onClick={() => Jump({url: '/login'})}>立即登录</Text>
              <Text className="UseTime-none-text-tip">查看服务使用记录</Text>
            </View>
          </View>
        }

      </View>
    );
  }
}

export default Index;
