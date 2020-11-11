import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'
import './webview.scss'

class Webview extends Component {

  config = {
    navigationBarTitleText: ''
  }

  constructor(){
    super(...arguments)
    this.state = {
      url: ''
    }
  }

  componentDidShow(){
    const { title = '', url } = getCurrentInstance().router.params;
    this.setState({
      url
    })
    Taro.setNavigationBarTitle({ title })
  }


  render() {
    const { url } = this.state
    return (
      <View className="Webview">
       <WebView src={url}  />
      </View>
    )
  }
}

export default Webview
