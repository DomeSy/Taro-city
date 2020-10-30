import jmasRequest from './jmasRequest'

const channelfirst = payload => {
  return jmasRequest('jmportalnzjk', 'channelfirst', payload)
}

const getcomppageinterface = payload => {
  return jmasRequest('jmportalnzjk', 'getcomppageinterface', payload)
}

// 封装请求
async function userRquest({ payload = {}}) {
  const res = await channelfirst(payload)
  const data = await getcomppageinterface({channelid: res.channels[0].id})
  return data
}


export default userRquest