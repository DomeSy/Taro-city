# Taro-city：山东省支付宝，爱山东
多端开发 taro3 + React + redux + taro-ui


## 心得
  本是一个写React，不知道为啥进的公司用的Vue，大概也就混了一年吧，所以使用的redux，就当练手，重温下React吧，所有的页面大概都小于150行，不知道这么写对不对，秉承着React的一切皆组件的思想，所以把页面画的比较开，但逻辑也非常清晰，应该只要会React的都能看懂，如果你是刚入门写Taro的，我觉得有必要看看代码逻辑，当然高手并不适用，要说遗憾的一点就是这个项目应该是用TS和Mobx写的，当然如果Recoil正式推出的话，用作状态库应该就完美了

#### 如果本项目对你有帮助，请不要吝啬你的star

## 目录结构

    |-- config                                # Taro项目配置，包括别名等
    |-- src                                   # 开发目录
    |   |-- assets                            # 本地静态资源
    |   |-- components                        # 业务组件
    |   |-- pages                             # 页面模板
    |   |-- actions                           # action
    |   |-- constants                         # 状态名
    |   |-- reducers                          # reducer
    |   |-- store                             # 存储库
    |   |-- styles                            # 全局css文件
    |   |-- unilts                            # 公共方法
    |   |   |--request                        # Taro接口封装
    |   |   |--jmas                           # 有关jmas（公司产品）的接口封装和需要存储在状态库的文件
    |   |   |--jump                           # Taro跳转逻辑封装
    |   |   |--authFace                       # 人脸识别
    |   |   |--method                         # 通用方法
    |   |   |--reduxRequest                   # 统一请求方式
    |   |   |--storage                        # 需要存储本地的方法
    |   |   |--site                           # 站点
    |-- .gitignore                            # git忽略文件
    |-- babel.config                   
    |-- package-lock        
    |-- project.config.json        
    |-- yarn.lock       
    |-- yarn-error.log   
    |-- README.md 
## 使用

```javascript

  npm install -g @tarojs/cli

  git clone https://github.com/DomeSy/Taro-city.git

  cd Taro-city

  yarn install 

  npm run dev:alipay

  npm run build:alipay

```


## 项目展示

  在支付宝上搜索爱山东，即可看到效果


