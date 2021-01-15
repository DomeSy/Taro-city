import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro' 
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
  componentDidMount(){
    if(this.props.login){
      const { name, loginname } = this.props.userInfo
      this.setState({
        name: name ? Method.Desensit(name, 0, 1) : loginname
      })
    }else{
      this.setState({
        name: '请登录'
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.login){
      const { name, loginname } = nextProps.userInfo
      this.setState({
        name: name ? Method.Desensit(name, 0, 1) : loginname
      })
    }else{
      this.setState({
        name: '请登录'
      })
    }
  }

  render() {
    const { name } = this.state;

    return (
      <View className="Info">
        <View className="Info-infos">
          <View className="Info-infos-img" onClick={() => name === '请登录' ? this.props.fn() : Jump({url: '/login', payload: {login: true}}, 'ALIPAY')}></View>
          {
            name === '请登录' ? 
            <View className="Info-infos-login">
              <View className="Info-infos-login-gr" onClick={() => this.props.fn()}>{name}</View>
              <View className="Info-infos-login-fr" onClick={() => Jump({url: '/login'}, 'ALIPAY')}>登录法人账号</View>
            </View>
            :
            <View className="Info-infos-name" onClick={() => Jump({url: '/login', payload: {login: true}}, 'ALIPAY')}>{name}</View>
          }
        </View>
        <View className="Info-opinion" onClick={() => Jump({url: '/opinion'})}>
          <View className="Info-opinion-text">意见反馈</View>
        </View>
      </View>
    );
  }
}

export default Index;
