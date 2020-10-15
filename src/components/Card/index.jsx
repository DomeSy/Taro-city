import React from 'react'
import { View, Swiper, SwiperItem  } from '@tarojs/components';
import banner from '@assets/banner.png'

import './index.scss'

function Index(){

  const list = [
    {
      img: `background: url(${banner});background-size: 100% 100%`,
    },
    {
      img: `background: url(${banner});background-size: 100% 100%`,
    }
    ,
    {
      img: `background: url(${banner});background-size: 100% 100%`
    }
  ]

  let imgUrls = [
    'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
    'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
    'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180'
  ]

  return (
    <View className="DCard">
       <Swiper
        className='DCard-swiper'
        indicatorColor='#D8D8D8'
        indicatorActiveColor='#1677FF'
        indicatorDots
        previousMargin='24px'
        nextMargin='24px'
      >
        {
          list.map((item, index) => (
            <SwiperItem key={index}  nextMargin="300"
            previousMargin="300" className='DCard-swiper-item'>
              <View className='DCard-swiper-item-view'>
                <View className='DCard-swiper-item-view-img' style={item.img} ></View>
              </View>
            </SwiperItem>
          ))
        }
      </Swiper>
    </View>
  )
}

export default Index;
