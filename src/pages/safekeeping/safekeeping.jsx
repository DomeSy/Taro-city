import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtIcon, AtMessage } from 'taro-ui'
import { LogoText, Button } from '@components'
import { getCurrentInstance } from '@tarojs/taro'
import { Jump } from '@unilts'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import * as actions from '@actions/space'

import './safekeeping.scss'

@connect(({space, user}) => ({...space, ...user}), {...actions})
class Safekeeping extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      list: [
        {
          text: '使用您的身份信息(证件号码)，用于快速查询医保基本信息；'
        },
        {
          text: `在“爱山东—我的空间”中向您展示${getCurrentInstance().router.params.title}基本信息；`
        },
        {
          text: '使用人脸识别进行身份核验。'
        }
      ],
      sign: getCurrentInstance().router.params.sign || false,
      space: {}
    }
  }

  componentDidShow = () => {
 
    this.setState({
      space: this.props.space[getCurrentInstance().router.params.sign] || this.props.space.space[getCurrentInstance().router.params.sign]
    })
  }

  spaceInfo = (value, sign) => {
    const { DSpaceInfo, userInfo:{name, papersnumber } } = this.props;
    const { space } = this.state;
    if(!space.value){
      Taro.atMessage({
        message: `请先选择缴存地`,
        type: 'error',
        duration: 2000
      })
      return
    }
    DSpaceInfo({value, sign, name, papersnumber, area: space.area, name: getCurrentInstance().router.params.title})
  }

  render() {
    const { list, sign, space:{area, value} } = this.state

    return (
      <View className="Safekeeping">
        <AtMessage />
       <View className="Safekeeping-top">
         <View className="Safekeeping-top-img"></View>
         <View className="Safekeeping-top-text">爱山东</View>
         <View className="Safekeeping-top-text1">山东省医保局</View>
       </View>
       <View className="Safekeeping-area">
         <View className="Safekeeping-area-text">缴存地</View>
         <View className="Safekeeping-area-effect" onClick={() => Jump({url: '/enclosure', payload:{sign}})}>
           <View className="Safekeeping-area-effect-text">{area ? area : '请选择'}</View>
           <AtIcon className="Safekeeping-area-effect-icon" value='chevron-right' size='15' color='#999999'></AtIcon>
         </View>
       </View>
       <View className="Safekeeping-border"><View className="Safekeeping-border-bottom"/></View>
       <LogoText list={list} />
       {/* <View className="Safekeeping-tip">
        确认授权即表示同意<Text className="Safekeeping-tip-text">《服务协议》</Text>
       </View> */}
       <Button title="同意并授权" onClick={() => this.spaceInfo(value, sign)}></Button>
      </View>
    )
  }
}

export default Safekeeping
