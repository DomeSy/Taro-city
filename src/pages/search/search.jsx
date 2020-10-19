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
      ]
    }
  }

  onChange = (value) => {
    this.setState({
      value
    })
  }

  render() {

    const { list } = this.state;

    return (
      <View className="Search">
        {/* <SearchView placeholder="请输入搜索关键词" onChange={(value) => this.onChange(value) } /> */}
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

      </View>
    )
  }
}

export default Search;
