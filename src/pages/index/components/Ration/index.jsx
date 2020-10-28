import React, { Component } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components';
import './index.scss'
import { connect } from 'react-redux';
import { Method } from '@unilts'

@connect(({ home }) => home)
class Index extends Component {
  constructor(){
    super(...arguments)
  }

  async componentDidUpdate(){
    const { cols } = this.props.home
    const data = await Method.JmasData(cols, '我的证照')
  }

  render() {
    return (
      <View className="Ration">
        <Swiper
          className='Ration-swipe'
          indicatorColor='#FFFFFF'
          indicatorActiveColor='#1677FF'
          circular
          indicatorDots
          interval="3000"
          // autoplay
        >
          <SwiperItem>
            <View className='Ration-swipe-img'></View>
          </SwiperItem>
          <SwiperItem>
            <View className='Ration-swipe-img'></View>
          </SwiperItem>
          <SwiperItem>
            <View className='Ration-swipe-img'></View>
          </SwiperItem>
        </Swiper>
      </View>
    );
  }
}

export default Index;
