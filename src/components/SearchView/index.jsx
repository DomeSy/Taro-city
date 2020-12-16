import React, { Component } from 'react';
import { View, Input } from '@tarojs/components';
import { AtIcon } from 'taro-ui'

import './index.scss'
import Jump from '../../unilts/jump';

// 搜索栏
class Index extends Component { 
  constructor(){
    super(...arguments)
    this.state = {
      type: this.props.text || 'text',
      placeholder: this.props.placeholder || '请输入提示语',
      value: this.props.value || "",
      textValue: ''
    }
  }

  static getDerivedStateFromProps (nextPrev, state) {
    return {
      value: nextPrev.value
    }
  }

  onchange = (e) => {
    const { value } = e.detail;
    if(!value){
      const { onChange } = this.props
      onChange ? onChange('') : ''
    }
    this.setState({
      textValue: value
    })
  }

  Cancel = (btn) => {
    console.log(btn)
    if(btn === '搜索'){
      const { onChange } = this.props;
      const { textValue } = this.state;
      console.log(textValue, '008')
      onChange ? onChange(textValue) : ''
    }else{
      Jump({method: 'navigateBack'})
    }
  }

  render() {
    const { type, placeholder, value, textValue } = this.state
    let btn = '取消'
    if( textValue ) {
      btn = '搜索'
    }

    return (
      <View className="SearchView">
        <View className="SearchView-search">
          <AtIcon value='search' size='18' color='rgba(155, 156, 157, 1)'></AtIcon>
          <Input type={type} className="SearchView-search-input" placeholderStyle="color: #CCCCCC" value={value}  onInput={(e) => {this.onchange(e)}}  placeholder={placeholder} />
        </View>
        <View className="SearchView-cancel" onClick={() => this.Cancel(btn)}>{btn}</View>
      </View>
    );
  }
}

export default Index;
