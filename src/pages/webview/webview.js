import { Jump, jisConfig, userToken } from '@unilts';
import { aliCertify, AlipayRequest, getOpenRes } from '@unilts/dependence'
Page({
  data: {
    src: '',
  },
  async onShow(option) {

  },
  onLoad(option){
    const { url, title } = option
    my.setNavigationBar({
      title
    })
    this.webViewContext = my.createWebViewContext('webviewFace');
    this.data.src = url
  },
  async onFaceAlipay(e) { 
    console.error(e,'---9')
    // this.webViewContext.postMessage({'sendToWebView': '1'});
  }
})
