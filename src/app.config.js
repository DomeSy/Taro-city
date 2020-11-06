export default {
  pages: [
    'pages/index/index',
    'pages/login/login',
    'pages/service/service',
    'pages/my/my',
    'pages/card/card',
    'pages/loginRedirect/loginRedirect',
    'pages/opinion/opinion',
    'pages/detail/detail',
    'pages/certificate/certificate',
    'pages/consulting/consulting',
    'pages/myConsulting/myConsulting',
    'pages/evaluate/evaluate',
    'pages/myEvaluate/myEvaluate',
    'pages/matter/matter',
    'pages/spaceDetail/spaceDetail',
    'pages/download/download',
    'pages/authorization/authorization',
    'pages/subscribe/subscribe',
    'pages/subscribeJurisdiction/subscribeJurisdiction',
    'pages/safekeeping/safekeeping',
    'pages/enclosure/enclosure',
    'pages/special/special',
    'pages/search/search',
    'pages/searchList/searchList',
    'pages/subscribeAdd/subscribeAdd',
    'pages/none/none',
    'pages/webview/webview',
    'pages/medical/medical',
    'pages/nearUse/nearUse'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '山东省',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom'
  },
  tabBar: {
    color: "#999999",
    selectedColor: "#1677FF",
    backgroundColor: "#fafafa",
    borderStyle: 'black',
    list: [{
      pagePath: "pages/index/index",
      iconPath: "./assets/tab-bar/home.png",
      selectedIconPath: "./assets/tab-bar/home-active.png",
      text: "首页"
    }, {
      pagePath: "pages/service/service",
      iconPath: "./assets/tab-bar/server.png",
      selectedIconPath: "./assets/tab-bar/server-active.png",
      text: "服务"
    }, {
      pagePath: "pages/my/my",
      iconPath: "./assets/tab-bar/my.png",
      selectedIconPath: "./assets/tab-bar/my-active.png",
      text: "我的"
    }]
  }
}
