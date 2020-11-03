import { HOMEINIT } from '../constants/home'

const INITIAL_STATE = {
  home: {}
}

function JamsData(list) {
  let homeList = {};
  // 如有配置需求，需要对接写Jmas后台
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
      homeList.licenceList = item
    } else if(item.resourcename == '上新') {
      item.listAll = []
      homeList.newList = item
    } else if(item.resourcename == '个人服务') {
      item.listAll = []
      homeList.personList = item
    } else if(item.resourcename == '法人服务') {
      item.listAll = []
      homeList.legalList = item
    }else if(item.resourcename == '热搜') {
      item.listAll = []
      homeList.searchList = item
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
