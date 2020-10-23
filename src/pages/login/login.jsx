import React, { Component } from 'react'
import { View, WebView } from '@tarojs/components';
import { AtRate } from 'taro-ui'
import './login.scss'
import { ListShow, Textarea, Button } from '@components';

import { jisConfig } from '@unilts'

class Login extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      url: ''
    }
  }
  
  componentDidShow = () => {
    this.setState({
      url: jisConfig.webUrl
    })
  }
  componentDidMount = () => {
    // console.log(jisConfig)
  }

  onMessage = (e) => {
    console.log(e, '--9')
  }

  onLoad = (e) => {
    console.log(e, '008')
  }

  render() {

    const { url } = this.state

    return (
      <View className="Login">
        <WebView src={url} onMessage={this.onMessage} onLoad={this.onLoad} />
      </View>
    )
  }
}

export default Login
