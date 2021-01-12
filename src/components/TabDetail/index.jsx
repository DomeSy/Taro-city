import React,{ useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { Method, Jump } from '@unilts'
import { AtMessage } from 'taro-ui'
import './index.scss'

// 个数
const number = 4

function Index({tab = [], type, onChang, token, fn}){

  tab = tab.length <= number ? tab : Method.Intercept(tab, number)

  const [list, setList] = useState(tab)

  // 用于判断事项是否是有个人法人的，是否登录状态
  const goWebView = (url, fwusertype, name, isHot) => {
    onChang ? onChang({url, fwusertype, name, isHot}) : ''
    if (fwusertype === 0) {
      url ? Jump({url}) : Jump({url: '/none', payload: {name}})
    } else {
      if(type){
        if(type === fwusertype || (fwusertype !== 1 && fwusertype !== 2)){
          url ? Jump({url, payload:{token, usertype: type}}) : Jump({url: '/none', payload: {name}})
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
        // fwusertype为2是法人，其他是个人或者个人和法人，这种情况默认是个人，走快登，法人走正常的登录逻辑,要用组件提升，原因是跳转的时候用了type, token
        fwusertype === 2 ? Jump({url: '/login', payload: {payload: JSON.stringify({url, fwusertype, name})} }) : fn({url, name})
      }
    }
  }

  return (
    <View className="DTabDetail">
      <AtMessage />
      {
        list.map((item, index) => (
          <View className="DTabDetail-list" key={index} onClick={() => goWebView(item.appIssueUrl, item.fwusertype, item.name, item.isHot)}>
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
