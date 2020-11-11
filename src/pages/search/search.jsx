import React, { Component } from 'react'
import { View, Text } from '@tarojs/components';
import { SearchView } from '@components'
import { JmasRequest, Jump, Method } from '@unilts'
import { connect } from 'react-redux'
import * as actions from '@actions/search'
import { AtMessage } from 'taro-ui'
import './search.scss'

@connect(({site, user, home, search}) => ({...site, ...home, ...user, ...search}), {...actions})
class Search extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      value: '',
      searchList: [],
      show: false,
      applist: [] //搜索列表
    }
  }

  componentDidMount = () => {
    const { DSearchInit, home } = this.props
    const searchList = home.searchList.listAll.length === 0 ? home.searchList.apps.data : home.searchList.listAll;
    this.setState({
      searchList
    })
    DSearchInit()
  }

  // 获得值
  onChange = async (value) => {
    const { siteid } = this.props.site
    const res = await JmasRequest('jmportalnzjk', 'searchinfolist', {
      siteid,
      keyword: value,
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

  // 点热门的应用
  goSearch = (url, fwusertype, name) => {
    const { userInfo:{usertype} } = this.props;
    this.set({ url, fwusertype, name })
    this.goWebView(url, fwusertype, name, usertype)
  }

  goWeb = item => {
    const { userInfo:{usertype} } = this.props;
    const { url, fwusertype, name } = item;
    this.setState({
      value: '',
      show: false
    })
    this.set({ url, fwusertype, name })
    this.goWebView(url, fwusertype, name, usertype)
  }

  set = ({ url, fwusertype, name }) => {
    const { DSearchSet, search} = this.props;
    const arr = search.filter(items => items.name !== name)
    const list = [{url, fwusertype, name}, ...arr];
    DSearchSet(list)
  }
  
  // 用于判断事项是否是有个人法人的，是否登录状态
  goWebView = (url, fwusertype, name, type, token) => {
    if (fwusertype === 0) {
      url ? Jump({url}) : Jump({url: '/none', payload: {name}})
    } else {
      if(type){
        if(type === fwusertype || (fwusertype !== 1 && fwusertype !== 2)){
          url ? Jump({url, payload:{token, usertype: type}}) : Jump({url: '/none', payload: {name}})
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

  // 清楚所有记录
  clearLog = () => {
    this.props.DSearchClear()
  }

  render() {
    const { searchList, show, applist, value } = this.state;
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
                <View className="Searchs-result-list Searchs-result-none"><Text>暂无内容...</Text></View>
                :
                <>
                  {
                    applist.map((item, index) => (
                      <View className="Searchs-result-list" key={index} onClick={() => this.goWeb(item)}>
                        {
                          this.TextChange(item.name , value)
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
                searchList.map((item, index) => (
                  <Text className="Searchs-hot-text" key={index} onClick={() => this.goSearch(item.appIssueUrl, item.fwusertype, item.name)}>{item.name}</Text>
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
                      <View className="Searchs-list-left" onClick={() => this.goWebView(item.url, item.fwusertype, item.name, usertype, item.token)}>
                        <View className="Searchs-list-left-clock"></View>
                        <View className="Searchs-list-left-text">{item.name}</View>
                      </View>
                      <View className="Searchs-list-close" onClick={() => this.closeLog(index)}></View>
                    </View>
                  ))
                }
                <View className="Searchs-log" onClick={() => this.clearLog()}>
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
