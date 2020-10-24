import { JSEncrypt } from "jsencrypt"
import Taro from '@tarojs/taro'

class Method {
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

  /*
    脱敏
      str: 脱敏文本
      start: 开始位置
      end: 结束位置
  */ 
  static Desensit = (str, start, end = str.length) => {
    for(let i = start;i < end; i++){
      str = str.replace(str[i], '*')
    }
    return str;
  }

  // RSA解密
  static RSAdecrypt = data => {
    let PRIVATE_KEY = "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAJAKGqLW0NncBWfsB+N38oXLIpf56nxPTbMJ/xwDC5bRjHxF6Drf2ERjzFCUxBerNZg6mu59yQT45pw3hJxfFWG39ZeohjIU6uzE65mDdAbgyV03EdPkt3iHO7gOteQhdW7tlru9AA1NzuCfHwkQ5E/eWR6ovCDioBRZIM+BOYg5AgMBAAECgYBwTzCNn6mg9SlR6nwMJM54+/axQTBQVRVkcHr1wHoc0q8Thv6YSUk7qgT5H8X2HozfcXK0WmeO9PP7Al7n/kuQhSpcx8MyKar2p3te4JEi7rKD33+Hj43hxcXZ5X8SKtIbtKG0IiMCkCBsNkIu2OQwyyh8eGztOVIejsr5g9qC8QJBANM711huVsqw/VGpmLZ0AadwgBN7KWfjjqe7cRs7OZ0LE/HqDC7XLWpNGtF7aMwZV+JpW7mICMpi1wbx5mCm43sCQQCukL3MHZQBo49ezslK7Qu80RDUdPwhs91FKVlZrIZv9ECJqjJzpvUTC3rdDqtqRVbaSNE3vPkkm03J466jjGrbAkB52nV5r/0lZEBd0YYlCnrByqY3lr7mDWGH5Rt0aA/uRiu1TBzHEJ5ESkKEQbrMsnn+RGUDfDQF/Eqq2PTbIKrtAkBHAxJyikW/NO4Jv00bcbqooNOb2csHWsfUbrGuTQSTXmUym03SxkRD7xOYAXOx02s1eRHC/tjLD3JhgoF0fpapAkEAgEy994uEXu0OMkZbEtDI2nBnpi7v656COb+Fh/PCWit5NhsiEOZ7KYNc3haWERO2sC8TalmYIVb4+Buad2h9ig=="

    //使用私钥解密
    let decrypt = new JSEncrypt();
    decrypt.setPrivateKey('-----BEGIN RSA PRIVATE KEY-----'+PRIVATE_KEY+'-----END RSA PRIVATE KEY-----');
    return decrypt.decrypt(data);
  }
}
export default Method