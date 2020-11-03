import React, { Component } from 'react'
import { View, Text } from '@tarojs/components';
import { SearchView } from '@components'
import { JmasRequest, Jump, Method } from '@unilts'
import { connect } from 'react-redux'
import * as actions from '@actions/search'
import { AtMessage } from 'taro-ui'
import './search.scss'

@connect(({site, user, search}) => ({...site, ...user, ...search}), {...actions})
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
      show: false,
      applist: [] //搜索列表
    }
  }

  componentDidMount = () => {
    const { DSearchInit, search } = this.props
    DSearchInit()
    // console.log(search, '001')
  }

  // 获得值
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

  // 通过字来改变样式
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

  goWeb = item => {
    const { userInfo:{usertype}, DSearchSet, search} = this.props;
    const { url, fwusertype, name } =item;
    const list = [...search, {url, fwusertype, name}];
    this.setState({
      value: '',
      show: false
    })
    DSearchSet(list)
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

  // 删除记录
  closeLog = (index) => {
    const { search, DSearchSet } = this.props;
    search.splice(index, 1)
    DSearchSet(search)
  }

  render() {
    const { list, show, applist, value } = this.state;
    const { search, userInfo:{usertype} } = this.props

    return (
      <View className="Searchs">
        <AtMessage />
        <SearchView placeholder="请输入搜索关键词" value={value} onChange={(value) => this.onChange(value) } />
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
            {
              search.length === 0 ? '' : 
              <>
                <View className="Searchs-title">历史搜索</View>
                {
                  search.map((item, index) => (
                    <View className="Searchs-list" key={index + 'searchs'}>
                      <View className="Searchs-list-left" onClick={() => this.goWebView(item.url, item.fwusertype, item.name, usertype)}>
                        <View className="Searchs-list-left-clock"></View>
                        <View className="Searchs-list-left-text">{item.name}</View>
                      </View>
                      <View className="Searchs-list-close" onClick={() => this.closeLog(index)}></View>
                    </View>
                  ))
                }
                <View className="Searchs-log">
                  <View className="Searchs-log-text">清除所有历史记录</View>
                </View>
              </>
            }
          </>
        }
      </View>
    )
  }
}

export default Search;
