import React,{ useState } from 'react'
import { View } from '@tarojs/components';

import './index.scss'

const InitialState = [
  {
    text: '热门',
    isUnder: true
  },
  {
    text: '上新',
    isUnder: false
  }
]

function Index(){

  const [name, setName] = useState(InitialState)

  const check = ({item, name, setName}) =>{
    if(!item.isUnder){
      const list = name.map(item => {
        item.isUnder = ! item.isUnder
        return item
      })
      setName(list)
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
