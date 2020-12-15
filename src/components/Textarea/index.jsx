import React,{ useState } from 'react'
import { View } from '@tarojs/components';
import { AtTextarea } from 'taro-ui'

import './index.scss'

function Index({title, maxLength = 200, placeholder='', onChange}){

  const [text, setText] = useState('')

  const onChangText = (value, setText) => {
    setText(value)
    return onChange ? onChange(value) : ''
  }

  const onFocus = () => {
    document.activeElement.scrollIntoViewIfNeeded()
  }

  return (
    <View className="DTextarea">
      {
        title ? <View className="DTextarea-title">{title}</View> : ""
      }
      <AtTextarea
        className="DTextarea-textarea"
          adjustPosition={false}
          onFocus={() => onFocus()}
        value={text}
        onChange={(value) => onChangText(value, setText)}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </View>
  )
}

export default Index;
