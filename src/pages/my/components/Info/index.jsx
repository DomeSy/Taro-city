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
        <View className="Info-opinion" onClick={() => Jump({url: '/opinion'})}>
          <View className="Info-opinion-text">意见反馈</View>
        </View>
      </View>
    );
  }
}

export default Index;
