import Taro from '@tarojs/taro'
import { HOMEINIT } from '../constants/home'

const INITIAL_STATE = {
  home: {

  }
}

function JamsData(list) {
  let homeList = {};
  list.map(item => {
    if(item.resourcename == '图片新闻') {
      item.listAll = []
      homeList.rationList = item
    } else if(item.resourcename == '热门应用') {
      item.listAll = []
      homeList.hotList = item
    } else if(item.resourcename == '主题服务') {
      item.listAll = []
      homeList.themeserveList = item
    } else if(item.resourcename == '主题专区') {
      item.listAll = []
      homeList.themeList = item
    } else if(item.resourcename == '我的证照') {
      item.listAll = []
      homeList.classificationList = item
    } else if(item.resourcename == '上新') {
      item.listAll = []
      homeList.newList = item
    }
  })

  list.map(item => {
    for(let key in homeList){
      if(item.parid === homeList[key].resourceid){
        homeList[key].listAll.push(item)
        return
      }
    }
  })
  return homeList
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case HOMEINIT: {
      console.log(action.payload.resource, '0000')
      const homeList = JamsData(action.payload.resource)
      return {
        home: {
          ...homeList
        }
      }
    }
    default:
      return state
  }
}
