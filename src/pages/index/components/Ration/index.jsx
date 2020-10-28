import React, { Component } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components';
import './index.scss'

class Index extends Component {
  constructor(){
    super(...arguments)
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
