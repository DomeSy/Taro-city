import { Jump, jisConfig } from '@unilts';

Page({
  data: {
    src: '',
    type: '',
    token: '',
    usertype: ''
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
      my.setStorage({
        key: 'token',
        data: {
          token: '',
          usertype: '',
          type: "loginOut"
        }
      });
      //退出
      Jump({method: 'navigateBack'})
    }else {
      //登录
      const { token, usertype } = e.detail.params;
      my.setStorage({
        key: 'token',
        data: {
          token,
          usertype,
          type: "login"
        }
      });
      Jump({method: 'navigateBack'})
    }
  }
})
