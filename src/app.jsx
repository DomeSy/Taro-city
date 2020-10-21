import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  jisConfig = {
    'httpRequest': 'http://192.168.83.57:8052/jis343-b1',
    'appmark': 'sdzwapp',
    'appword': 'aKd20dbGdFvmuwrt',
    'webUrl': 'http://103.239.153.99:81/hos-server/pub/jmas/jmasbucket/jmopen_files/jis/index.html#/'
  }
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
