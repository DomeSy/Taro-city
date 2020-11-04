import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { Title } from '@components'
import { connect } from 'react-redux'
import { Method, Jump } from '@unilts'
import * as actions from '@actions/detail'

import './index.scss'

@connect(({ home }) => home, {...actions})
class Index extends Component {
  constructor(){
    super(...arguments)
    this.state = {

    }
  }

  goWebView = list => {
    const { data } = list.apps;
    if(data.length === 1){
      Jump({url: data[0].appIssueUrl})
    }else{
      this.props.DDetailInit(list)
      Jump({url:'/detail'})
    }
  }

  render() {
    let { themeList } = this.props.home

    if(!Method.isObject(this.props.home)){
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
