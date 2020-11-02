import React,{ useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { Method, Jump } from '@unilts'
import './index.scss'

// 个数
const number = 4

function Index({tab = [], type}){

  tab = tab.length <= number ? tab : Method.Intercept(tab, number)

  const [list, setList] = useState(tab)

  const goWebView = (url, fwusertype, name) => {
    if (fwusertype === 0) {
      url ? Jump({url}) : Jump({url: '/none', payload: {name}})
    } else {
      if(type){
        if(type === fwusertype || (fwusertype !== 1 && fwusertype !== 2)){
          url ? Jump({url}) : Jump({url: '/none', payload: {name}})
        } else {
          const message = fwusertype === 1 ? '个人' : '法人'
          Taro.atMessage({
            message: `当前事项只允许${message}办理`,
            type: 'error',
            duration: 2000
          }) 
        }
      }else{
        // type为false需要跳转登录
        Jump({url: '/login', payload: {go: JSON.stringify({url, fwusertype})}})
      }
    }
  }

  return (
    <View className="DTabDetail">
      {
        list.map((item, index) => (
          <View className="DTabDetail-list" key={index} onClick={() => goWebView(item.appIssueUrl, item.fwusertype, item.name)}>
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
