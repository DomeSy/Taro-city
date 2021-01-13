import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'
import { connect } from 'react-redux'
import { Jump, jisConfig, info } from '@unilts';
import { authFaceValidate } from '@unilts/authFace.js'
import * as actions from '@actions/user'
import * as nearUseActions from '@actions/nearUse'

import './login.scss'

/**
 * 情况
 *  1>登录完返回原页面
 *  2>登陆完跳转新的页面
 *  3>登录完成跳转WebView，如果WebView需要传token，则需要单独处理
 *     fwusertype所传入事项的类型，用于判断是否带入个人信息
 */
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
    const { webUrl } = jisConfig;
    const { login } = this.props;
    const url = login ?  `${webUrl}individualCenter` : webUrl;
    this.state.webViewContext.postMessage({res : '我是'})
    this.setState({
      url
    })
  }

  webListener = async (e) => {
    const { dispatchLogin, dispatchLogout, DNearClear, userInfo } = this.props;
    const { action } = e.detail;

    if (action === 'loginApp'){
      //登录
      const { token, usertype } = e.detail.params;
      Taro.setStorage({
        key: info,
        data: {
          token,
          usertype,
        }
      });
      await dispatchLogin({token, usertype})
      const { payload } = getCurrentInstance().router.params
      if (payload) {
        const { url, fwusertype, name } = JSON.parse(payload)
        if(fwusertype){
          if(fwusertype === 0) {
            Jump({url, method: 'redirectTo'})
            return
          } else if(usertype === fwusertype || (fwusertype !== 1 && fwusertype !== 2)){
            url ? Jump({url, payload:{token, usertype}, method: 'redirectTo'}) : Jump({url: '/none', payload: {name}, method: 'redirectTo'})
          }  else {
            const content = fwusertype === 1 ? '个人' : '法人'
            Taro.showModal({
              title: '提示',
              content: `当前事项只允许${content}办理`,
              showCancel: false,
              success: (res) => {
                Jump({method: 'navigateBack'})
              }
            })
          }
          return
        }
        Jump({url, method: 'redirectTo'})
      } else {
        Jump({ method: 'navigateBack' })
      }
    } else if(action === 'loginOut'){
      dispatchLogout()
      DNearClear()
      //退出
      Jump({method: 'navigateBack'})
    } else if(action === 'authFace'){
      let message = "", code = "";
      try {
        const { name, cardId, mobile } = e.detail.params
        //实人认证服务
        message = await authFaceValidate(name, cardId)
        code = '200'
        this.setState({
          name, cardId, mobile
        })
      } catch (result) {
        if (my.canIUse('startAPVerify')) {
          message = result
        } else {
          message = "暂不支持扫脸，敬请期待"
        }
      }
      this.state.webViewContext.postMessage({
        action: 'authFace',
        params: {
          code,
          result: message
        }
      })
    } else if (action === 'scan'){
      //登录
      my.scan({
        scanType: ['qrCode'],
        success: (res) => {
          this.state.webViewContext.postMessage({
            action: 'scan',
            params: res.code
          })
        },
      });
    } else if (action === 'quickLogin') {
      my.getAuthCode({
        scopes: ['auth_user'],
        complete: (res) => {
          this.state.webViewContext.postMessage({
            action: 'quickLogin',
            params: {
              authCode: res.authCode || "",
              error: (res.authErrorScope && res.authErrorScope.scope) || res.errorMessage || ""
            }
          })
        }
      });
    } else if (action === 'alipayInfo') {
      this.state.webViewContext.postMessage({ userInfo })
    }
  }

  render() {
    const { url } = this.state
    return (
      <View className="Webview">
        <WebView id="webviewContainer" src={url} onMessage={(e) => this.webListener(e) } />
      </View>
    )
  }
}

export default Webview
