# jsonp-retry

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![npm](https://img.shields.io/npm/v/jsonp-retry.svg?style=flat-square)](https://www.npmjs.com/package/jsonp-retry)
[![Build Status](https://img.shields.io/travis/luckyadam/jsonp-retry.svg?style=flat-square)](https://travis-ci.org/luckyadam/jsonp-retry)
[![Code Climate](https://img.shields.io/codeclimate/github/luckyadam/jsonp-retry.svg?style=flat-square)](https://codeclimate.com/github/luckyadam/jsonp-retry)
[![Coverage Status](https://img.shields.io/coveralls/luckyadam/jsonp-retry.svg?style=flat-square)](https://coveralls.io/github/luckyadam/jsonp-retry?branch=master)
[![npm](https://img.shields.io/npm/dw/jsonp-retry.svg?style=flat-square)](https://www.npmjs.com/package/jsonp-retry)

A simple implementation of jsonp, it provides timeout and retry function, when the main request is failed because of timeout, there will be many retries.

And the surprise was, you can store the response data to localStorage with **jsonp-retry** automatically, and then it can get the data from localStorage without request from network if it detects the store data is available.Of course, you can custom the store check rule.You will learn how to use this function from the below.

Happy to use!😘🤡

## Installation

If you use webpack or browserify, you can install this package with npm or yarn

``` bash
npm install jsonp-retry --save
```

or

``` bash
yarn add jsonp-retry
```

Then require and use it

```javascript

import jsonp from 'jsonp-retry'

jsonp('//example.com/xxx', {
  timeout: 3000
}, function (err, data) {
  if (err) {
    throw err
  }
  // Todo with data
})
```

or use in Promise way

```javascript

import jsonp from 'jsonp-retry'

jsonp('//example.com/xxx', {
  timeout: 3000
}).then(data => {
  // Todo with data
}).catch(err => {
  throw err
})
```

## Usage

**jsonp-retry** provides a flexible way of using it, usually you can pass an callback to process the request result, and more elegantly, if your environment support [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), you can use **jsonp-retry** in Promise way.

Usually it accept 3 arguments, `url`、`opts`、`cb`, of course `cb` is not required.It will return an instance of Promise if your environment support.

### jsonp(url, opts, cb?)

* `url`(`String`): the url to fetch data
* `opts`(`Object`): optional, config the jsonp method
  * `jsonp`(`String`): appoint the jsonp request url key (defaults to `callback`)
  * `name`(`String`): appoint the jsonp callback function (defaults to a string with prefix '__jsonp' and current time stamp like `__jsonp1504108585883` )
  * `params`(`String` or `Object`): appoint the jsonp request url params, it can be a query string like `a=1&b=2&c=3` , or it can be an object like `{ a: 1, b: 2 }` ,it will transform to a query string
  * `cache`(`Boolean`): appoint the jsonp request url whether to be cached (defaults to `false`)
  * `timeout`(`Number`): how long after a timeout error is emitted (defaults to `2000ms`)
  * `retryTimes`(`Number`): when the request is timeout it can appoint how many times to retry (defaults to `2`)
  * `backup`(`String` or `Array`): appoint a backup url or multiple backup urls, if the url param request is failed, it will use backup url(s) to get backup data for correct display
  * `dataCheck`(`Function`): a function to check the response data is correct, the function will accept the response data as arguments, if it returns false jsonp-retry would use the backup url(s) to fetch data if there has backup or it will emit an error
  * `useStore`(`Boolean`): appoint to use localStorage to get or set data or not (defaults to `false`)
  * `storeCheckKey`(`String`): appoint the key to check in store, it is generally a field of the data which get from localStorage, with it we can get something like version of the data
  * `storeSign`(`String`): the new data version, you can compare it with the old version of the data in localStorage
  * `storeCheck`(`Function`): check the data from localStorage if correct (`storeCheck` has been defined inside, you can pass your own function to cover)
  * `charset`(`String`): appoint the charset of the script tag (defaults `UTF-8`)
* `cb`(`function`): the request callback, accept 2 arguments, `err` tells if there has an error, `data` is the response data

In the same way, you can put the first `url` argument into `opts`, so there will only need to pass only 2 arguments like

### jsonp(opts, cb?)

* `opts`(`Object`): optional, config the jsonp method
  * `url`(`String`): the url to fetch data
  * others are same as up here
* `cb`(`function`): the request callback, accept 2 arguments, `err` tells if there has an error, `data` is the response data

## License

MIT License

Copyright (c) 2017 Li,Weitao

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
