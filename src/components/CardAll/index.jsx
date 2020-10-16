import React from 'react'
import { View } from '@tarojs/components'

import { AtSwipeAction } from "taro-ui"
import sfz from '@assets/sfz.png'

import './index.scss'

function Index(){

  const list = [
    {
      img : `background: url(${sfz});background-size: 100% 100%`
    },
    {
      img : `background: url(${sfz});background-size: 100% 100%`
    },
    {
      img : `background: url(${sfz});background-size: 100% 100%`
    },
  ]
  return (
    <View className="DCardAll">
      {
        list.map((item, index) => (
          <View className="DCardAll-list" key={index}>
            <AtSwipeAction
                key={index}
                options={[
                {
                  text: '取消订阅',
                  style: {
                    backgroundColor: '#FE7273',
                    marginLeft: '12px',
                    borderRadius: '8px'
                  }
                }
              ]}
                // onOpened={this.handleOpened}
                // onClosed={this.handleClosed}
              >
              <View className='DCardAll-list-img' style={item.img}></View>
            </AtSwipeAction>
          </View>
        ))
      }
    </View>
  )
}

export default Index;
