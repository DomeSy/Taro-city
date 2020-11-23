import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'
import './webview.scss'
import { connect } from 'react-redux'

@connect(({user}) => user)
class Webview extends Component {

  constructor(){
    super(...arguments)
    this.state = {
      url: ''
    }
  }

  componentDidShow(){
    const { title = '', url } = getCurrentInstance().router.params;
    console.log(url, '000')
    this.setState({
      url
    })
    Taro.setNavigationBarTitle({ title })
  }

  onFaceAlipay = (e) => {
    console.log(e, '---')
  }

  render() {
    const { url } = this.state
    return (
      <View className="Webview">
        <WebView id="onFaceAlipay" src={url} onMessage={(e) => onFaceAlipay(e) } />
      </View>
    )
  }
}

export default Webview
