import jmasRequest from './jmasRequest'

// const channelfirst = payload => {
//   return jmasRequest('jmportalnzjk', 'channelfirst', payload)
// }

// const getcomppageinterface = payload => {
//   return jmasRequest('jmportalnzjk', 'getcomppageinterface', payload)
// }

const getPension = async payload => {
  const { name, papersnumber, value } = payload;
  const data = {
    rsxtid: "3754",
    sfzhm: "320382194408085022",
    xm: "梁龙春",
    // xm: name,
    operationName:"locPer_WithFlag",
    serviceName:"SiUrService"
  }
  const res = await jmasRequest('sdsrst', 'rsjmylgrcb', data)

  const { ds_info } = res.data
  const result = ds_info.length === 0 ? { result: false } : {...ds_info[0], result: true}
  return result
}

// 封装请求
async function userRquest({ payload = {}}) {
  let res;
  if (payload.sign === 'pension') {
    res = await getPension(payload)
  }
  return res
}


export default userRquest