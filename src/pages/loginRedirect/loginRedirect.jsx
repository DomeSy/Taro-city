import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import * as actions from '@actions/user'
import { connect } from 'react-redux'
import { Jump } from '@unilts'

import './loginRedirect.scss'

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

@connect(({ user }) => user, { ...actions })
class LoginRedirecr extends Component {
  constructor(){
    super(...arguments)
    this.state={}
  }

  componentDidMount = async() => {
    const { dispatchLogin } = this.props;
    let { go } = getCurrentInstance().router.params;
    const data = await getStorage();

    go = JSON.parse(go);

    const { token, usertype } = data;
    dispatchLogin({token, usertype})

    /*
      fwusertype: 如果存在说明是从事项过来的
    */ 
    const { url, fwusertype } = go;
    if((fwusertype === 1 || fwusertype === 2) && fwusertype !== usertype){
      const content = fwusertype === 1 ? '个人' : '法人'
      Taro.showModal({
        title: '提示',
        content: `当前事项只允许${content}办理`,
        showCancel: false,
        success: (res) => {
          Jump({method: 'navigateBack'})
        }
      })
      return;
    }
    Jump({url, method: 'redirectTo'})

  }

  render() {

    return (
      <View>

      </View>
    )
  }
}

export default LoginRedirecr
