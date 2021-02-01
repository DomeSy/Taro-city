import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'
import { info, Jump } from '@unilts';
import './webview.scss'
import { connect } from 'react-redux'
import { authFaceValidate } from '@unilts/authFace.js'
import * as userActions from '@actions/user'

const monitor = require('@unilts/alipayLogger')

import userRquest from '../../unilts/jmas/userRequest';

function getStorage() {
  return new Promise(res => {
    Taro.getStorage({
      key: info,
      success: function (data) {
        res(data.data)
      }
    })
  })
}

/*
  城市服务
    多个参数需要通过UrlEncode编码，但由于目前而言只需要判断有无用户信息即可，所以直接以0（无用户信息）和1（有游湖信息）
  
  判断是否有城市服务
    以参数cf判断
    需要注意是要判断是否存在登录状态
*/
@connect(({user}) => user, {...userActions})
class Webview extends Component {

  constructor(){
    super(...arguments)
    this.state = {
      url: '',
      webViewContext: my.createWebViewContext('onFaceAlipay')
    }
  }

  componentDidMount = async () => {}

  componentDidShow = async () => {
    const { title = '', url, cf = false } = getCurrentInstance().router.params;

    if(cf){
      this.goCity(cf)
    }else{
      this.setState({
        url
      })
      Taro.setNavigationBarTitle({ title })  
    }
  }
  
  goCity = async (cf) => {
    // cfList第一个参数是地址，第二个是是否有用户信息，第三个是标题
    const cfList = cf.split('-');
    const title =  cfList[2] || ""

    // 无用户信息
    if (cfList[1] == '0') {
      this.setState({
        url: cfList[0]
      })
    } else{
      // 由用户信息,要其token即可,但要注意一点，就是token要判断是否失效，判断逻辑，掉一下登录接口，能掉通的话没失效否则失效
      const data = await getStorage();
      if (data) {
        const { token, usertype } = data;
        const result = await userRquest({ payload: { token, usertype } })

        if(result){
          this.setState({
            url: `${cfList[0]}?token=${token}&usertype=${usertype}`
          })
        }else{
          await this.props.dispatchQuickLogin();
          this.goCity(cf)
        }
      } else {
        //跳转登录
        await this.props.dispatchQuickLogin();
        this.goCity(cf)
      }
    }
    monitor._lgPV({page: title, url: cfList[0], c1: 'h5SE', c2: cfList[0]});
    Taro.setNavigationBarTitle({ title })  
  }

  onFaceAlipay = async (e) => {
    const { webViewContext } = this.state;
    if(e.detail.name === '扫脸'){
      const { name = '', papersnumber = '' } = this.props.userInfo;
      const message = await this.face({name, cardId: papersnumber})
      message === '认证通过' ? webViewContext.postMessage({res: message}) : Jump({method: 'navigateBack'})
    }else if(e.detail.evaluate){
      // 去评价
      my.ap.navigateToAlipayPage({
        path: e.detail.evaluate
      })
    }
  }

  // 人脸识别
  face = async({name, cardId}) =>{
    let message = ''
    try{
      message = await authFaceValidate(name, cardId);
    }catch(e){
      message = e
    }
    return message
  }

  render() {
    const { url } = this.state
    return (
      <View className="Webview">
        <WebView id="onFaceAlipay" src={url} onMessage={(e) => this.onFaceAlipay(e) } />
      </View>
    )
  }
}

export default Webview
