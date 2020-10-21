import React, { Component } from 'react'
import { View, Text, ScrollView } from '@tarojs/components';
import { Subscribes, TabsSubscribes } from './components'
import banner from '@assets/banner.png'
import { SearchView } from '@components'

import './subscribeAdd.scss'


//  40 + 139 * 3 = 179 
class SubscribeAdd extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      tabs: [
        {
          title: '公安',
          // active: true
        },
        {
          title: '教育'
        },
        {
          title: '自然'
        },
        {
          title: '猛兽'
        },
        {
          title: '无耻'
        },
        {
          title: '下流'
        },
        {
          title: '民主'
        },
        {
          title: '和谐'
        },
        {
          title: '自由'
        },
        {
          title: '疯狂'
        },
        {
          title: '爱戴'
        },
        {
          title: '传承'
        },
        {
          title: '相似'
        },
        {
          title: '奇迹'
        },
        {
          title: '契约'
        },
        {
          title: '雷霆'
        },
        {
          title: '掏空'
        },
        {
          title: '阅读'
        },
        {
          title: '伏天'
        },
        {
          title: '零度'
        },
        {
          title: '游戏'
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
      scrollTop: 0,
      scrollIndex: 0,
      scrollTopTab: 0,
      scrollHeight: [],
      value: ''
    }
  }
  componentDidMount(){
    const { list } = this.state;

    let sum = 0;
    const scrollHeight = [0];
    list.map((item) => {
      let height = 40 //标签是40高度
      height += Math.ceil(item.listAll.length / 2) * 139 + sum;
      sum = height;
      scrollHeight.push(height)
    })
    this.setState({
      scrollHeight: scrollHeight
    })
  }

  onChange = (value) => {
    this.setState({
      value
    })
  }

  onScroll = (e) => {
    // console.log(e)
  }

  // 处理滚动是Tab列表变化
  onScrollTab = (e) => {
    // const { scrollTop } = e.detail;
    // const { scrollHeight } = this.state;
    // for(let i = 0; i < scrollHeight.length - 1; i++){
    //   if(scrollHeight[i] <= scrollTop && scrollTop < scrollHeight[i+1]){
    //     this.setState({
    //       scrollIndex: i
    //     })
    //   }
    // }

    // let sum = 0;
    // //文字的高度，一行为19，一行显示两个图片，底下字数应取字数长作为19的倍数，一行显示7个字
    // const scrollHeight = [0]; //第一个的高度为0
    // list.map((item, index) => {
    //   //  40 + 101 + 19 + 19 = 179 
    //   let num = 0; //存储第一个数字，与第二个比大小，谁大取谁
    //   let numAll = 0; //存储整个的数字
    //   item.listAll.map((items, indexs) => {
    //     if(indexs % 2 == 0){ //第一个
    //       num = Math.ceil(items.text.length / 7)
    //       numAll += num //先加第一个
    //     }else{ //第二个
    //       const nums = Math.ceil(items.text.length / 7)
    //       numAll = num < nums ? numAll + nums - num : numAll //如果是偶，则比较，若大则替换num，改为nums
    //     }
    //   })

    //   let height = 141 //标签是40高度+照片间距101 不确定为行高
    //   height += numAll * 19 + sum;
    //   sum = height;
    //   scrollHeight.push(height)
    // })
    // console.log(scrollHeight)
  }

  // Tab点击
  getTitle = (index) => {
    const { scrollHeight, scrollNext } = this.state;
    this.setState({
      scrollTopTab: scrollHeight[index],
    })
  }

  render() {

    const { tabs, list, scrollTop, scrollTopTab, scrollIndex } = this.state;

    return (
      <View className="SubscribeAdd">
        <View className="SubscribeAdd-search">  
          <SearchView placeholder="输入要查找的证照" onChange={(value) => this.onChange(value) } />
        </View>
        <View className="SubscribeAdd-content">
          <ScrollView
            className='SubscribeAdd-content-left'
            scrollY
            scrollWithAnimation
            scrollTop={scrollTop}
            onScroll={this.onScroll}
          >
            <Subscribes scrollIndex={scrollIndex} list={tabs} getTitle={this.getTitle}/>
          </ScrollView>

          <ScrollView
            className='SubscribeAdd-content-right'
            scrollY
            scrollWithAnimation
            scrollTop={scrollTopTab}
            onScroll={this.onScrollTab}
          >
            <TabsSubscribes list={list} />
          </ScrollView>
        </View>
        {/* <View className="SubscribeAdd-tip">
          <View className="SubscribeAdd-tip-text">
            *更多服务，尽在“爱山东”APP。
            <Text className="SubscribeAdd-tip-text-download">如何下载？</Text>
          </View>
        </View> */}
      </View>
    )
  }
}

export default SubscribeAdd
