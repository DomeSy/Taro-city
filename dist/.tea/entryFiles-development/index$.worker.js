if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../pages/index/index?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../pages/service/service?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/card/card?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/opinion/opinion?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/certificate/certificate?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/consulting/consulting?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/myConsulting/myConsulting?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/evaluate/evaluate?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/myEvaluate/myEvaluate?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/matter/matter?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/authorization/authorization?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/subscribe/subscribe?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/subscribeJurisdiction/subscribeJurisdiction?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/safekeeping/safekeeping?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/enclosure/enclosure?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/search/search?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/searchList/searchList?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/subscribeAdd/subscribeAdd?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/none/none?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/webview/webview?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/download/download?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/medical/medical?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/detail/detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/nearUse/nearUse?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}