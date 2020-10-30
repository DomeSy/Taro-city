import React from 'react'
import { View, Swiper, SwiperItem, Image  } from '@tarojs/components';
import banner from '@assets/banner.png'

import './index.scss'

const number = 5

function Index(){
  let list = [
    {
      img: `background: url(${banner});background-size: 100% 100%`,
    },
    {
      img: `background: url(${banner});background-size: 100% 100%`,
    }
  ]
  list = list.length <= number ? list : Method.Intercept(list, number)
  const text = list.length <= number ? '立即订阅' : '查看全部'

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
            <SwiperItem key={index}  nextMargin="300" previousMargin="300" className='DCard-swiper-item'>
              <View className='DCard-swiper-item-view'>
                <Image className='DCard-swiper-item-view-img' src='../../../../../assets/banner.png' ></Image>
              </View>
            </SwiperItem>
          ))
        }
          <SwiperItem nextMargin="300" previousMargin="300" className='DCard-swiper-item'>
              <View className='DCard-swiper-item-view'>
                <View className='DCard-swiper-item-view-text'>
                  + {text}
                </View>
              </View>
          </SwiperItem>
      </Swiper>
    </View>
  )
}

export default Index;
