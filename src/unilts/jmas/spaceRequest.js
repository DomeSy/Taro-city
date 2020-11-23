import jmasRequest from './jmasRequest'
import ylbx from '@assets/my/ylbx.png'
import banner from '@assets/my/banner.png'

function getDate(){
  const date = new Date();
  const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = (date.getDate()) < 10 ? `0${date.getDate()}` : date.getDate();
  const hours = (date.getHours()) < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = (date.getMinutes()) < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const result = `${date.getFullYear()}/${month}/${day} ${hours}:${minutes}`
  return result
}

const getPension = async payload => {
  const { name, papersnumber, value } = payload;
  const data = {
    serviceName: 'SiServiceAgedSzf',
      operationName: 'getEmpJfxxZzCxasd',
      aac147: papersnumber,
      aae140: "A",
      rsxtid: value
  }
  const res = await jmasRequest('sdsrst', 'rssbcxjgqiyl', data, '', true)
  console.log(res.data, '-99')
  const { retrieve } = res.data
  const { aac003, aac002, aae036, bac034, aab069, bac027 } = retrieve[retrieve.length - 1] || null;
  const result = retrieve !== "null" && retrieve ? 
  {
    xm: aac003,
    sfzhm: aac002,
    DUseTime: `${aae036.substring(0,4)}/${aae036.substring(5,7)}`,
    Dmoney: Number(bac034).toFixed(2),
    Dopen: false,
    DareaValue: value,
    DCompany: aab069,
    DBasics: bac027,
    Dtip: '本服务由山东省人力资源和社会保障厅提供服务',
    Dimg: `background: url(${ylbx});background-size: 100% 100%`,
    DimgDetail: `background: url(${banner});background-size: 100% 100%`,
    Dtime: getDate(),
    Ddetail: payload.detail ? true : false,
    result: true
  } : {
    result: false
  }
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