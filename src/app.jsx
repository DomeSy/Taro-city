import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { AtMessage } from 'taro-ui'
import { getCurrentInstance } from '@tarojs/taro'
import configStore from './store'

import './app.scss'
// const monitor = require('/utils/alipayLogger.js');
const monitor = require('@unilts/alipayLogger')


const store = configStore()

class App extends Component {

  componentDidMount () {
    monitor.init({
      pid: "na21ryl3edlkufi7m2j8da==",
      options: getCurrentInstance().router,
      sample: 1,
      autoReportApi: true,
      autoReportPage: false,
      // Http请求返回数据中状态码字段名称
      code: [],
      // Http返回数据中的error message字段名称
      msg: ["return_message"]
    });
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <>
        <Provider store={store}>
          {this.props.children}
        </Provider>
      </>
    )
  }
}

export default App