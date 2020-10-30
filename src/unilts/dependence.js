import CryptoJS from 'crypto-js'
import { jisConfig, Request } from './index';

const { httpRequest, appmark, appword, webUrl: jisAPP } = jisConfig || {}

// aes加密
function aesEncryptUtil(appWord, word, iv = "") {
  let key;
  if (appWord) {
    key = CryptoJS.enc.Utf8.parse(appWord);
    iv = CryptoJS.enc.Utf8.parse(iv);
  }

  let srcS = CryptoJS.enc.Utf8.parse(word), encrypted = CryptoJS.AES.encrypt(srcS, key, {
    iv: iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Hex.stringify(encrypted.ciphertext)
}

// 初始化身份认证单据号
async function aliCertify(user_info, url = "") {
  return new Promise((resolve, reject) => {
    const payload = {
      appmark,
      params: aesEncryptUtil(appword, JSON.stringify({
        cert_name: user_info.name,
        cert_no: user_info.cardId,
        return_url: url
      }))
    }
    Request({path: `${httpRequest}/jisalipay/userInitialize.do`, payload }).then(res => {
      const { retcode, msg, data } = res.data || {}
      if (retcode == '000000') {
        resolve(JSON.parse(data).alipay_user_certify_open_initialize_response.certify_id);
      } else {
        reject(msg)
      }
    }).catch( e => {
      reject(e)
    })
  })
}

//生成认证服务请求地址
async function AlipayRequest(certify_id) {
  return new Promise((resolve, reject) => {
    const payload = {
      appmark,
      params: JSON.stringify({
        certify_id
      })
    }
    Request({path: `${httpRequest}/jisalipay/userCertify.do`, payload }).then(res => {
      const { retcode, msg, data } = res.data || {}
      if (retcode == '000000') {
        resolve(data);
      } else {
        reject(msg)
      }
    }).catch( e => {
      reject(e)
    })
  })
}

//验证本次认证结果
function getOpenRes(params) {
  return new Promise((resolve, reject) => {
    const payload = {
      appmark,
      params: JSON.stringify({
        certify_id: params.certify_id
      })
    }
    Request({path: `${httpRequest}/jisalipay/userQuery.do`, payload }).then(res => {
      const { retcode, msg, data } = res.data || {}
      if (retcode == '000000') {
        const { alipay_user_certify_open_query_response: { code = "", msg = "", passed = "" } } = data && JSON.parse(data)
        resolve({
          code: code == '10000' && passed == "T" ? '200' : code,
          result: code == '10000' && passed == "T" ? '扫脸成功' : "请重新扫脸"
        })
      } else {
        reject(msg)
      }
    }).catch( e => {
      reject(e)
    })
  })
}

export { aliCertify, AlipayRequest, getOpenRes, jisAPP }