import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'
import { connect } from 'react-redux'
import { Jump, jisConfig, userToken } from '@unilts';
import { aliCertify, AlipayRequest, getOpenRes } from '@unilts/dependence'
import * as actions from '@actions/user'
import * as nearUseActions from '@actions/nearUse'

import './login.scss'

@connect(({user}) => user, {...actions, ...nearUseActions})
class Webview extends Component {

  constructor(){
    super(...arguments)
    this.state = {
      url: '',
      name: '',
      cardId: '',
      mobile: '',
      action: '', //小程序提供的服务类型
      faceLog: false,
      webViewContext: my.createWebViewContext('webviewContainer')
    }
  }

  componentDidMount = () => {
    console.log(this.props, '009')
    const { webUrl } = jisConfig;
    const { login } = this.props;
    
    const url = login ?  `${webUrl}individualCenter` : webUrl;
    this.setState({
      url
    })
  }

  componentDidShow = async () =>{
    try {
      const { action, faceLog } = this.state;
      if (action == 'authFace') {
        if (!faceLog) return
        const { code, result = '请扫脸' } = await getOpenRes(this.state)
        this.webViewContext.postMessage({
          action: 'authFace',
          params: {
            code,
            result
          }
        })
        this.setData({
          faceLog: false
        })
      }
    } catch (error) {
      Taro.showModal({
        title: '提示',
        content: error,
        showCancel: false,
      })
    }
  }

  faceGo = async () => {
    try {
      const certify_id = await aliCertify({
        name: this.data.name,
        cardId: this.data.cardId
      })
      const url = await AlipayRequest(certify_id)
      // 跳转人脸认证
      my.ap.navigateToAlipayPage({
        path: encodeURIComponent(url),
        success: (res) => {
          this.setData({
            ...this.state,
            ...{
              name: this.state.name,
              cardId: this.state.cardId,
              mobile: this.state.mobile,
              certify_id
            }
          })
        },
        fail: (res) => {
          Taro.showModal({
            title: '提示',
            content: JSON.stringify(res),
            showCancel: false,
          })
        }
      })
    } catch (error) {
      Taro.showModal({
        title: '提示',
        content: error,
        showCancel: false,
      })
    }
  }

  webListener = async (e) => {
    const { dispatchLogin, dispatchLogout, DNearClear } = this.props;
    const { action } = e.detail;
    console.log(e,'--1')
    if (action === 'loginApp'){
      //登录
      const { token, usertype } = e.detail.params;
      my.setStorage({
        key: userToken,
        data: {
          token,
          usertype,
        }
      });
      await dispatchLogin({token, usertype})
      Jump({ method: 'navigateBack' })
    } else if(action === 'loginOut'){
      dispatchLogout()
      DNearClear()
      //退出
      Jump({method: 'navigateBack'})
    } else if(action === 'authFace'){
      const { name, cardId, mobile } = e.detail.params
      //实人认证服务
      this.setData({
        name,
        cardId,
        mobile,
        action,
        faceLog: true
      })
      this.faceGo()
    } else if (action === 'scan'){
      //登录
      my.scan({
        scanType: ['qrCode'],
        success: (res) => {
          this.webViewContext.postMessage({
            action: 'scan',
            params: res.code
          })
        },
      });
    }
  }

  render() {
    const { url } = this.state
    return (
      <View className="Webview">
        {/* <WebView id="onFaceAlipay" src="http://172.16.8.167:8080/#/" onMessage={(e) => this.onFaceAlipay(e) } /> */}
        <WebView id="webviewContainer" src={url} onMessage={(e) => this.webListener(e) } />
      </View>
    )
  }
}

export default Webview
