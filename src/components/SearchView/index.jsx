import React, { useState } from 'react';
import { View, Input } from '@tarojs/components';
import { AtIcon } from 'taro-ui'

import './index.scss'

// 搜索栏
function Index({type = "text", placeholder = "请输入提示语", onChange}){

  const [values, setValue] = useState("")

  const onchange = (e) => {
    const { value } = e.detail;
    onChange ? onChange(value) : ''
  }

  const Cancel = (setValue) => {
    setValue("")
    onChange ? onChange('') : ''
  }

  return (
    <View className="SearchView">
      <View className="SearchView-search">
        <AtIcon value='search' size='18' color='rgba(155, 156, 157, 1)'></AtIcon>
        <Input type={type} className="SearchView-search-input" placeholderStyle="color: #CCCCCC" value={values}  onInput={(e) => {onchange(e)}}  placeholder={placeholder} />
      </View>
      <View className="SearchView-cancel" onClick={() => Cancel(setValue)}>取消</View>
    </View>
  );
}

export default Index;
