import React, { Component } from 'react'
import { View, Text } from '@tarojs/components';
import { Subscribes, TabsSubscribes } from './components'
import banner from '@assets/banner.png'
import { SearchView } from '@components'

import './subscribeAdd.scss'

class SubscribeAdd extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      tabs: [
        {
          title: '公安',
          active: true
        },
        {
          title: '教育',
          active: false
        },
        {
          title: '自然',
          active: false
        },
        {
          title: '猛兽',
          active: false
        },
        {
          title: '无耻',
          active: false
        },
        {
          title: '下流',
          active: false
        },
        {
          title: '民主',
          active: false
        },
        {
          title: '和谐',
          active: false
        },
        {
          title: '自由',
          active: false
        },
        {
          title: '疯狂',
          active: false
        },
        {
          title: '爱戴',
          active: false
        },
        {
          title: '传承',
          active: false
        },
        {
          title: '相似',
          active: false
        },
        {
          title: '奇迹',
          active: false
        },
        {
          title: '契约',
          active: false
        },
        {
          title: '雷霆',
          active: false
        },
        {
          title: '掏空',
          active: false
        },
        {
          title: '阅读',
          active: false
        },
        {
          title: '伏天',
          active: false
        },
        {
          title: '零度',
          active: false
        },
        {
          title: '游戏',
          active: false
        }
      ],
      list: [
        {
          title: '公安',
          listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '教育',
          listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
          ]
        },
        {
          title: '自然',
          listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '猛兽',
          listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '无耻',
          listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '下流',
          listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '民主',
                listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '和谐',
                listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '自由',
                listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '疯狂',
                listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '爱戴',
                listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '传承',
                listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '相似',
                listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '奇迹',
                listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '契约',
                listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '雷霆',
                listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '掏空',
                listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '阅读',
                listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '伏天',
                listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '零度',
                listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        },
        {
          title: '游戏',
                listAll: [
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            },
            {
              text: '居民身份证电子 信息',
              img: `background: url(${banner});background-size: 100% 100%`
            }
          ]
        }
      ],
      value: ''
    }
  }

  onChange = (value) => {
    this.setState({
      value
    })
  }

  render() {

    const { tabs, list } = this.state;

    return (
      <View className="SubscribeAdd">
        <View className="SubscribeAdd-search">  
          <SearchView placeholder="输入要查找的证照" onChange={(value) => this.onChange(value) } />
        </View>
        <View className="SubscribeAdd-content">
          <View className="SubscribeAdd-content-left">
            <Subscribes list={tabs} />
          </View>
          <View className="SubscribeAdd-content-right">
            <TabsSubscribes list={list} />
          </View>
        </View>
        <View className="SubscribeAdd-tip">
          <View className="SubscribeAdd-tip-text">
            *更多服务，尽在“爱山东”APP。
            <Text className="SubscribeAdd-tip-text-download">如何下载？</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default SubscribeAdd
