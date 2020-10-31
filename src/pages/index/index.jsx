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

@connect(({user, site}) => ({...user, ...site}), { ...actions, ...siteActions, ...homeActions })
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

    // const data = await JmasRequest('jmportalnzjk', 'channelfirst', {
    //   siteid: '620fac8584594096b873a411c93ae228',
    //   mobileId: '737d972e0a04436287b7a1b59d142bb8',
    //   clienttype: '2'
    // })
    // console.log(data,'--9998')

    // const data = await JmasRequest('jmportalnzjk', 'getcomppageinterface', {
    //   channelid: "10ed186afbb4483793da62335d9c0682"
    // })
    // console.log(data,'--9998')
    
    // const data = await JmasRequest('jmportalnzjk', 'getapplist', {
    //   // siteid: '01f443bfeb054686a28ca8446f9f3810',
    //   siteid: '178966c2ddf04da8aa2fb447eedf677b',
    //   colId: 'bc16bc58b4474ecca0405b236c87e78e',
    //   pageNo:'1',
    //   pageSize: '10'
    // })
    // console.log(data,'--9998')
  }

  componentDidHide () {   }

  onClick = () => {
    Jump({url: '/opinion'})
  }

  render () {

    // if(Method.isObject(this.props.home)){
    //   return <Loading></Loading>
    // }

    return (
      <View className="Index">
        {/* <View onClick={this.onClick}>我是蛇</View> */}
        {/* 搜索框 */}
        <SearchTab />
        {/* 轮播图 */}
        {/* <Ration /> */}
        {/* 热门分类 */}
        {/* <Classification /> */}
        {/* 我的证照 */}
        {/* <Licence /> */}
        {/* 主题专区 */}
        {/* <Theme /> */}
        {/* 主题服务 */}
        <ThemeService />
        {/* 背景框 */}
        <Tip />
      </View>
    )
  }
}

export default Index

