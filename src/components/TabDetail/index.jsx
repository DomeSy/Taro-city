import React,{ useState } from 'react'
import { View } from '@tarojs/components';
import ma from '@assets/ma.png'
import './index.scss'

const initialState = [
  {
    text: '绑定驾驶证',
    img: `background: url(${ma});background-size: 100% 100%`
  },
  {
    text: '绑定驾驶证',
    img: `background: url(${ma});background-size: 100% 100%`
  }
]

function Index(){

  const [list, setList] = useState(initialState)

  return (
    <View className="DTabDetail">
      {
        list.map((item, index) => (
          <View className="DTabDetail-list" key={index}>
              <View className="DTabDetail-list-img">
                <View className="DTabDetail-list-img-imgs" style={item.img}></View>
              </View>
              <View className="DTabDetail-list-text">{item.text}</View>
          </View>
        ))
      }
    </View>
  )
}

export default Index;
