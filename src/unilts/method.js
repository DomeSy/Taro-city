import { JSEncrypt } from "jsencrypt"
class Method {
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

  // 数组截取
  static Intercept = (list, end , start = 0) => {
    const arr = []
    list.map((item, index) => {
      if(index >= start && index < end){
        arr.push(item)
      }
    })
    return arr
  }

  //判断是否是空对象
  static isObject = data => {
    return Object.keys(data).length === 0 ? true : false
  }

  // RSA解密
  static RSAdecrypt = async str => {
    let PRIVATE_KEY = "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAJAKGqLW0NncBWfsB+N38oXLIpf56nxPTbMJ/xwDC5bRjHxF6Drf2ERjzFCUxBerNZg6mu59yQT45pw3hJxfFWG39ZeohjIU6uzE65mDdAbgyV03EdPkt3iHO7gOteQhdW7tlru9AA1NzuCfHwkQ5E/eWR6ovCDioBRZIM+BOYg5AgMBAAECgYBwTzCNn6mg9SlR6nwMJM54+/axQTBQVRVkcHr1wHoc0q8Thv6YSUk7qgT5H8X2HozfcXK0WmeO9PP7Al7n/kuQhSpcx8MyKar2p3te4JEi7rKD33+Hj43hxcXZ5X8SKtIbtKG0IiMCkCBsNkIu2OQwyyh8eGztOVIejsr5g9qC8QJBANM711huVsqw/VGpmLZ0AadwgBN7KWfjjqe7cRs7OZ0LE/HqDC7XLWpNGtF7aMwZV+JpW7mICMpi1wbx5mCm43sCQQCukL3MHZQBo49ezslK7Qu80RDUdPwhs91FKVlZrIZv9ECJqjJzpvUTC3rdDqtqRVbaSNE3vPkkm03J466jjGrbAkB52nV5r/0lZEBd0YYlCnrByqY3lr7mDWGH5Rt0aA/uRiu1TBzHEJ5ESkKEQbrMsnn+RGUDfDQF/Eqq2PTbIKrtAkBHAxJyikW/NO4Jv00bcbqooNOb2csHWsfUbrGuTQSTXmUym03SxkRD7xOYAXOx02s1eRHC/tjLD3JhgoF0fpapAkEAgEy994uEXu0OMkZbEtDI2nBnpi7v656COb+Fh/PCWit5NhsiEOZ7KYNc3haWERO2sC8TalmYIVb4+Buad2h9ig=="

    // const data = await myRSA(str);
    // return data.text;

    if (str == undefined) return
    // 如果是分段加密的，则要分段解密
    let arr = new Array()
    let inData = atob(str)
    let length = inData.length
    let blockSize = 128
    let round = Math.ceil(length / blockSize)
    for (let i = 0; i < round; i++) {
        let offset = i * blockSize
        let end = Math.min(blockSize, length - offset) + offset
        arr.push(btoa(inData.slice(offset, end)))
    }
    let ct = ''
    arr.map((item) => {
        let decrypt = new JSEncrypt();
        decrypt.setPrivateKey(PRIVATE_KEY);
        let t1 = decrypt.decrypt(item);
        ct += t1;
    })
    try {
      let string = JSON.parse(ct)
      if (typeof string == 'string') {
          return string
      }
      return ct
    } catch {
      return ct
    }
  }
}
export default Method