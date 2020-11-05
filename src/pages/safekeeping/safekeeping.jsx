import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { LogoText, Button } from '@components'
import { Jump } from '@unilts'
import './safekeeping.scss'

class Safekeeping extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      list: [
        {
          text: '使用您的身份信息(证件号码)，用于快速查询医保基本信息；'
        },
        {
          text: '在“爱山东—我的空间”中向您展示医保基本信息；'
        },
        {
          text: '使用人脸识别进行身份核验。'
        }
      ]
    }
  }
  render() {

    const { list } = this.state

    return (
      <View className="Safekeeping">
       <View className="Safekeeping-top">
         <View className="Safekeeping-top-img"></View>
         <View className="Safekeeping-top-text">爱山东</View>
         <View className="Safekeeping-top-text1">山东省医保局</View>
       </View>
       <View className="Safekeeping-area">
         <View className="Safekeeping-area-text">缴存地</View>
         <View className="Safekeeping-area-effect" onClick={() => Jump({url: '/enclosure'})}>
           <View className="Safekeeping-area-effect-text">请选择</View>
           <AtIcon className="Safekeeping-area-effect-icon" value='chevron-right' size='15' color='#999999'></AtIcon>
         </View>
       </View>
       <View className="Safekeeping-border"><View className="Safekeeping-border-bottom"/></View>
       <LogoText list={list} />
       <View className="Safekeeping-tip">
        确认授权即表示同意<Text className="Safekeeping-tip-text">《服务协议》</Text>
       </View>
       <Button title="同意并授权"></Button>
      </View>
    )
  }
}

export default Safekeeping
