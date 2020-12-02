import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'
import { userToken, Jump } from '@unilts';
import './webview.scss'
import { connect } from 'react-redux'
import { aliCertify, AlipayRequest } from '@unilts/dependence'
import userRquest from '../../unilts/jmas/userRequest';

function getStorage() {
  return new Promise(res => {
    Taro.getStorage({
      key: userToken,
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
@connect(({user}) => user)
class Webview extends Component {

  constructor(){
    super(...arguments)
    this.state = {
      url: '',
      webViewContext: my.createWebViewContext('onFaceAlipay')
    }
  }

  componentDidMount(){
  }

  componentDidShow = async () => {
    const { title = '', url, cf = false } = getCurrentInstance().router.params;

    if(cf){
      // cfList第一个参数是地址，第二个是是否有用户信息
      const cfList = cf.split('-');

      // 无用户信息
      if (cfList[1] === '0') {
        this.setState({
          url: cfList[0]
        })
      } else{
        // 由用户信息,要其token即可,弹药注意一点，就是token要判断是否失效，判断逻辑，掉一下登录接口，能掉通的话没失效否则失效
        const data = await getStorage();
        if (data) {
          const { token, usertype } = data;
          const result = await userRquest({ payload: { token, usertype } })
          result ? 
            this.setState({
              url: `${cfList[0]}?token=${token}&usertype=${usertype}`
            })
          :
          Jump({url: '/login'})
        } else {
          //跳转登录
          Jump({url: '/login'})
        }
        console.log(data)
      }
      
    }else{
      this.setState({
        url
      })
    }
    Taro.setNavigationBarTitle({ title })
  }

  onFaceAlipay = (e) => {
    console.log(e)
    const { webViewContext } = this.state;
    // if(e.detail.name === '扫脸'){
    //   const { name, papersnumber } = this.props.userInfo;
    //   this.face({name, cardId:papersnumber})
    // }
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
    console.log(url, '--')
    return (
      <View className="Webview">
        {/* <WebView id="onFaceAlipay" src="http://172.16.8.209:8080/#/" onMessage={(e) => this.onFaceAlipay(e) } /> */}
        <WebView id="onFaceAlipay" src={url} onMessage={(e) => onFaceAlipay(e) } />
      </View>
    )
  }
}

export default Webview
