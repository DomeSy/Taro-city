import React, { Component } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components';
import './index.scss'

// 搜索栏
class Index extends Component {
  render() {
    return (
      <View className="Ration">
        <Swiper
          className='swipe'
          indicatorColor='#FFFFFF'
          indicatorActiveColor='#1677FF'
          circular
          indicatorDots
          interval="3000"
          // autoplay
        >
          <SwiperItem>
            <View className='img'></View>
          </SwiperItem>
          <SwiperItem>
            <View className=''>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className=''>3</View>
          </SwiperItem>
        </Swiper>
      </View>
    );
  }
}

export default Index;
