import { aliCertify, AlipayRequest } from './dependence.js'
/*
 * 支付宝活体认证
 * api
*/
let authFaceValidate = (name = "", cardId = "") => {
  my.showLoading()
  return new Promise(async (resolved, rejected) => {
    try {
      const certify_id = await aliCertify({
        name,
        cardId
      });
      console.error(certify_id, '--0')
      const url = await AlipayRequest(certify_id)
      const statusTable = {
          '6001': '用户取消',
          '4000': '业务异常',
          '9000': '认证通过',
          '6002': '网络异常'
        }
      my.hideLoading()
      // 跳转人脸认证
      my.startAPVerify({
        url,
        certifyId: certify_id,
        complete: (res) => {
          console.error(res, '认证')

          let result = statusTable[res.resultStatus]
          if (res.resultStatus == '9000') {
            resolved(result)
          } else {
            rejected(result)
          }
        }
      })
    } catch (error) {
      my.hideLoading()
      rejected(error)
    }
  })
}

export { authFaceValidate }