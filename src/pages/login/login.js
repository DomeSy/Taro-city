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
    this.webViewContext = my.createWebViewContext('webviewContainer');
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
    }else if (action === 'loginApp'){
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
    }else if (action === 'scan'){
      //登录
      const { token, usertype } = e.detail.params;
      my.scan({
        scanType: ['qrCode'],
        success: (res) => {
          this.webViewContext.postMessage({
            action: 'scan',
            params: res.code
          })
        },
      });
    }
  }
})
