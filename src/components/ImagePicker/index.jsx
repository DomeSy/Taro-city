import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { AtImagePicker } from 'taro-ui'


import './index.scss'

function Index({count = 1, length = 4, allCount = 1, onChange}){

  const [files, setFiles] = useState([])

  const onChangImage = (file, setFiles) => {
    onChange(file)
    setFiles(file)
  }

  return (
    <View className="DImagePicker">
      <View className="DImagePicker-title">
        <View className="DImagePicker-title-text">请补充相关的截图或照片</View>
    <View className="DImagePicker-title-number">{files.length}/{allCount}</View>
      </View>
      <View className="DImagePicker-image">
        <AtImagePicker
          showAddBtn={files.length >= allCount ? false : true}
          length={length}
          count={files.length === 0 ? count : count - files.length}
          files={files}
          onChange={(file) => {onChangImage(file, setFiles)}}
        />
      </View>
    </View>
  )
}

export default Index;
