import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { Title } from '@components'
import { connect } from 'react-redux'
import { Method } from '@unilts'

import './index.scss'

@connect(({ home }) => home)
class Index extends Component {
  constructor(){
    super(...arguments)
    this.state = {

    }
  }


  // 
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
                <Image className="Theme-conent-top-left" src={themeList[0].bgpicpath}></Image>
                <View className="Theme-conent-top-right">
                  {
                    themeList[1] ? <Image className="Theme-conent-top-right-t" src={themeList[1].bgpicpath}></Image> : ''
                  }
                  {
                    themeList[2] ? <Image className="Theme-conent-top-right-t" src={themeList[2].bgpicpath}></Image> : ''
                  }
                </View>
              </View>
              {
                themeList[3] ? <View className="Theme-conent-buttom">
                <Image className="Theme-conent-buttom-left" src={themeList[3].bgpicpath}></Image>
                {
                  themeList[4] ?  <Image className="Theme-conent-buttom-right" src={themeList[4].bgpicpath}></Image> : ''
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
