import banner from '@assets/logo.png'

Page({
  data: {
    activeTab: 0,
    tabs: [

    ],
  },
  onShow(){
    let tabs = [
      {
        title: '公安',
        anchor: 0,
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
        anchor: 1,
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
        anchor: 2,
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
        anchor: 3,
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
        anchor: 4,
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
        anchor: 5,
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
        anchor: 6,
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
        anchor: 7,
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
        anchor: 8,
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
        anchor: 9,
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
        anchor: 10,
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
        anchor: 11,
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
        anchor: 12,
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
        anchor: 13,
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
        anchor: 14,
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
        anchor: 15,
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
        anchor: 16,
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
        anchor: 17,
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
        anchor: 18,
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
        anchor: 19,
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
        anchor: 20,
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
    ];
    this.data.tabs = tabs
  },
  handleChange(index) {
    this.setData({
      activeTab: index,
    });
  },
  onChange(index) {
    this.setData({
      activeTab: index,
    });
  },
});