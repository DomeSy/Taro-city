import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Tip, Loading } from '@components'
import { JmasRequest, Method, Jump, mobileId, clienttype  } from '@unilts'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { SITESET } from '@constants/site'
import * as actions from '@actions/user'
import * as siteActions from '@actions/site'
import * as homeActions from '@actions/home'
import { connect } from 'react-redux'


import { SearchTab, Ration, Classification, Licence, Theme, ThemeService } from './components';

function getStorage() {
  return new Promise(res => {
    Taro.getStorage({
      key: 'token',
      success: function (data) {
        res(data.data)
      }
    })
  })
}

@connect(({user, site, home}) => ({...user, ...site, ...home}), { ...actions, ...siteActions, ...homeActions })
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
  
  componentDidUpdate(){}

  componentDidShow = async () => {

    // const data = await JmasRequest('sdsrst', 'rssbcxjmyl', {
    //   rsxtid: "3763",
    //   sfzhm:"342225197011111989",
    //   xm:"彭增芹",
    //   operationName:"queryRcAgedPayHisInfo",
    //   serviceName:"SiUrService"
    // })
    // console.log(data,'--9998')

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
        <Licence />
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

