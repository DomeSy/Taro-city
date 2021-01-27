import jmasRequest from './jmasRequest'

const channelfirst = payload => {
  return jmasRequest('jmportalnzjk', 'channelfirst', payload)
}

const getcomppageinterface = payload => {
  return jmasRequest('jmportalnzjk', 'getcomppageinterface', payload)
}

// 封装请求 payload: index 是channels的索引值，根据jmas来加的，目前只有两个
async function userRquest({ payload = {}}) {
  const res = await channelfirst(payload);
  const index = payload.index || 0;
  let data = {}
  if(res.channels[index]) data = await getcomppageinterface({channelid: res.channels[index].id})
  return data
}


export default userRquest