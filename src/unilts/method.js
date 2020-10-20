
class Method {
  /*
    脱敏
      str: 脱敏文本
      start: 开始位置
      end: 结束位置
  */ 
  static desensitization = (str, start, end = str.length) => {
    for(let i = start;i < end; i++){
      str = str.replace(str[i], '*')
    }
    return str;
  }
}
export default Method