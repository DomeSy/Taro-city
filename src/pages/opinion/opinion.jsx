import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Textarea, ImagePicker, Button } from '@components'
import { AtMessage } from 'taro-ui'

import './opinion.scss'

class Opinion extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      textValue: ''
    }
  }

  onChangeText = (textValue) => {
    this.setState({
      textValue
    })
  }

  onChangeImage = (file) => {
  }

  onClick = () => {
    Taro.atMessage({
      message: `服务正在建设中尽情期待`,
      type: 'error',
      duration: 2000
    }) 
  }

  render() {

    return (
      <View className="Opinion">
        <AtMessage />
        <Textarea maxLength="140" placeholder="请在此输入您的反馈内容，以便我们更好的为您服务， 谢谢！" onChange={this.onChangeText}/>
        <ImagePicker count={4} allCount={4} onChange={(file) => this.onChangeImage(file) }/>
        <View className="Opinion-border" />
        <Button onClick={()=>this.onClick()}></Button>
        <View className="Opinion-tip">联系我们</View>
        <View className="Opinion-tel">0531-81286501 / 0531-81286501</View>
      </View>
    )
  }
}

export default Opinion
