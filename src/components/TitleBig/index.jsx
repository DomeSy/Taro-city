import React,{ useState } from 'react'
import { View } from '@tarojs/components';

import './index.scss'

function Index({list, onChang}){

  const [name, setName] = useState(list)

  const check = ({item, name, setName}) =>{
    if(!item.isUnder){
      const lists = name.map(item => {
        item.isUnder = ! item.isUnder
        return item
      })
      setName(lists)
      onChang(item.value)
    }
  }

  return (
    <View className="DTitleBig">
      {
        name.map((item, index) => (
          <View className="DTitleBig-list" key={index} onClick={() => check({item, name, setName})}>
            <View className={item.isUnder ? 'DTitleBig-list-text-active' : 'DTitleBig-list-text'}>{item.text}</View>
            {
              item.isUnder ? <View className="DTitleBig-list-underline"></View> : ''
            }
          </View>
        ))
      }
    </View>
  )
}

export default Index;
