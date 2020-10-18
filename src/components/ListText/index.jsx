import React from 'react'
import { View } from '@tarojs/components'
import { AtRate } from 'taro-ui'

import './index.scss'


/*
  list: 
    text:标题，
    rate: 针对平分做修改，评分的等级
    padding: 增加边距
    list：文件列表
      text: 提交时间：
      effect： 2020-08-25 16:32
      如：提交时间：2020-08-25 16:32
      evaluate：针对可评价增加评价按钮
*/
function Index({list = []}){
  return (
    <>
      {
        list && list.map((item, index) => (
          <View className="DListTest" key={index}>
            { item.title ?  <View className="DListTest-title">{item.title}</View> : '' }
            { item.rate ? <View className="DListTest-rate"><AtRate size="14" value={item.rate} /></View>  : ''}
            {
              item.list.map((items, indexs) => (
                <View className={items.padding ? "DListTest-text DListTest-padding" : 'DListTest-text'} key={indexs+"list"}>
                  <View>{items.text}{items.effect}</View>  
                  {items.evaluate ? <View className="DListTest-text-evaluate">{items.evaluate}</View> : ''}
                </View>
              ))
            }
          </View>
        ))
      }
    </>
  )
}

export default Index;
