import React from 'react'
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui'

import './index.scss'

/*
  title: 标题名
  list：渲染的数组
    text: 主标题
    effect: 副标题（取代箭头）
    img:增加文字后的图片
  border: 若有则有个向上的8px的间距
*/ 
function Index({title, list = [], border}){
  
  return (
    <View className="DList" style={border ? 'border-top: 8px solid #f5f5f5' : ''}>
      {
        title ? <View className="DList-title">{title}</View> : ''
      }
      {
        list.map((item, index) => (
          <View className="DList-list" key={index+"DList"}>
            <View className="DList-list-content" >
              <View className="DList-list-content-text">{item.text}</View>
              {
                item.img ? <View className="DList-list-content-hot" style={item.img}></View> : ''
              }
            </View>
            {
              item.effect ? <View className="DList-list-effect">{item.effect}</View> : <AtIcon value='chevron-right' size='18' color='#CCCCCC'></AtIcon>
            }
          </View>
        ))
      }
    </View>
  )
}

export default Index;
