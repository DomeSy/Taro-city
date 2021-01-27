import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { Title } from '@components'
import { connect } from 'react-redux'
import { Method, Jump } from '@unilts'
import * as actions from '@actions/detail'
import * as userActions from '@actions/user'

import './index.scss'

@connect(({ home, user }) => ({...home, ...user}), {...actions, ...userActions})
class Index extends Component {
  constructor(){
    super(...arguments)
    this.state = {

    }
  }

  goWebView = async list => {
    const { data } = list.apps;
    if(data.length === 1){
      const { fwusertype, appIssueUrl, name } = data[0];
      if (fwusertype === 0) {
        appIssueUrl ? Jump({url: appIssueUrl}) : Jump({url: '/none', payload: {name}})
      } else {
        const { usertype, token } = this.props.userInfo;
        if (usertype) {
          if(usertype === fwusertype || (fwusertype !== 1 && fwusertype !== 2)){
            appIssueUrl ? Jump({url: appIssueUrl, payload:{token, usertype}}) : Jump({url: '/none', payload: {name}})
          } else {
            const message = fwusertype === 1 ? '个人' : '法人'
            Taro.showModal({
              title: '提示',
              content: `当前事项只允许${message}办理`,
              showCancel: false,
            }) 
          }
        } else {
          if(fwusertype === 2) {
            Jump({url: '/login', payload: {payload: JSON.stringify({url: appIssueUrl, fwusertype, name})} })
          }else{
            await this.props.dispatchQuickLogin();
            const { usertype, token } = this.props.userInfo;
            Jump({url: appIssueUrl, payload:{token, usertype}})
          }
        }
      }
    }else{
      this.props.DDetailInit(list)
      Jump({url:'/detail', payload: {noTitle: true}})
    }
  }

  render() {
    let { themeList } = this.props.home

    if(!Method.isObject(this.props.home) && themeList){
      themeList = themeList.listAll.length === 0 ? themeList : themeList.listAll;
    } else { 
      return <View></View>
    }

    return (
      <>
        {
          themeList[0] ? <View className="Theme">
            <Title title="主题专区" url="/special" />
            <View className="Theme-conent">
              <View className="Theme-conent-top">
                <Image className="Theme-conent-top-left" src={themeList[0].cateimgurl} onClick={() => this.goWebView(themeList[0])}></Image>
                <View className="Theme-conent-top-right">
                  {
                    themeList[1] ? <Image className="Theme-conent-top-right-t" onClick={() => this.goWebView(themeList[1])} src={themeList[1].cateimgurl}></Image> : ''
                  }
                  {
                    themeList[2] ? <Image className="Theme-conent-top-right-t" onClick={() => this.goWebView(themeList[2])} src={themeList[2].cateimgurl}></Image> : ''
                  }
                </View>
              </View>
              {
                themeList[3] ? 
                <View className="Theme-conent-buttom">
                  <Image className="Theme-conent-buttom-left" src={themeList[3].cateimgurl} onClick={() => this.goWebView(themeList[3])}></Image>
                {
                  themeList[4] ?  <Image className="Theme-conent-buttom-right" onClick={() => this.goWebView(themeList[4])} src={themeList[4].cateimgurl}></Image> : ''
                }
                </View> : ''
              }
            </View>
          </View> : <View></View>
        }
      </>
    );
  }
}

export default Index;
