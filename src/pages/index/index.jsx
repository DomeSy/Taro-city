import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Tip, Loading } from '@components'
import { Method, mobileId, clienttype, JmasRequest, userToken  } from '@unilts'
import Taro from '@tarojs/taro'
import { SITESET } from '@constants/site'
import * as actions from '@actions/user'
import * as siteActions from '@actions/site'
import * as homeActions from '@actions/home'
import * as showActions from '@actions/show'
import { connect } from 'react-redux'
import { aliCertify, AlipayRequest } from '@unilts/dependence'


import { SearchTab, Ration, Classification, Licence, Theme, ThemeService } from './components';

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

@connect(({user, site, home, show}) => ({...user, ...site, ...home, ...show}), { ...actions, ...siteActions, ...homeActions, ...showActions })
class Index extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      siteid: ''
    }
  }


  componentWillUnmount () {  }

  componentDidMount = async () =>{
    this.face()
    const { dispatchLogin, DSiteInit, DHomeInit, site:{ siteid }, DShow, show: { isShow } } = this.props;
    // DShow({ appid: "jmportalnzjk", interfaceid: "noticeParameter", payload: {} })
    // if(isShow){

    //   return;
    // }
    const data = await getStorage();
    if(data){
      const { token, type, usertype } = data;
      if(type === 'login') dispatchLogin({token, usertype}) 
    }
    DSiteInit()
    Taro.getStorage({
      key: SITESET,
      success: (res) => {
        if(res.data){
          const { siteid } = res.data
          DHomeInit({siteid, mobileId, clienttype})
        }else{
          DHomeInit({siteid, mobileId, clienttype})
        }
      }
    })
  }
  face = async() =>{
    const certify_id = await aliCertify({
      name: '杜玮',
      cardId: '620103199707082611'
    })
    const url = await AlipayRequest(certify_id)
    // 跳转人脸认证
    my.ap.navigateToAlipayPage({
      path: encodeURIComponent(url),
      success: (res) => {
        console.error(res, '003')
      },
      fail: (res) => {
        console.error(res, '002')
      }
    })

  }
  
  componentDidUpdate(){}

  componentDidShow = async () => {

  }

  componentDidHide () {}

  render () {

    if(Method.isObject(this.props.home)){
      return <Loading></Loading>
    }

    return (
      <View className="Index">
        {/* 搜索框 */}
        <SearchTab />
        {/* 轮播图 */}
        <Ration />
        {/* 热门分类 */}
        <Classification />
        {/* 我的证照 */}
        {/* <Licence /> */}
        {/* 主题专区 */}
        <Theme />
        {/* 主题服务 */}
        <ThemeService />
        {/* 背景框 */}
        <Tip />
      </View>
    )
  }
}

export default Index

