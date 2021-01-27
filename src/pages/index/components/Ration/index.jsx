import React, { Component } from 'react'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import './index.scss'
import { Method, Jump } from '@unilts'
import { connect } from 'react-redux';

@connect(({home}) => home)
class Index extends Component {
  constructor(){
    super(...arguments)
  }

  render() {
    let { rationList } = this.props.home
    if(!Method.isObject(this.props.home) && rationList){
      rationList = rationList.listAll.length === 0 ? rationList.infos : rationList.listAll;
    } else { 
      return <View></View>
    }
    
    return (
      <View className="Ration">
        <Swiper
          className='Ration-swipe'
          indicatorColor='#FFFFFF'
          indicatorActiveColor='#1677FF'
          circular
          autoplay
          indicatorDots
          interval="3000"
        >
          {
            rationList.map((item, index) => (
              <SwiperItem key={index}>
                <Image className='Ration-swipe-img' src={item.imageurl} onClick={() => Jump({url: item.url})}></Image>
              </SwiperItem>
            ))
          }
        </Swiper>
      </View>
    );
  }
}

export default Index;
