import React,{ useState } from 'react'
import { View, Text } from '@tarojs/components';
import './index.scss'

function Index({list = []}){

  const [listArr, setListArr] = useState(list)

  const onTab = (item, listArr, setListArr) => {
    if(!item.active){
      const listsArr = listArr.map(items => {
        items.text == item.text ? items.active = true : items.active = false
        return items
      })
      console.log(listsArr,'--')

      setListArr(listsArr)
    }
  }

  return (
    <View className="DTabs">
      {
        listArr.map((item, index) => (
          <View className="DTabs-list" key={index}>
            <View className="DTabs-list-content" onClick={()=>{onTab(item, listArr, setListArr)}}>
              <Text className={item.active ? 'DTabs-list-content-text DTabs-list-content-active' : 'DTabs-list-content-text'}>{item.text}</Text>
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default Index;
