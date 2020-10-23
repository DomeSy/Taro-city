import { Jump } from '@unilts';

Page({
  data: {

  },
  onShow() {

  },
  authorize() {

  },
  async webListener(e) { 
    console.log(e.detail.params,'00')
    const { token, usertype } = e.detail.params;
    Jump({url: '/my', payload: {token, usertype}})
  }
})
