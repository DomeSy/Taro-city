// 获取存储数据的信息
import Taro from '@tarojs/taro'

function getStorages(key){
  return new Promise((res) => {
    Taro.getStorage({
      key,
      success: data => {
        res(data.data)
      }
    })
  })
}

export default function createAction({ type, key, cb }) {
  return async (dispatch) => {
    const res = await getStorages(key)
    dispatch({type, payload: cb ? cb(res) : res})
    return res
  }
}