import React, { Component } from 'react'
import { View, Text } from '@tarojs/components';
import { SearchView } from '@components'
import { JmasRequest, Jump, Method } from '@unilts'
import { connect } from 'react-redux';
import { AtMessage } from 'taro-ui'
import './search.scss'

@connect(({site, user}) => ({...site, ...user}))
class Search extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      value: '',
      list: [
        {
          text: '社保'
        },
        {
          text: '出入境'
        },
        {
          text: '出入境出入境'
        }
        ,
        {
          text: '出入'
        },
        {
          text: '出入境出入境'
        },
        {
          text: '出入境出入境'
        }
      ],
      lists: [
        {
          text: '社保'
        },
        {
          text: '社保社保社保社保社保社保社保社保社保社保社保社保社保社保社保社保社保'
        }
      ],
      show: false,
      applist: [] //搜索列表
    }
  }

  onChange = async (value) => {
    const { siteid } = this.props.site
    const res = await JmasRequest('jmportalnzjk', 'searchinfolist', {
      siteid: '620fac8584594096b873a411c93ae228',
      keyword: "律师",
      num: 10,
      page: 1,
      type: 0,
      resourceid: ''
    })
    const { applist } = res.resource[0]
    this.setState({
      value,
      show: value ? true : false,
      applist
    })
  }

  TextChange = (str, active) => {
    let name = str.replace(active, '@!').split('@!');
    return (
      <> 
        <Text>{name[0]}</Text>
        <Text className="Searchs-result-list-active">{active}</Text>
        <Text>{name[1]}</Text>
      </>
    )
  }

  goWeb = (item) => {
    const { url, fwusertype, name } =item;
    const { usertype } = this.props.userInfo
    this.goWebView(url, fwusertype, name, usertype)
  }

  // 用于判断事项是否是有个人法人的，是否登录状态
  goWebView = (url, fwusertype, name, type) => {
    if (fwusertype === 0) {
      url ? Jump({url}) : Jump({url: '/none', payload: {name}})
    } else {
      if(type){
        if(type === fwusertype || (fwusertype !== 1 && fwusertype !== 2)){
          url ? Jump({url}) : Jump({url: '/none', payload: {name}})
        } else {
          const message = fwusertype === 1 ? '个人' : '法人'
          Taro.atMessage({
            message: `当前事项只允许${message}办理`,
            type: 'error',
            duration: 2000
          }) 
        }
      }else{
        // type为false需要跳转登录
        Jump({url: '/login', payload: {go: JSON.stringify({url, fwusertype})}})
      }
    }
  }

  render() {

    const { list, lists, show, applist, value } = this.state;
    return (
      <View className="Searchs">
        <AtMessage />
        <SearchView placeholder="请输入搜索关键词" onChange={(value) => this.onChange(value) } />
        <View className="Searchs-border"></View>
        {
          show ? 
          <>
            <View className="Searchs-result">
              {
                applist.length === 0 ? 
                <View className="Searchs-result-list Searchs-result-none"><Text>暂无内容</Text></View>
                :
                <>
                  {
                    applist.map((item, index) => (
                      <View className="Searchs-result-list" key={index} onClick={() => this.goWeb(item)}>
                        {
                          // this.TextChange(item.name , value)
                          this.TextChange(item.name , "律师")
                        }
                      </View>
                    ))  
                  }
                </>
              }
            </View>
          </> :
          <>
            <View className="Searchs-title">热门搜索</View>
            <View className="Searchs-hot">
              {
                list.map((item, index) => (
                  <Text className="Searchs-hot-text" key={index}>{item.text}</Text>
                ))
              }
            </View>
            <View className="Searchs-title">历史搜索</View>
            {
              lists.map((item, index) => (
                <View className="Searchs-list" key={index + 'searchs'}>
                  <View className="Searchs-list-left">
                    <View className="Searchs-list-left-clock"></View>
                    <View className="Searchs-list-left-text">{item.text}</View>
                  </View>
                  <View className="Searchs-list-close"></View>
                </View>
              ))
            }
            <View className="Searchs-log">
              <View className="Searchs-log-text">清除所有历史记录</View>
            </View>
          </>
        }


      </View>
    )
  }
}

export default Search;
