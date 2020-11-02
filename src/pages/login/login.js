import { Jump, jisConfig } from '@unilts';
import { aliCertify, AlipayRequest, getOpenRes } from '@unilts/dependence'


/*
  登录完成后跳转的两种情况
    1>switch跳转到tabbar（默认）
    2>跳转到非tabbar
      go跳转的地址(对象)
      go{
        url: 重定向的地址
        ...  其余参数
      }
*/
Page({
  data: {
    src: '',
    name: '',
    cardId: '',
    mobile: '',
    action: '', //小程序提供的服务类型
    type: '',
    token: '',
    usertype: '',
    go: false,
    faceLog: false
  },
  async onShow() {
    try {
      if (this.data.action == 'authFace') {
        if (!this.data.faceLog) return
        const { code, result = '请扫脸' } = await getOpenRes(this.data)
        this.webViewContext.postMessage({
          action: 'authFace',
          params: {
            code,
            result
          }
        })
        this.setData({
          faceLog: false
        })
      }
    } catch (error) {
      my.alert({
        content: error
      });
    }
  },
  onLoad(option){
    const { login, go } = option;
    const { webUrl } = jisConfig;
    this.data.go = go ? go : false;
    this.data.src = login ? `${webUrl}individualCenter` : webUrl;
    this.webViewContext = my.createWebViewContext('webviewContainer');
  },
  async faceGo() {
    try {
      const certify_id = await aliCertify({
        name: this.data.name,
        cardId: this.data.cardId
      })
      const url = await AlipayRequest(certify_id)
      // 跳转人脸认证
      my.ap.navigateToAlipayPage({
        path: encodeURIComponent(url),
        success: (res) => {
          this.setData({
            ...this.data,
            ...{
              name: this.data.name,
              cardId: this.data.cardId,
              mobile: this.data.mobile,
              certify_id
            }
          })
        },
        fail: (res) => {
          my.alert({
            content: JSON.stringify(res),
          });
        }
      })
    } catch (error) {
      my.alert({
        content: error
      });
    }
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
      const { go } = this.data;
      if (go) {
        my.setStorage({
          key: 'token',
          data: {
            token,
            usertype,
            type: "login",
            isLogin: false
          }
        });
        Jump({url: '/loginRedirect', method: 'redirectTo', payload: {go}})
      } else {
        my.setStorage({
          key: 'token',
          data: {
            token,
            usertype,
            type: "login",
            isLogin: true
          }
        });
        Jump({method: 'navigateBack'})
      }
      // go ? Jump({}) : 
    }else if(action === 'authFace'){
      const { name, cardId, mobile } = params
      //实人认证服务
      this.setData({
        name, cardId, mobile, action,
        faceLog: true
      })
      this.faceGo()
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
