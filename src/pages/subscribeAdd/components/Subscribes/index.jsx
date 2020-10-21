import React, { useState, useEffect } from 'react'
import { View } from '@tarojs/components'

import './index.scss'

// 搜索栏
function Index({list = [], getTitle, scrollIndex = 0,}) {
  const [lists, setLists] = useState(list)

  // console.log(Math.abs(-9))
  useEffect((e) => {
    const tabs = lists.map((item, index) => {
      if(index == scrollIndex){
        item.active = true
      } else {
        item.active = false
      }
      return item
    })
    setLists(tabs)
  }, [scrollIndex])

  // 切换Tabs
  const onTabs = (item, index, lists, setLists) => {
    if(!item.active){
      const tabs = lists.map(items => {
        items.title === item.title ? items.active = true : items.active = false
        return items
      })
      setLists(tabs)
      getTitle(index)
    }
  }

  return (
    <View className="Subscribes">
    {
      lists.map((item, index) => (
        <View className="Subscribes-main" key={index} onClick={() => onTabs(item, index, lists, setLists)}>
          <View className={item.active ? "Subscribes-main-text Subscribes-main-active" : "Subscribes-main-text" }>{item.title}</View>
        </View>
      ))
    }
    </View>

  );
}

export default Index;
