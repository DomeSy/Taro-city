import { Jump } from '@unilts';

Page({
  data: {

  },
  onShow() {

  },
  authorize() {

  },
  async webListener(e) { 
    const { token, usertype } = e.detail.params;
    Jump({url: '/my', payload: {token, usertype, type: "login"}})
  }
})
