import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import * as actions from '@actions/user'
import { JmasRequest, mobileId, Jump, userToken } from '@unilts'
import { Textarea, ImagePicker, Button } from '@components'

import './opinion.scss'
import { connect } from 'react-redux'

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

@connect(({user, site}) => ({...user, ...site}), { ...actions })
class Opinion extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      textValue: '', //反馈内容
      imageFile: [] // 图片存放地址
    }
  }

  componentDidShow = async () => {
    const { dispatchLogin } = this.props;
    const data = await getStorage();
    const type = data ? data.type : false;
    
    if(type == 'login' && data.isLogin){
      const { token, usertype } = data;
      Taro.setStorage({
        key: userToken,
        data: {
          token,
          usertype,
          type: "login",
          isLogin: false
        }
      })
      await dispatchLogin({token, usertype})
      this.onClick(this.state.textValue, this.state.imageFile)
    }
  }

  onChangeText = (textValue) => {
    this.setState({
      textValue
    })
  }

  onChangeImage = (imageFile) => {
    this.setState({
      imageFile
    })
  }

  onClick = (textValue, imageFile) => {
    // Taro.showModal({
    //   title: '提示',
    //   content: `服务正在建设中尽情期待`,
    //   showCancel: false,
    // })
    // 首先要处理登录逻辑

    const { login } = this.props;
    if(login){
      textValue ? this.uploadfeed(textValue, imageFile) : Taro.showToast({
        title: '请输入反馈内容',
        icon: 'none'
      })
    }else{
      // 需要跳转登录逻辑
      Jump({url: '/login'})
    }
  }

  uploadfeed = async (textValue, imageFile) => {
    const { site: { siteid }, userInfo: { name, uuid, mobile } } = this.props
    const payload = {
      siteid,
      clienttype: '2',
      uuid,
      version: '5.0.0',
      loginname: name,
      content: textValue,
      contact: mobile,
      mobileId
    }
    const data = {
      imageFile,
      payload
    }
    const res = await JmasRequest('jmportalnzjk', 'uploadfeed', data, 'imageFile', true)
    const { result, message } = res;
    if(result === 'true'){
      Taro.showModal({
        title: '提示',
        content: "提交成功",
        showCancel: false,
        success: () => {
          Jump({method: 'navigateBack'})
        }
      })
    }else{
      Taro.showModal({
        title: '提示',
        content: message,
        showCancel: false
      })
    }
  }

  tel = tel => {
    Taro.makePhoneCall({ phoneNumber: tel });
  }

  render() {
    const { textValue, imageFile } = this.state

    return (
      <View className="Opinion">
        <Textarea maxLength="140" placeholder="请在此输入您的反馈内容，以便我们更好的为您服务， 谢谢！" onChange={this.onChangeText}/>
        <ImagePicker count={4} allCount={4} onChange={(file) => this.onChangeImage(file) }/>
        <View className="Opinion-border" />
        <Button onClick={()=>this.onClick(textValue, imageFile)}></Button>
        <View className="Opinion-tip" >联系我们</View>
        <View className="Opinion-tel"><View className="Opinion-tel-number" onClick={() => this.tel('0531-81286501')}>0531-81286501 </View>/ <View className="Opinion-tel-number" onClick={() => this.tel('0531-81286511')}>0531-81286511 </View></View>
      </View>
    )
  }
}

export default Opinion
