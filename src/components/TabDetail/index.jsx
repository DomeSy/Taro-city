import React,{ useState } from 'react'
import { View, Image } from '@tarojs/components';
import { Jump } from '@unilts'
import './index.scss'

function Index({tab = []}){

  const [list, setList] = useState(tab)

  const goWebUrl = (url) => {
    Jump({url})
  }

  return (
    <View className="DTabDetail">
      {
        list.map((item, index) => (
          <View className="DTabDetail-list" key={index} onClick={() => goWebUrl(item.appIssueUrl)}>
              <View className="DTabDetail-list-img">
                <Image className="DTabDetail-list-img-imgs" src={item.iconUrl}></Image>
              </View>
              <View className="DTabDetail-list-text">{item.name}</View>
          </View>
        ))
      }
    </View>
  )
}

export default Index;
