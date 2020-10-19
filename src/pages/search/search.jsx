import React, { Component } from 'react'
import { View, Text } from '@tarojs/components';
import { SearchView } from '@components'
import './search.scss'

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
      ]
    }
  }

  onChange = (value) => {
    this.setState({
      value
    })
  }

  render() {

    const { list, lists } = this.state;

    return (
      <View className="Search">
        <SearchView placeholder="请输入搜索关键词" onChange={(value) => this.onChange(value) } />
        <View className="Search-border"></View>
        <View className="Search-title">热门搜索</View>
        <View className="Search-hot">
          {
            list.map((item, index) => (
              <Text className="Search-hot-text" key={index}>{item.text}</Text>
            ))
          }
        </View>
        <View className="Search-title">历史搜索</View>
        {
          lists.map((item, index) => (
            <View className="Search-list" key={index + 'search'}>
              <View className="Search-list-left">
                <View className="Search-list-left-clock"></View>
                <View className="Search-list-left-text">{item.text}</View>
              </View>
              <View className="Search-list-close"></View>
            </View>
          ))
        }
        <View className="Search-log">
          <View className="Search-log-text">清除所有历史记录</View>
        </View>
      </View>
    )
  }
}

export default Search;
