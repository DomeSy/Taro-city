import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Title } from '@components'
import ListUseTime from '../ListUseTime'
import { Jump } from '@unilts';
import { connect } from 'react-redux';

import './index.scss'

@connect(({user, nearUse}) => ({...user, ...nearUse}))
class Index extends Component {
  constructor(){
    super(...arguments)
  }

  render() {
    const { login, nearUse } = this.props;
    return (
      <View className="UseTime">
        <Title title='最近使用' url='/nearUse' login={login}/>
        {
          login && nearUse.length !== 0 ? <ListUseTime /> :
          <View className="UseTime-none">
            <View className="UseTime-none-text">
              {
                login ? '' : <Text className="UseTime-none-text-login" onClick={() => Jump({url: '/login'})}>立即登录</Text> 
              }
              <Text className="UseTime-none-text-tip">
                {
                  login ?  "暂无使用服务" : "查看服务使用记录"
                }
              </Text>
            </View>
          </View>
        }

      </View>
    );
  }
}

export default Index;
