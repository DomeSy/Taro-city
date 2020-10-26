import Taro from '@tarojs/taro'

class TaroMethod {
  /*
    消息通知
      message:消息内容
      type: 类型
        error：错误
        info：普通
        success：成功
        warning：警告
      duration：消息持续时间，默认2秒（ms）
  */ 
  static Message = (message, type='error', duration = 2000) => {
    return Taro.atMessage({
      message,
      type,
      duration
    })
  }

}
export default TaroMethod