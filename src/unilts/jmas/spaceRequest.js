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
    // rsxtid: "3763",
    // sfzhm: "342225197011111989",
    // xm: "彭增芹",
    rsxtid: value,
    sfzhm: papersnumber,
    xm: name,
    operationName:"queryRcAgedPayHisInfo",
    serviceName:"SiUrService"
  }
  const res = await jmasRequest('sdsrst', 'rsjmylgrcb', data, '', true)
  const { xm, sfzhm, ljjfnx, ljjfje, errflag } = res.data;
  const result = errflag == 0 ? 
  {
    xm,
    sfzhm,
    ljjfnx,
    ljjfje: Number(ljjfje).toFixed(2),
    Dopen: false,
    Dtip: '本服务由山东省人力资源和社会保障厅提供服务',
    Dimg: `background: url(${ylbx});background-size: 100% 100%`,
    DimgDetail: `background: url(${banner});background-size: 100% 100%`,
    Dtime: getDate(),
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