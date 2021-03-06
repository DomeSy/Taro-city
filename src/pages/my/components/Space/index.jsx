import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Title } from '@components'
import { AtIcon } from 'taro-ui'
import { Method, Jump } from '@unilts'
import * as spaceActions from '@actions/space'
import { connect } from 'react-redux'
import * as userActions from '@actions/user'

import './index.scss'

@connect(({user, space}) => ({...user, ...space}), {...spaceActions, ...userActions})
class Index extends Component {
  constructor(){
    super(...arguments)
  }

  closeEyes = (sign) => {
    this.props.DSpaceEyes({sign});
  }

  detail = async (item) => {
    const { DareaValue, Dsign, xm, sfzhm, Darea, Dname } = item;
    await this.props.DSpaceInfo({value: DareaValue, sign: Dsign, name: xm, papersnumber: sfzhm, area: Darea, Dname: Dname, mdetail: true})
    Jump({url:'/spaceDetail', payload:{sign: item.Dsign}})
  }

  goView = async (login) => {
    if(!login){
      await this.props.dispatchQuickLogin()
    }
    Jump({url: '/subscribe'})
  }

  render() {
    const { login, space, dispatchQuickLogin } = this.props;
    const spaceAll = space.spaceAll || []
    return (
      <View className="Space">
        <Title title="我的空间" effectTitle="授权管理" login={login} fn={dispatchQuickLogin} url="/subscribe" my/>
        {
          login && spaceAll.length !== 0 ? 
          <View className="Space-Card">
          {
            spaceAll.map((item, index) => (
              <View className="Space-Card-content" key={index} style={item.Dimg}>
                <View className="Space-Card-content-title">
                  <View className="Space-Card-content-title-name">
                    <View className="Space-Card-content-title-name-text">我的{item.Dname}</View>
                    <View className={item.Dopen? 'Space-Card-content-title-name-eyes' : 'Space-Card-content-title-name-eyes Space-Card-content-title-name-close'} onClick={() => this.closeEyes(item.Dsign)}></View>
                  </View>
                  <View className="Space-Card-content-title-data">更新于{item.Dtime}</View>
                </View>
                <View className="Space-Card-content-money">
                  <View className="Space-Card-content-money-mid">
                    <View className="Space-Card-content-money-mid-all">{item.Dopen ? item.Dmoney : Method.Desensit(item.Dmoney, 0, item.Dmoney.length)}</View>
                    <View className="Space-Card-content-money-mid-text">个人缴纳金额(元)</View>
                  </View>
                  <View className="Space-Card-content-money-mid">
                    <View className="Space-Card-content-money-mid-all">{item.Dopen ? item.DUseTime : Method.Desensit(item.DUseTime, 0, item.DUseTime.length)}</View>
                    <View className="Space-Card-content-money-mid-text">最近缴纳时间</View>
                  </View>
                  <View className="Space-Card-content-money-mid">
                    <View className="Space-Card-content-money-mid-all">{item.Dopen ? item.Darea : Method.Desensit(item.Darea, 0, item.Darea.length)}</View>
                    <View className="Space-Card-content-money-mid-text">现缴纳地</View>
                  </View>
                </View>
                <View className="Space-Card-content-tip">
                  <View className="Space-Card-content-tip-text">{item.Dtip}</View>
                  <View className="Space-Card-content-tip-detail" onClick={() => this.detail(item)}>
                    <View className="Space-Card-content-tip-detail-text">查看详情</View>
                    <AtIcon value='chevron-right' size='10' color='#999999'></AtIcon>
                  </View>
                </View>
              </View>
            ))
          }
          </View>
          :
          <View className="Space-centent" onClick={() => this.goView(login)}>
            <View className="Space-centent-none">
              <View className="Space-centent-none-text">
                订阅专属服务，开启您的智慧生活…
              </View>
            </View>
          </View>
        }
   
        
      </View>
    );
  }
}

export default Index;
