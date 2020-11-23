import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'
import './webview.scss'
import { connect } from 'react-redux'
import { aliCertify, AlipayRequest } from '@unilts/dependence'

@connect(({user}) => user)
class Webview extends Component {

  constructor(){
    super(...arguments)
    this.state = {
      url: '',
      webViewContext: my.createWebViewContext('onFaceAlipay')
    }
  }

  componentDidShow(){
    const { title = '', url } = getCurrentInstance().router.params;
    this.setState({
      url
    })
    Taro.setNavigationBarTitle({ title })
  }

  onFaceAlipay = (e) => {
    const { webViewContext } = this.state;
    console.log(e.detail.name ,' 008786')
    if(e.detail.name === '扫脸'){
      const { name, papersnumber } = this.props.userInfo;
      this.face({name, cardId:papersnumber})
    }
    // webViewContext.postMessage("认证成功");
  }

  // 人脸识别
  face = async({name, cardId}) =>{
    const certify_id = await aliCertify({
      name,
      cardId
    })
    const url = await AlipayRequest(certify_id);
    // 跳转人脸认证
    my.ap.navigateToAlipayPage({
      path: encodeURIComponent(url),
      success: (res) => {
        console.error("人脸识别成功")
      },
      fail: (res) => {
        console.error(res, '002')
      }
    })
  }

  render() {
    const { url } = this.state
    return (
      <View className="Webview">
        <WebView id="onFaceAlipay" src="http://172.16.8.167:8080/#/" onMessage={(e) => this.onFaceAlipay(e) } />
        {/* <WebView id="onFaceAlipay" src={url} onMessage={(e) => onFaceAlipay(e) } /> */}
      </View>
    )
  }
}

export default Webview