## 一期功能
  登录模块，用户模块，搜索模块，主题服务模块，人脸识别模块等。封装接口，跳转方式，不同情况下未登录时跳转登录在跳转页面方式

  异常页面
  
    说明：封装请求异常时跳转的页面，并封装请求方式，点击刷新时重回到这个页面

    逻辑：请求异常的时候卸载当前页面，当用户点击刷新时在重新跳转到请求异常的页面重新刷新

    好处：方便，可以不用去管页面内的方法，如onLoad，componentDidMountd等

    注意：跳转要注意是否是Tab页面，Tab页面需要用witchTab，否则用redirectTo

  登录模块：


    说明：对接用户体系是比较大的模块，这里的用户体系是通过封装的多端一体化的用户体系，所以通过WebView中的onMessage进行通行
  
    功能：人脸识别，扫一扫，修改密码等功能
    
      1>登录完成跳会本页面（如登录，服务页的最近使用）

        这块分为两部分：跳会到原页面不做任何处理，跳会到原页面执行方法（这里需要在执行的方法自己判断，这里不封装统一的方法执行，如：意见反馈）
      
      2>登录完成跳到所指定的页面（如：我的空间的授权管理,跳转纯外链等）

      3>登录完成调到外链，但需要添加用户信息（原因：hybrid混合开发，一开始集成的主流APP，所以这块要将用户信息带入过去，在通过客户端封装的方法上获取用户信息等，之后也会做与客户端的通信来调取人脸识别，如所有需要用户信息的事项）


  人脸识别

    说明：通过人脸识别来确定是否是本人，是本人才让办理，否则不让

    逻辑：目前用my.ap.navigateToAlipayPage这种方式进行扫脸，大概思路是初始化生成认证编号单据，在生成认证。其重要ASE加密，在后在onShow阶段验证本次结构是否完成，前两步没什么问题，第三部有点问题，还有就是用avigateToAlipayPage这个方法，这个方法只是掉起人脸，因为要和H5通行，JSSDK会告诉我是否需要人脸，而我也会告诉客户端，所以通过此方法不行


  站点模块：
    
    说明：站点切换，

    逻辑：山东省下面的城市有站点id作为参数来请求数据，站点切换因进行本地存储，原因比如说我一开始进入的省本级，而我在菏泽市，我希望一直在菏泽市的站点下，所以存储应该在本地

    好处：可以每次进来都进入到切换时的站点（登录存在的话，退出登录应该清楚站点的缓存）

    注意：因为是写死的数据，所以我把站点id保存起来，但这样有个问题，站点id如果改变就凉了，因为他会走本地哪的站点，这点一开始没考虑到，实施的把站点id改了，我才发现有这个问题（写死的数据都能随意变~~~）所以一开始有缓存的时候就遍历了下，通过省份名来拿站点id，如果你能把省份名做修改，那我认栽！！！
    
  城市服务模块
    
    说明：将小程序里的某个引用单独拿出来，做支付宝的一个应用

    参考 [城市服务](https://opensupport.alipay.com/support/helpcenter/142/201602496413?ant_source=antsupport) 

    逻辑：通过webView配置跳转地址，从而实现，这里的问题是：用户信息，有些跳转的应用需要用户信息

    注意：三种情况： 
      
      1>无用户信息的直接跳转

      2>有用户信息但没登录，先跳转登录在跳转页面

      3>由用户信息已登录，token过期重新登录跳转页面，token没过期，直接跳转页面

    测试：使用支付宝开发工具进行预览或调试，在三个点那有个联调设置需要打开，然后退出去打开链接即可


  跳转模块和请求模块
    
    跳转模块： 任何跳转形式都以封装，并能判断跳转的时候是哪个端进入

    请求模块：

      1>封装基础请求模块，get，post等

      2>在通过基础请求的文件上增加jmas（公司产品，呵~）

## 二期功能
  新增云监控功能

    说明：针对城市服务所做的监控，也就是埋点
    
    文档：[服务拆解和服务监控](https://opendocs.alipay.com/open/019xsg?scene=SC00001026)

  用户体系整改

    说明： 由于一开始做的页面是统一用户中心的也就是多端，但现在不满足需求，原因是界面适合于爱山东的，而并非小程序，所以要改下，用户体系分为个人和法人，将个人与法人进行拆分，将个人登录直接弄成快登，这里就需要在Taro中整改，目测比较麻烦~

## 原因
  公司之前做的爱山东支付包小程序太过垃圾，导致现在要重构，这个项目就轮到我了，但我这个人恰好没有了解过支付包小程序，只会写基本的用法，与其使用学习小程序，不如学习Taro（站在React一端的），现在微信，支付宝，百度，京东，字节等小程序层出不穷，故多端肯定是以后的趋势（至于为什么不用公司产品直接搭建，大家都懂~）

### Taro框架（问题） 
  1>redux-persist持久化在小程序内无法使用，只能使用存储
  
  2>Taro在新办中获取路由的方法getCurrentInstance()，无法在H5中获取传递的参数，小程序可以

### 构建问题

  1>组件问题：所谓组件就是可以服用，提高复用率，但当遇见较为复杂的组件封装时，要想复用，比如说列表，列表本身没有太多的难度，单给列表加上足够多的条件时，所需要的参数就变多了(如主标题，副标题，主标题后面显示的图案，是否跳转等)参数一多，那么固定的传的值也就必须固定了，这本身没有问题，但在大多数情况下列表的数据是接口返回的，里面的字段都不同，所展示的内容也就不同的字段，那么要是想用这个组件，必须要将接口返回的数据过滤出来，换成组件想用的参数作为替换，那么过滤这一步骤，感觉跟不用组件重新写个列表的过程差不多，那么还有必要使用组件吗？（这点，到底怎么样来创造出完美的组件问题）
  
  2>目前我认为将获取的token然后调取接口获得用户信息，然后存入缓存，当用户关闭程序，再次打开时就能拿到自己的信息，为什么不重新通过调接口呢？（反正想的拿到的信息都一样，也就没必要调用接口，影响加载速度）
  
    但是我想的有问题，原因是token，他并不是恒定的，是会有实效性，也就是说，我如果一直存在缓存里，这本身就是错误的，那么问题来了，我无法知道token是否是最新值，并不知道它存在多久才会刷新，那么我该如何知道他是最新的值呢？目前只能每次重新打开时小程序时调用登录接口，看是否能获取到信息，如果获取到，则证明token没有刷新，反之，清空所有缓存
    
    在这里要说下，在小程序与H5做交互时，H5需要获取用户信息，也就是token奥
    
      我有点多虑的点，那就是什么时候调取登录接口呢，只在首次加载的时候就调用吗？是不是在跟h5做交互的时候再次调取登录接口看是否是最新的token呢？这样不是很影响性能吗？  其实这点完全没有必要去考虑，原因很简单他是小程序，不是支付宝（App），百分之九十九都会用完直接关闭的，这点时间token是不可能刷信息，所以不需要考虑。（考虑过多~~~，那么剩下的百分之一呢，大家都懂）
      
    那么有人可能会说我在打开的一瞬间token是存在的，过了一两秒token失效了怎么办？那我觉得概率太低，说白了也无法去解决。


