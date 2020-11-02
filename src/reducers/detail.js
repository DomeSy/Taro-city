import { DetailInit } from '../constants/detail'

const INITIAL_STATE = {
  detail: {}
}

function getDetail(list) {
  const { apps:{data}, resourcename, bgpicpath } = list
  let detailInit = {
    listAll: [],
    listTabs: [],
    resourcename,
    bgpicpath
  }
  let arr = {arr0:[], arr1:[], arr2:[], arr3:[], arr4:[], arr5:[]}
  data.map(item => {
    if(item.cardsource === 'tab'){
      detailInit.listTabs.push(item)
    }else if(item.cardsource === 'list0'){
      arr.arr0.push(item)
    }else if(item.cardsource === 'list1'){
      arr.arr1.push(item)
    }else if(item.cardsource === 'list2'){
      arr.arr2.push(item)
    }else if(item.cardsource === 'list3'){
      arr.arr3.push(item)
    }else if(item.cardsource === 'list4'){
      arr.arr4.push(item)
    }else if(item.cardsource === 'list5'){
      arr.arr5.push(item)
    }
  })
  for(let key in arr){
    if(arr[key].length != 0){
      detailInit.listAll.push(arr[key])
    }
  }
  return detailInit
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case DetailInit: {
      const detailInit =  getDetail(action.payload)
      return {
        detail: {
          ...detailInit
        }
      }
    }
    default:
      return state
  }
}
