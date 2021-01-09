const monitor = require('./alipayLogger.js');
const queryString = require('query-string');

let myAppId = null;

// 获取当前小程序appId
export function getMyMiniAppId() {
  if (myAppId == null) {
    myAppId = my.getAppIdSync().appId;
  }
  return myAppId;
}

// 页面pv上报云监控
export function reportCmPV({ pageCode, title, query }) {
  const url =  getCurrentPages()[getCurrentPages().length - 1].route;

  if (!title) {
    title = url;
  }

  const page = pageCode ? pageCode : title;

  const myAppId = getMyMiniAppId();

  let encodedUrl;
  
  if (query && Object.keys(query).length > 0) {
    encodedUrl =  encodeURIComponent(`${url}?${queryString.stringify(query)}`);
  } else {
    encodedUrl =  encodeURIComponent(`${url}`);
  }

  const myUrl = `alipays://platformapi/startapp?appId=${myAppId}&page=${encodedUrl}`;

  // console.log(`[YWTB] log: page: ${page}, url: ${url}, myUrl: ${myUrl}}`);
  monitor._lgPV({page, url, c1: 'h5SE', c2: myUrl});
}
