import React, { useState } from 'react'
import { View } from '@tarojs/components'

import './index.scss'

// 搜索栏
function Index({list = []}) {
  const [lists, setLists] = useState(list)

  // 切换Tabs
  const onTabs = (item, lists, setLists) => {
    if(!item.active){
      const tabs = lists.map(items => {
        items.title === item.title ? items.active = true : items.active = false
        return items
      })
      setLists(tabs)
    }
  }

  return (
    <View className="Subscribes">
    {
      lists.map((item, index) => (
        <View className="Subscribes-main" key={index} onClick={() => onTabs(item, lists, setLists)}>
          <View className={item.active ? "Subscribes-main-text Subscribes-main-active" : "Subscribes-main-text" }>{item.title}</View>
        </View>
      ))
    }
    </View>

  );
}

export default Index;
