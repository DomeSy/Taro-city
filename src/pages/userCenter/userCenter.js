Page({
  data: {
    name: '请登录',
    token: ''
  },
  onShow() {
    my.getStorage({
      key: 'USER_INFO_EXPORT',
      success: (res) => {
        let token = (res.data && res.data.token) || ''
        this.setData({
          token: token,
          name: token ? '已登录' : '请登录'
        })
      },
      fail: (res) => {
        my.alert({ content: res.errorMessage });
      }
    });
  },
  authorize() {
    my.navigateTo({
      url: '../faceWebview/faceWebview'
    })
  }
})
