import React, { Component } from 'react'
import { View, MovableArea, MovableView } from '@tarojs/components'
import { Tip, Loading } from '@components'
import { Method, mobileId, clienttype, JmasRequest, info, Jump  } from '@unilts'
import Taro from '@tarojs/taro'
import { SITESET } from '@constants/site'
import * as actions from '@actions/user'
import * as siteActions from '@actions/site'
import * as homeActions from '@actions/home'
import * as showActions from '@actions/show'
import { connect } from 'react-redux'
import { site } from '@unilts/site'
import { SearchTab, Ration, Classification, Licence, Theme, ThemeService } from './components';
import './index.scss'

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

    const { dispatchLogin, DSiteInit, DHomeInit, site:{ siteid } } = this.props;
    const data = await getStorage();
    if(data){
      const { token, usertype } = data;
      dispatchLogin({token, usertype}) 
    }
    await DSiteInit()
    Taro.getStorage({
      key: SITESET,
      success: (res) => {
        if(res.data){
          const { area } = res.data
          site.map(item => item.area === area ? DHomeInit({siteid:item.siteid, mobileId, clienttype}) : '')
        }else{
          DHomeInit({siteid, mobileId, clienttype})
        }
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
        <MovableArea className="Index-Area">
          <View className="Index-Content">
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
        <MovableView className="Index-MovableView" x="375" y="475" onClick={() => Jump({url: 'https://csmobile.alipay.com/mypa/generalRobot.htm?scene=app_sddsj_robot&instParams=appId@@2088821696726962%7Cchinfo@@miniapp'})} direction='all'></MovableView>
        </MovableArea>
      </View>
    )
  }
}

export default Index

