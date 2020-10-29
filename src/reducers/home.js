import Taro from '@tarojs/taro'
import { HOMEINIT } from '../constants/home'

const INITIAL_STATE = {
  home: {

  }
}

function JamsData(cols) {
  let homeList = {};
  for(let i = 0; i < cols.length; i++) {
    if(cols[i].resourcename === '热门应用') {
      homeList.hotLiest = cols[i]
    } else if(cols[i].resourcename === '主题专区') {
      homeList.themeList = cols[i]
    } else if(cols[i].resourcename === '主题服务') {
      homeList.ThemeServiceList = cols[i]
    } else if(cols[i].resourcename === '上新') {
      homeList.newList = cols[i]
    } else if(cols[i].resourcename === '图片新闻') {
      homeList.rationList = cols[i]
    } else if(cols[i].resourcename === '我的证照') {
      homeList.licenceList = cols[i]
    } 
  }
  return homeList
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case HOMEINIT: {
      const { cols } = action.payload;
      const homeList = JamsData(cols)
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
