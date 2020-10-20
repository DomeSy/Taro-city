import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

/*
  list: 列表
    title：标题
    listAll:数据
      text:文本
      img：图片
*/
function Index({list = []}) {

  const [lists, setLists] = useState(list)


  return (
    <View className="TabsSubscribes">
      {
        lists.map((item, index) => (
          <View className="TabsSubscribes-Card" key={index}>
            <View className="TabsSubscribes-Card-title">
              <Text className="TabsSubscribes-Card-title-name">{item.title}</Text>
            </View>
            <View className="TabsSubscribes-Card-list">
              {
                item.listAll.map((items, indexs) => (
                  <View className="TabsSubscribes-Card-list-info" key={indexs + 'listAll'}>
                    <View className="TabsSubscribes-Card-list-info-img" style={items.img}>
                      <View className="TabsSubscribes-Card-list-info-img-cancel">取消订阅</View>
                    </View>
                    <View className="TabsSubscribes-Card-list-info-text">{items.text}</View>
                  </View>
                ))
              }
            </View>
          </View>
        ))
      }
    </View>
  );
}

export default Index;
