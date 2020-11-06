import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Title } from '@components'
import { AtIcon } from 'taro-ui'
import Jump from '@unilts/Jump';
import ylbx from '@assets/my/ylbx.png'
import { connect } from 'react-redux'

import './index.scss'

const list = [
  {
    title: '我的医保',
    time: '2020/09/17 16:00',
    open: true,
    img: `background: url(${ylbx});background-size: 100% 100%`,
    listAll: [
      {
        text: '9999.99',
        name: '账户余额(元)'
      },
      {
        text: '9999.99',
        name: '累计缴纳(月)'
      },
      {
        text: '济南',
        name: '现缴纳地'
      }
    ],
    tip: '本服务由山东省社保局提供服务'
  },
  // {
  //   title: '我的医保1',
  //   time: '2020/09/17 16:00',
  //   open: true,
  //   img: `background: url(${banner});background-size: 100% 100%`,
  //   listAll: [
  //     {
  //       text: '9999.99',
  //       name: '账户余额(元)'
  //     },
  //     {
  //       text: '9999.99',
  //       name: '累计缴纳(月)'
  //     },
  //     {
  //       text: '济南',
  //       name: '现缴纳地'
  //     }
  //   ],
  //   tip: '本服务由山东省社保局提供服务'
  // }
]

@connect(({user, space}) => ({...user, ...space}))
class Index extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      list
    }
  }

  render() {
    const { list } = this.state;
    const { login, space } = this.props;
    const spaceAll = space.spaceAll || []
    console.log( this.props, '----90087866')

    return (
      <View className="Space">
        <Title title="我的空间" effectTitle="授权管理" login={login} url="/subscribe" my/>
        {
          login ? 
          <View className="Space-Card">
          {
            spaceAll.map((item, index) => (
              <View className="Space-Card-content" key={index} style={item.Dimg}>
                <View className="Space-Card-content-title">
                  <View className="Space-Card-content-title-name">
                    <View className="Space-Card-content-title-name-text">我的{item.Dname}</View>
                    {/* <View className={item.open? 'Space-Card-content-title-name-eyes' : 'Space-Card-content-title-name-eyes Space-Card-content-title-name-close'}></View> */}
                    <View className={'Space-Card-content-title-name-eyes'}></View>
                  </View>
                  <View className="Space-Card-content-title-data">更新于{item.Dtime}</View>
                </View>
                <View className="Space-Card-content-money">
                  <View className="Space-Card-content-money-mid">
                    <View className="Space-Card-content-money-mid-all">{item.ljjfje}</View>
                    <View className="Space-Card-content-money-mid-text">账户余额(元)</View>
                  </View>
                  <View className="Space-Card-content-money-mid">
                    <View className="Space-Card-content-money-mid-all">{item.ljjfnx}</View>
                    <View className="Space-Card-content-money-mid-text">累计缴纳(年)</View>
                  </View>
                  <View className="Space-Card-content-money-mid">
                    <View className="Space-Card-content-money-mid-all">{item.Darea}</View>
                    <View className="Space-Card-content-money-mid-text">现缴纳地</View>
                  </View>
                </View>
                <View className="Space-Card-content-tip">
                  <View className="Space-Card-content-tip-text">{item.Dtip}</View>
                  <View className="Space-Card-content-tip-detail">
                    <View className="Space-Card-content-tip-detail-text">查看详情</View>
                    <AtIcon value='chevron-right' size='10' color='#999999'></AtIcon>
                  </View>
                </View>
              </View>
            ))
          }
          </View>
          :
          <View className="Space-centent" onClick={() => Jump({url: '/login'})}>
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
