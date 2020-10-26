import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Jump, Method } from '@unilts'
import './index.scss'

// 个人信息栏
class Index extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      name: '请登录'
    }
  }

  componentWillReceiveProps(nextProps) {
    const { name, loginname } = nextProps.userInfo
    this.setState({
      name: name ? Method.Desensit(name, 0, 1) : loginname
    })
  }

  goLogin = () => {
    const { login } = this.props;
    login ? Jump({url: '/login', payload: {login}}, 'ALIPAY') : Jump({url: '/login'}, 'ALIPAY')
  }

  render() {
    const { name } = this.state;
    // const { login, userInfo } = this.props;

    return (
      <View className="Info">
        <View className="Info-infos">
          <View className="Info-infos-img"></View>
          <View className="Info-infos-name" onClick={this.goLogin}>{name}</View>
        </View>
        <View className="Info-opinion">
          <View className="Info-opinion-text">意见反馈</View>
        </View>
      </View>
    );
  }
}

export default Index;
