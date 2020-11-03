import React, { Component } from 'react';
import { View, Input } from '@tarojs/components';
import { AtIcon } from 'taro-ui'

import './index.scss'

// 搜索栏
class Index extends Component { 
  constructor(){
    super(...arguments)
    this.state = {
      type: this.props.text || 'text',
      placeholder: this.props.placeholder || '请输入提示语',
      value: this.props.value || ""
    }
  }

  static getDerivedStateFromProps (nextPrev, state) {
    console.log(nextPrev, '---')
    return {
      value: nextPrev.value
    }
  }

  onchange = (e) => {
    const { onChange } = this.props
    const { value } = e.detail;
    onChange ? onChange(value) : ''
  }

  Cancel = () => {
    const { onChange } = this.props
    onChange ? onChange('') : ''
  }

  render() {
    const { type, placeholder, value } = this.state

    return (
      <View className="SearchView">
        <View className="SearchView-search">
          <AtIcon value='search' size='18' color='rgba(155, 156, 157, 1)'></AtIcon>
          <Input type={type} className="SearchView-search-input" placeholderStyle="color: #CCCCCC" value={value}  onInput={(e) => {this.onchange(e)}}  placeholder={placeholder} />
        </View>
        <View className="SearchView-cancel" onClick={() => this.Cancel()}>取消</View>
      </View>
    );
  }
}

export default Index;
