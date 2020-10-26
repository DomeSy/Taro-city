import { Jump, jisConfig } from '@unilts';

Page({
  data: {
    src: ''
  },
  onShow() {
  },
  onLoad(option){
    const { login } = option;
    const { webUrl } = jisConfig;
    this.data.src = login ? `${webUrl}individualCenter` : webUrl
  },
  authorize() {

  },
  async webListener(e) { 
    const { action } = e.detail;
    if(action === 'loginOut'){
      //退出
      Jump({url: '/my', payload: {type: "loginOut"}, method: 'navigateBack'})
    }else {
      //登录
      const { token, usertype } = e.detail.params;
      Jump({url: '/my', payload: {token, usertype, type: "login"}, method: 'navigateBack'})
    }
  }
})
